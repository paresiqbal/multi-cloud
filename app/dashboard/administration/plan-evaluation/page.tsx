"use client";

// components
import { EvaluationForm } from "@/components/EvaluationForm";
import { EvaluationList } from "@/components/EvaluationList";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Letter() {
  return (
    <div className="container mx-auto mt-10 p-4 max-w-7xl">
      <h1 className="text-2xl font-bold">Rencana dan Evaluasi</h1>
      <p className="mb-8">
        Rencana Kerja Sekolah (RKS), Evaluasi Diri Sekolah (EDS).
      </p>
      <div className="mb-8">
        <EvaluationForm />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Cari Surat - Surat</CardTitle>
          <CardDescription>Lis Surat yang tersedia.</CardDescription>
        </CardHeader>
        <CardContent>
          <EvaluationList />
        </CardContent>
      </Card>
    </div>
  );
}
