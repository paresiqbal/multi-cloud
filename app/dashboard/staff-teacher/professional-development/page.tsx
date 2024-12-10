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

export default function ProfessionalDevelopment() {
  return (
    <div className="container mx-auto mt-10 p-4 max-w-7xl">
      <h1 className="text-2xl font-bold">Pengembangan Profesional</h1>
      <p className="mb-8">
        Sertifikasi guru, Pelatihan dan workshop yang diikuti.
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
