"use client";

// components
import { LetterForm } from "@/components/LetterForm";
import { LetterList } from "@/components/LetterList";

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
        <LetterForm />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Cari Surat - Surat</CardTitle>
          <CardDescription>Lis Surat yang tersedia.</CardDescription>
        </CardHeader>
        <CardContent>
          <LetterList />
        </CardContent>
      </Card>
    </div>
  );
}
