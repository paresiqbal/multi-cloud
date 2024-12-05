"use client";

import { useState } from "react";
import supabase from "@/lib/supabase";
import { SupabaseFileList } from "@/components/FileList";
import { Card, CardContent } from "@/components/ui/card";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  // Upload file
  const uploadFile = async () => {
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      const filePath = `uploads/${file.name}`;
      const { data, error } = await supabase.storage
        .from("task")
        .upload(filePath, file, {
          contentType: file.type,
          upsert: true,
        });

      if (error) throw error;

      console.log("File uploaded:", data);
    } catch (err: unknown) {
      console.error("Upload error:", err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadFile} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Card>
        <CardContent>
          <SupabaseFileList />
        </CardContent>
      </Card>
    </div>
  );
}
