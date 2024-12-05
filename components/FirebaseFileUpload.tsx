"use client";

import { useState } from "react";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { storage } from "@/lib/firebase";

export function FirebaseFileUpload() {
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
      const storageRef = ref(storage, `uploads/${user.uid}/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      // Save file metadata to your backend
      const response = await fetch("/api/upload-firebase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filename: file.name,
          size: file.size,
          type: file.type,
          downloadURL,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save file metadata");
      }
      setFile(null);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="firebase-file">
          Select a file to upload to Firebase
        </Label>
        <Input
          id="firebase-file"
          type="file"
          onChange={handleFileChange}
          className="mt-1"
        />
      </div>
      <Button onClick={handleUpload} disabled={!file}>
        Upload to Firebase
      </Button>
    </div>
  );
}
