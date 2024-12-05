"use client";

import { useState } from "react";
import supabase from "@/lib/supabase";
import { SupabaseFileList } from "@/components/FileList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StudentTask() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

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
    <div className="container mx-auto mt-10 p-4 max-w-7xl">
      <h1 className="text-2xl font-bold mb-4">Tugas Siswa</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Upload SOP Sekolah</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={uploadFile} disabled={uploading}>
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
      <Card>
        <CardHeader>
          <CardTitle>Cari Tugas</CardTitle>
          <CardDescription>Lis tugas siswa.</CardDescription>
        </CardHeader>
        <CardContent>
          <SupabaseFileList />
        </CardContent>
      </Card>
    </div>
  );
}
