"use client";

import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";

interface File {
  _id: string;
  filename: string;
  size: number;
  uploadDate: string;
  downloadURL: string;
  source: "Firebase";
}

export default function TaskStudent() {
  const { user } = useAuth();
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch("/api/files");
        if (response.ok) {
          const data = await response.json();
          setFiles(data);
        } else {
          console.error("Failed to fetch files");
        }
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    if (user) {
      fetchFiles();
    }
  }, [user]);

  return (
    <div>
      <h1>Task Students Upload</h1>
      <ul>
        {files.map((file) => (
          <li key={file._id}>
            {file.filename} - {file.size} bytes - Uploaded on {file.uploadDate}
          </li>
        ))}
      </ul>
      <TaskStudent />
    </div>
  );
}
