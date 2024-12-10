"use client";

import { PersonalForm } from "@/components/PersonalForm";
import { PersonalList } from "@/components/PersonalList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PersonalData() {
  return (
    <div className="container mx-auto mt-10 p-4 max-w-7xl">
      <h1 className="text-2xl font-bold">Data Pribadi</h1>
      <p className="mb-8">
        CV, surat lamaran kerja, dan dokumen identitas (KTP, KK, NPWP, BPJS),
        Ijazah dan sertifikat pendukung.
      </p>
      <div className="mb-8">
        <PersonalForm />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cari Dokumen</CardTitle>
          <CardDescription>List dokumen.</CardDescription>
        </CardHeader>
        <CardContent>
          <PersonalList />
        </CardContent>
      </Card>
    </div>
  );
}
