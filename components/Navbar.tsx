"use client";

import Link from "next/link";
import { useAuth } from "../hooks/useAuth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="border-b p-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/dashboard" className="text-xl font-bold">
          <Image src="/assets/file.png" alt="Logo" width={50} height={50} />
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center">
                    Tugas Siswa
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/dashboard/student/task/create">
                      Create Task
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/student/task/view">View Tasks</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/student/task/submit">
                      Submit Task
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center">
                    Sop Sekolah
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/dashboard/school/sop/academic">
                      Academic SOP
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/school/sop/administrative">
                      Administrative SOP
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/school/sop/disciplinary">
                      Disciplinary SOP
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <p className="text-sm text-gray-600">{user.email}</p>
              <Button onClick={logout} variant="outline">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/auth/register">
                <Button>Register</Button>
              </Link>
            </>
          )}
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-2">
          {user ? (
            <div className="flex flex-col space-y-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between">
                    Tugas Siswa
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link
                      href="/dashboard/student/task/create"
                      onClick={toggleMenu}
                    >
                      Create Task
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/dashboard/student/task/view"
                      onClick={toggleMenu}
                    >
                      View Tasks
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/dashboard/student/task/submit"
                      onClick={toggleMenu}
                    >
                      Submit Task
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between">
                    Sop Sekolah
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link
                      href="/dashboard/school/sop/academic"
                      onClick={toggleMenu}
                    >
                      Academic SOP
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/dashboard/school/sop/administrative"
                      onClick={toggleMenu}
                    >
                      Administrative SOP
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/dashboard/school/sop/disciplinary"
                      onClick={toggleMenu}
                    >
                      Disciplinary SOP
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <p className="text-sm text-gray-600 px-2 py-1">{user.email}</p>
              <Button
                onClick={() => {
                  logout();
                  toggleMenu();
                }}
                className="w-full"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex flex-col space-y-2">
              <Link href="/auth/login" onClick={toggleMenu}>
                <Button variant="ghost" className="w-full">
                  Login
                </Button>
              </Link>
              <Link href="/auth/register" onClick={toggleMenu}>
                <Button className="w-full">Register</Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
