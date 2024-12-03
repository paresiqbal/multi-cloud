"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface File {
  _id: string;
  filename: string;
  size: number;
  uploadDate: string;
}

export function FileList() {
  const [files, setFiles] = useState<File[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const searchFiles = async () => {
    try {
      const response = await fetch(
        `/api/search?query=${encodeURIComponent(searchQuery)}`
      );
      if (response.ok) {
        const data = await response.json();
        setFiles(data);
      } else {
        console.error("Failed to search files");
      }
    } catch (error) {
      console.error("Error searching files:", error);
    }
  };

  useEffect(() => {
    searchFiles();
  }, []);

  const handleDownload = (fileId: string, filename: string) => {
    window.location.href = `/api/download/${fileId}`;
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Search files..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button onClick={searchFiles}>Search</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Filename</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Upload Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {files.map((file) => (
            <TableRow key={file._id}>
              <TableCell>{file.filename}</TableCell>
              <TableCell>{Math.round(file.size / 1024)} KB</TableCell>
              <TableCell>
                {new Date(file.uploadDate).toLocaleString()}
              </TableCell>
              <TableCell>
                <Button onClick={() => handleDownload(file._id, file.filename)}>
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
