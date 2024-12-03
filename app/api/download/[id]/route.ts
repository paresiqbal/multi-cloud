import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db("multi-cloud");
    const collection = db.collection("uploads");

    const file = await collection.findOne({ _id: new ObjectId(params.id) });

    if (!file) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    if (!file.content || !(file.content instanceof Buffer)) {
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

    return new NextResponse(file.content, { headers });
  } catch (error) {
    // Simplified error handling
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Download error:", errorMessage);
    return NextResponse.json(
      { error: "Failed to download file", details: errorMessage },
      { status: 500 }
    );
  }
}
