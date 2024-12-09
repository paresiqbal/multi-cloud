"use client";

import { SopForm } from "@/components/SopForm";
// components
import { SopList } from "@/components/SopList";
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
      <h1 className="text-2xl font-bold">Surat - Menyurat</h1>
      <p className="mb-8">Surat Masuk, Surat Keluar.</p>
      <div className="mb-8">
        <SopForm />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Cari Surat - Surat</CardTitle>
          <CardDescription>Lis Surat yang tersedia.</CardDescription>
        </CardHeader>
        <CardContent>
          <SopList />
        </CardContent>
      </Card>
    </div>
  );
}
