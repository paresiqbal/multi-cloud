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
import { StudentTaskUpload } from "@/components/StudentTaskUpload";

interface File {
  _id: string;
  filename: string;
  size: number;
  uploadDate: string;
  downloadURL: string;
}

export default function StudentsPage() {
  const { user } = useAuth();
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch("/api/student-tasks");
        if (response.ok) {
          const data = await response.json();
          setFiles(data);
        } else {
          console.error("Failed to fetch student tasks");
        }
      } catch (error) {
        console.error("Error fetching student tasks:", error);
      }
    };

    if (user) {
      fetchFiles();
    }
  }, [user]);

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Student Tasks</h1>
      {user && (
        <>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Upload Student Task</h2>
            <StudentTaskUpload />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Your Tasks</h2>
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
