import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(
  _request: NextRequest, // Prefix with underscore to indicate it's intentionally unused
  { params }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db("multi-cloud");
    const collection = db.collection("uploads");

    console.log("Attempting to find file with ID:", params.id);

    const file = await collection.findOne({ _id: new ObjectId(params.id) });

    if (!file) {
      console.log("File not found for ID:", params.id);
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    console.log("File found:", file.filename);

    if (!file.content || !(file.content instanceof Buffer)) {
      console.error("File content is missing or invalid");
      return NextResponse.json(
        { error: "File content is missing or invalid" },
        { status: 500 }
      );
    }

    const headers = new Headers();
    headers.set(
      "Content-Disposition",
      `attachment; filename="${file.filename}"`
    );
    headers.set("Content-Type", file.type || "application/octet-stream");
    headers.set("Content-Length", file.content.length.toString());

    console.log(
      "Sending file:",
      file.filename,
      "Size:",
      file.content.length,
      "bytes"
    );

    return new NextResponse(file.content, {
      headers,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Download error:", error);
      return NextResponse.json(
        { error: "Failed to download file", details: error.message },
        { status: 500 }
      );
    } else {
      console.error("Unexpected error:", error);
      return NextResponse.json(
        { error: "Failed to download file", details: "Unknown error" },
        { status: 500 }
      );
    }
  }
}
