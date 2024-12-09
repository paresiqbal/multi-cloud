"use client";

import { LetterForm } from "@/components/LetterForm";
import { LetterList } from "@/components/LetterList";
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
        <LetterForm />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cari Dokumen</CardTitle>
          <CardDescription>List dokumen.</CardDescription>
        </CardHeader>
        <CardContent>
          <LetterList />
        </CardContent>
      </Card>
    </div>
  );
}
