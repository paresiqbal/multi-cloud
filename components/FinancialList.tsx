"use client";

import { useState, useCallback, useEffect } from "react";

// ui
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

// icons
import { Search, Trash } from "lucide-react";

interface File {
  _id: string;
  filename: string;
  size: number;
  uploadDate: string;
}

export function FinancialList() {
  const [files, setFiles] = useState<File[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState<string | null>(null);

  const searchFiles = useCallback(async () => {
    if (!searchQuery.trim()) {
      setFiles([]);
      return;
    }

    try {
      const response = await fetch(
        `/api/financial/financial-search?query=${encodeURIComponent(
          searchQuery
        )}`
      );

      if (response.ok) {
        const data = await response.json();
        setFiles(data);
        setError(null);
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to search files");
      }
    } catch (err) {
      console.error("Error searching files:", err);
      setError("An unexpected error occurred.");
    }
  }, [searchQuery]);

  const handleDownload = async (fileId: string, filename: string) => {
    try {
      const response = await fetch(
        `/api/financial/financial-download/${fileId}`
      );
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        const errorData = await response.json();
        console.error("Failed to download file:", errorData.error);
      }
    } catch (err) {
      console.error("Error downloading file:", err);
    }
  };

  // useEffect to fetch files when the component mounts
  useEffect(() => {
    // Optionally, you can set an initial search query or fetch all files
    // For example, to fetch all files without filtering:
    const fetchAllFiles = async () => {
      try {
        const response = await fetch(`/api/financial/financial-search`);
        if (response.ok) {
          const data = await response.json();
          setFiles(data);
          setError(null);
        } else {
          const errorData = await response.json();
          setError(errorData.error || "Failed to fetch files");
        }
      } catch (err) {
        console.error("Error fetching files:", err);
        setError("An unexpected error occurred.");
      }
    };

    fetchAllFiles();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Search files..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button onClick={searchFiles}>
          <Search className="w-4 h-4" />
        </Button>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Table>
        <TableHeader>
          <TableRow className="bg-zinc-200">
            <TableHead>Nama File</TableHead>
            <TableHead>Ukuran</TableHead>
            <TableHead>Tanggal Unggah</TableHead>
            <TableHead>Aksi</TableHead>
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
              <TableCell className="flex items-center gap-2">
                <Button onClick={() => handleDownload(file._id, file.filename)}>
                  Unduh
                </Button>
                <Button>
                  <Trash className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
