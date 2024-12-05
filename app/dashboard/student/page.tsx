"use client";

import { useState } from "react";

const FileUploadProxy = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file!");

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = async () => {
        const base64Data = reader.result?.toString().split(",")[1];
        const response = await fetch("/api/task", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fileName: file.name,
            fileData: base64Data,
          }),
        });

        const data = await response.json();
        if (data.success) {
          alert(`File uploaded successfully! URL: ${data.url}`);
        } else {
          alert("Upload failed!");
        }
      };
    } catch (error) {
      console.error("Upload error:", error);
      alert("An error occurred during upload.");
    }
  };

  return (
    <div>
      <h2>Upload File</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUploadProxy;
