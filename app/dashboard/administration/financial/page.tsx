"use client";

// components
import { FinancialForm } from "@/components/FinancialForm";
import { FinancialList } from "@/components/FinancialList";

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
      <h1 className="text-2xl font-bold">Dokumen Keuangan</h1>
      <p className="mb-8">
        Rencana Anggaran Pendapatan dan Belanja Sekolah (RAPBS), Bukti transaksi
        keuangan, laporan keuangan.
      </p>
      <div className="mb-8">
        <FinancialForm />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Cari Surat - Surat</CardTitle>
          <CardDescription>Lis Surat yang tersedia.</CardDescription>
        </CardHeader>
        <CardContent>
          <FinancialList />
        </CardContent>
      </Card>
    </div>
  );
}
