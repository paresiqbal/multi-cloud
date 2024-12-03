import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(
  request: NextRequest,
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

    const headers = new Headers();
    headers.set(
      "Content-Disposition",
      `attachment; filename="${file.filename}"`
    );
    headers.set("Content-Type", file.type);

    return new NextResponse(file.content.buffer, {
      headers,
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Failed to download file" },
      { status: 500 }
    );
  }
}
