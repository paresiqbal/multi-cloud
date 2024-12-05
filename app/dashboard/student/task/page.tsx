"use client";

import { TaskList } from "@/components/TaskList";
import { TaskForm } from "@/components/TaskForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StudentTask() {
  return (
    <div className="container mx-auto mt-10 p-4 max-w-7xl">
      <h1 className="text-2xl font-bold mb-4">Tugas Siswa</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Upload Tugas Siswa</h2>
        <TaskForm />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cari Tugas</CardTitle>
          <CardDescription>Lis tugas siswa.</CardDescription>
        </CardHeader>
        <CardContent>
          <TaskList />
        </CardContent>
      </Card>
    </div>
  );
}
