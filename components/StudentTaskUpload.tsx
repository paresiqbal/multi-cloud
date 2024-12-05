"use client";

import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { storage } from "../lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function StudentTaskUpload() {
  const [file, setFile] = useState<File | null>(null);
  const { user } = useAuth();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file || !user) return;

    try {
      const storageRef = ref(
        storage,
        `students/${user.uid}/tasks/${file.name}`
      );
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      const response = await fetch("/api/upload-student-task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filename: file.name,
          size: file.size,
          type: file.type,
          downloadURL,
          userId: user.uid,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save task metadata");
      }
      setFile(null);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="student-task">Upload Task</Label>
        <Input
          id="student-task"
          type="file"
          onChange={handleFileChange}
          className="mt-1"
        />
      </div>
      <Button onClick={handleUpload} disabled={!file}>
        Upload Task
      </Button>
    </div>
  );
}
