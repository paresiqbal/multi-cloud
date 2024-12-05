"use client";

import { useState, useEffect } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAuth } from "@/hooks/useAuth";
import { SopUpload } from "@/components/SopUpload";

interface File {
  _id: string;
  filename: string;
  size: number;
  uploadDate: string;
  downloadURL: string;
}

export default function SchoolsPage() {
  const { user } = useAuth();
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch("/api/school-data");
        if (response.ok) {
          const data = await response.json();
          setFiles(data);
        } else {
          console.error("Failed to fetch school data");
        }
      } catch (error) {
        console.error("Error fetching school data:", error);
      }
    };

    if (user) {
      fetchFiles();
    }
  }, [user]);

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">School Data</h1>
      {user && (
        <>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Upload School Data</h2>
            <SopUpload />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Uploaded School Data</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Uploaded At</TableHead>
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
                      <a
                        href={file.downloadURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Download
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </>
      )}
    </div>
  );
}
