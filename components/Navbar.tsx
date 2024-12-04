"use client";

import Link from "next/link";
import { useAuth } from "../hooks/useAuth";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="p-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          My App
        </Link>
        <div>
          {user ? (
            <>
              <Link href="/dashboard" className="mr-4">
                Dashboard
              </Link>
              <Button onClick={logout} variant="ghost">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login" className="mr-4">
                Login
              </Link>
              <Link href="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
