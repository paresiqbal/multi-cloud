"use client";

import Link from "next/link";
import { useAuth } from "../hooks/useAuth";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="p-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/dashboard" className="text-xl font-bold">
          <Image src="/assets/file.png" alt="Logo" width={50} height={50} />
        </Link>
        <div>
          {user ? (
            <>
              <div>
                <Link href="/dashboard/students" className="hover:underline">
                  Students
                </Link>
                <Link href="/dashboard/schools" className="hover:underline">
                  Schools
                </Link>
                {user && <p>{user.email}</p>}
                <Button onClick={logout}>Logout</Button>
              </div>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="mr-4">
                Login
              </Link>
              <Link href="/auth/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
