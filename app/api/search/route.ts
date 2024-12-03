import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json(
      { error: "No search query provided" },
      { status: 400 }
    );
  }

  try {
    const client = await clientPromise;
    const db = client.db("multi-cloud");
    const collection = db.collection("uploads");

    const files = await collection
      .find(
        { filename: { $regex: query, $options: "i" } },
        { projection: { content: 0 } }
      )
      .toArray();

    return NextResponse.json(files);
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json(
      { error: "Failed to search files" },
      { status: 500 }
    );
  }
}
