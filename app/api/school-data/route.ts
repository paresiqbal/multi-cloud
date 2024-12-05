import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("education_system");

    const schoolData = await db.collection("school_data").find({}).toArray();

    const data = schoolData.map((file) => ({
      ...file,
      _id: file._id.toString(),
      downloadURL: `/api/download-school-data/${file._id}`,
    }));

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching school data:", error);
    return NextResponse.json(
      { error: "Failed to fetch school data" },
      { status: 500 }
    );
  }
}
