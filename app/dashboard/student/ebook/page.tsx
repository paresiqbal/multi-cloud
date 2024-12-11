"use client";

import { CertificateForm } from "@/components/CertificateForm";
import { CertificateList } from "@/components/CertificateList";
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
        <CertificateForm />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cari Ebook</CardTitle>
          <CardDescription>List ebook.</CardDescription>
        </CardHeader>
        <CardContent>
          <CertificateList />
        </CardContent>
      </Card>
    </div>
  );
}
