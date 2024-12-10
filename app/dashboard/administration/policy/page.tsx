"use client";

// components
import { PolicyForm } from "@/components/PolicyForm";
import { PolicyList } from "@/components/PolicyList";
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
      <h1 className="text-2xl font-bold">Surat Kebijakan</h1>
      <p className="mb-8">
        SOP (Standar Operasional Prosedur), Tata tertib sekolah.
      </p>
      <div className="mb-8">
        <PolicyForm />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Cari Surat - Surat</CardTitle>
          <CardDescription>Lis Surat yang tersedia.</CardDescription>
        </CardHeader>
        <CardContent>
          <PolicyList />
        </CardContent>
      </Card>
    </div>
  );
}
