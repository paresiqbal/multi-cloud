"use client";

import { AcademicForm } from "@/components/AcademicForm";
import { AcademicList } from "@/components/AcademicList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Surat() {
  return (
    <div className="container mx-auto mt-10 p-4 max-w-7xl">
      <h1 className="text-2xl font-bold">Surat Keterangan</h1>
      <p className="mb-8">
        Surat Keterangan Aktif Sekolah, Surat Keterangan Pindah Sekolah, Surat
        Keterangan Lulus.
      </p>
      <div className="mb-8">
        <AcademicForm />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cari Dokumen</CardTitle>
          <CardDescription>List dokumen.</CardDescription>
        </CardHeader>
        <CardContent>
          <AcademicList />
        </CardContent>
      </Card>
    </div>
  );
}
