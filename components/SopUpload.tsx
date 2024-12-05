"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SopUpload() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload-school-data", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      setFile(null);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="school-data">Upload School Data</Label>
        <Input
          id="school-data"
          type="file"
          onChange={handleFileChange}
          className="mt-1"
        />
      </div>
      <Button onClick={handleUpload} disabled={!file}>
        Upload School Data
      </Button>
    </div>
  );
}
