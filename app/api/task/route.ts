import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export async function POST(req: NextRequest) {
  try {
    const { fileName, fileData } = await req.json();

    console.log("Received fileName:", fileName);
    console.log("Received fileData length:", fileData?.length);

    if (!fileName || !fileData) {
      return NextResponse.json(
        { success: false, message: "Invalid data" },
        { status: 400 }
      );
    }

    const storageRef = ref(storage, `uploads/${fileName}`);

    const buffer = Buffer.from(fileData, "base64");

    const uploadTask = uploadBytesResumable(storageRef, buffer);

    await uploadTask;

    const downloadURL = await getDownloadURL(storageRef);
    console.log("Download URL obtained:", downloadURL);

    return NextResponse.json({ success: true, url: downloadURL });
  } catch (error) {
    console.error("Error uploading file:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Upload failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
