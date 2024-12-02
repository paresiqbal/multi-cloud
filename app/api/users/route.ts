import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";
import { db } from "../../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function GET() {
  try {
    // Fetch users from MongoDB
    const mongoClient = await clientPromise;
    const mongoDb = mongoClient.db("your_database_name");
    const mongoUsers = await mongoDb.collection("users").find({}).toArray();

    // Fetch users from Firebase
    const firebaseUsersSnapshot = await getDocs(collection(db, "users"));
    const firebaseUsers = firebaseUsersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({
      mongoUsers,
      firebaseUsers,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
