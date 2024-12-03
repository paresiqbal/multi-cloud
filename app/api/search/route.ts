import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  try {
    const client = await clientPromise;
    const db = client.db("multi-cloud");
    const collection = db.collection("uploads");

    // If no query is provided, return all files or an empty array
    const filter = query ? { filename: { $regex: query, $options: "i" } } : {}; // Empty filter fetches all files

    const files = await collection
      .find(filter, { projection: { content: 0 } })
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
