import { TaskList } from "@/components/TaskList";
import React from "react";

export default function StudentTaskUpload() {
  return (
    <div className="container mx-auto mt-10 p-4 max-w-7xl">
      <h1 className="mb-6 text-xl font-bold">
        Cari tugas atau pekerjaan rumah.
      </h1>
      <TaskList />
    </div>
  );
}
