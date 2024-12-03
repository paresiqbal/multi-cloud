import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("multi-cloud");
    const collection = db.collection("uploads");

    // Store file metadata in MongoDB
    const result = await collection.insertOne({
      filename: file.name,
      size: file.size,
      type: file.type,
      uploadDate: new Date(),
    });

    // In a real-world scenario, you'd store the actual file in a file storage service
    // and save the file's URL or identifier in MongoDB along with the metadata

    return NextResponse.json({
      message: "File uploaded successfully",
      fileId: result.insertedId.toString(),
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}
