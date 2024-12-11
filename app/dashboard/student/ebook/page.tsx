"use client";

import { EbookForm } from "@/components/EbookForm";
import { EbookList } from "@/components/EbookList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Certificate() {
  return (
    <div className="container mx-auto mt-10 p-4 max-w-7xl">
      <h1 className="text-2xl font-bold">Ebook</h1>
      <p className="mb-8">
        Ebook versi digital dari buku cetak yang dapat dibaca di berbagai
        perangkat elektronik seperti komputer, tablet, atau smartphone
      </p>
      <div className="mb-8">
        <EbookForm />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cari Ebook</CardTitle>
          <CardDescription>List ebook.</CardDescription>
        </CardHeader>
        <CardContent>
          <EbookList />
        </CardContent>
      </Card>
    </div>
  );
}
