"use client";

// components
import { useAuth } from "@/hooks/useAuth";
import { SopForm } from "@/components/SopForm";
import { SopList } from "@/components/SopList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SchoolsPage() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto mt-10 p-4 max-w-7xl">
      <h1 className="text-2xl font-bold mb-4">
        Standar Operasional Prosedur (SOP)
      </h1>
      {user && (
        <>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Upload SOP Sekolah</h2>
            <SopForm />
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Cari SOP</CardTitle>
              <CardDescription>Lis SOP yang tersedia.</CardDescription>
            </CardHeader>
            <CardContent>
              <SopList />
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
