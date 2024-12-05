import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

export async function POST(req: NextRequest) {
  try {
    const { fileName, fileData } = await req.json();

    if (!fileName || !fileData) {
      return NextResponse.json(
        { success: false, message: "Invalid data" },
        { status: 400 }
      );
    }

    const storageRef = ref(storage, `uploads/${fileName}`);
    const buffer = Buffer.from(fileData, "base64");

    await uploadBytes(storageRef, buffer);

    const downloadURL = await getDownloadURL(storageRef);

    return NextResponse.json({ success: true, url: downloadURL });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { success: false, message: "Upload failed" },
      { status: 500 }
    );
  }
}
