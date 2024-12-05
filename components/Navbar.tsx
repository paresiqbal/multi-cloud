"use client";

import Link from "next/link";
import { useAuth } from "../hooks/useAuth";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="border-b p-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/dashboard" className="text-xl font-bold">
          <Image src="/assets/file.png" alt="Logo" width={50} height={50} />
        </Link>
        <div>
          {user ? (
            <>
              <div className="flex justify-center items-center gap-8">
                <Link
                  href="/dashboard/student/task"
                  className="hover:underline"
                >
                  Tugas Siswa
                </Link>
                <Link href="/dashboard/school/sop" className="hover:underline">
                  Sop Sekolah
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
