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
      <h1 className="text-2xl font-bold">Tugas Siswa</h1>
      <p className="mb-8">Unggah tugas atau pekerjaan rumah siswa.</p>
      <div className="mb-8">
        <TaskForm />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cari Tugas</CardTitle>
          <CardDescription>List tugas siswa.</CardDescription>
        </CardHeader>
        <CardContent>
          <TaskList />
        </CardContent>
      </Card>
    </div>
  );
}
