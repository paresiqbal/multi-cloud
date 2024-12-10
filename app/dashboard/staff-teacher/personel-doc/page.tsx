"use client";

import { PersonelForm } from "@/components/PersonelForm";
import { PersonelList } from "@/components/PersonelList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PersonelDoc() {
  return (
    <div className="container mx-auto mt-10 p-4 max-w-7xl">
      <h1 className="text-2xl font-bold">Dokumen Kepegawaian</h1>
      <p className="mb-8">
        SK Pengangkatan/Penugasan, Absensi dan evaluasi kinerja, Kontrak kerja
        (untuk guru/karyawan tidak tetap).
      </p>
      <div className="mb-8">
        <PersonelForm />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cari Dokumen</CardTitle>
          <CardDescription>List dokumen.</CardDescription>
        </CardHeader>
        <CardContent>
          <PersonelList />
        </CardContent>
      </Card>
    </div>
  );
}
