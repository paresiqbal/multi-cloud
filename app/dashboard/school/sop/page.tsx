"use client";

// components
import { useAuth } from "@/hooks/useAuth";
import { SopForm } from "@/components/SopForm";
import { SopList } from "@/components/SopList";

export default function SchoolsPage() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">School SOP</h1>
      {user && (
        <>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Upload School SOP</h2>
            <SopForm />
          </div>
          <SopList />
        </>
      )}
    </div>
  );
}
