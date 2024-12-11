"use client";

import Link from "next/link";
import { useAuth } from "../hooks/useAuth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="border-b p-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            className="h-10 w-10"
            width={50}
            height={50}
          />
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center">
                    File Siswa
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/dashboard/student/academic">Akademik</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/student/certificate">
                      Surat Keterangan
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/student/task">
                      Upload Tugas Siswa
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/student/download-task">
                      Ambil Tugas Siswa
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/student/ebook">Ebook</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center">
                    Staf & Guru
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/dashboard/staff-teacher/personal-data">
                      Data Pribadi
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/staff-teacher/personel-doc">
                      Dokumen Kepegawaian
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/staff-teacher/professional-development">
                      Pengembangan Profesional
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center">
                    Administrasi
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/dashboard/administration/letter">
                      Surat - Surat
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/administration/policy">
                      Dokumen Kebijakan
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/administration/plan-evaluation">
                      Rencana dan Evaluasi
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/administration/financial">
                      Dokumen Keuangan
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
            <div className="space-x-4 text-sm">
              <Link href="/student/student-task">Cari Tugas</Link>
              <Link href="/student/submit-task">Kirim Tugas</Link>
              <Link href="/student/ebook">Ebook</Link>
            </div>
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
              <div>
                <Button
                  variant="ghost"
                  className="w-full justify-between"
                  onClick={() => toggleDropdown("fileSiswa")}
                >
                  File Siswa
                  {openDropdown === "fileSiswa" ? (
                    <ChevronUp className="ml-2 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-2 h-4 w-4" />
                  )}
                </Button>
                {openDropdown === "fileSiswa" && (
                  <div className="pl-4 py-2 space-y-2">
                    <Link href="/dashboard/student/academic" className="block">
                      Akademik
                    </Link>
                    <Link
                      href="/dashboard/student/certificate"
                      className="block"
                    >
                      Surat Keterangan
                    </Link>
                    <Link href="/dashboard/student/task" className="block">
                      Upload Tugas Siswa
                    </Link>
                    <Link
                      href="/dashboard/student/download-task"
                      className="block"
                    >
                      Ambil Tugas Siswa
                    </Link>
                    <Link href="/dashboard/student/ebook" className="block">
                      Ebook
                    </Link>
                  </div>
                )}
              </div>
              <div>
                <Button
                  variant="ghost"
                  className="w-full justify-between"
                  onClick={() => toggleDropdown("stafGuru")}
                >
                  Staf & Guru
                  {openDropdown === "stafGuru" ? (
                    <ChevronUp className="ml-2 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-2 h-4 w-4" />
                  )}
                </Button>
                {openDropdown === "stafGuru" && (
                  <div className="pl-4 py-2 space-y-2">
                    <Link
                      href="/dashboard/staff-teacher/personal-data"
                      className="block"
                    >
                      Data Pribadi
                    </Link>
                    <Link
                      href="/dashboard/staff-teacher/personel-doc"
                      className="block"
                    >
                      Dokumen Kepegawaian
                    </Link>
                    <Link
                      href="/dashboard/staff-teacher/professional-development"
                      className="block"
                    >
                      Pengembangan Profesional
                    </Link>
                  </div>
                )}
              </div>
              <div>
                <Button
                  variant="ghost"
                  className="w-full justify-between"
                  onClick={() => toggleDropdown("administrasi")}
                >
                  Administrasi
                  {openDropdown === "administrasi" ? (
                    <ChevronUp className="ml-2 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-2 h-4 w-4" />
                  )}
                </Button>
                {openDropdown === "administrasi" && (
                  <div className="pl-4 py-2 space-y-2">
                    <Link
                      href="/dashboard/administration/letter"
                      className="block"
                    >
                      Surat - Surat
                    </Link>
                    <Link
                      href="/dashboard/administration/policy"
                      className="block"
                    >
                      Dokumen Kebijakan
                    </Link>
                    <Link
                      href="/dashboard/administration/plan-evaluation"
                      className="block"
                    >
                      Rencana dan Evaluasi
                    </Link>
                    <Link
                      href="/dashboard/administration/financial"
                      className="block"
                    >
                      Dokumen Keuangan
                    </Link>
                  </div>
                )}
              </div>
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
              <Link href="/student/student-task" onClick={toggleMenu}>
                <Button variant="ghost" className="w-full">
                  Cari Tugas
                </Button>
              </Link>
              <Link href="/student/submit-task" onClick={toggleMenu}>
                <Button variant="ghost" className="w-full">
                  Kirim Tugas
                </Button>
              </Link>
              <Link href="/student/ebook" onClick={toggleMenu}>
                <Button variant="ghost" className="w-full">
                  Ebook
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
