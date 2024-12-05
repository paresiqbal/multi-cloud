"use client";

import { useAuth } from "@/hooks/useAuth";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto mt-10 p-2 max-w-6xl">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {user && <p>Welcome, {user.email}!</p>}
    </div>
  );
}
