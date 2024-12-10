"use client";

import { ProfessionalForm } from "@/components/ProfessionalForm";
import { ProfessionalList } from "@/components/ProfessionalList";
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
        <ProfessionalForm />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cari Dokumen</CardTitle>
          <CardDescription>List dokumen.</CardDescription>
        </CardHeader>
        <CardContent>
          <ProfessionalList />
        </CardContent>
      </Card>
    </div>
  );
}
