import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("education_system");

    const studentTasks = await db
      .collection("student_tasks")
      .find({})
      .toArray();

    const tasks = studentTasks.map((file) => ({
      ...file,
      _id: file._id.toString(),
    }));

    return NextResponse.json(tasks);
  } catch (error) {
    console.error("Error fetching student tasks:", error);
    return NextResponse.json(
      { error: "Failed to fetch student tasks" },
      { status: 500 }
    );
  }
}
