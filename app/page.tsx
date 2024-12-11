import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center p-8 sm:p-20">
        <div className="max-w-6xl w-full mx-auto grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              SMA Negeri 3 Rangkasbitung
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-prose mx-auto lg:mx-0">
              Cloud storage untuk dokumentasi sekolah dan tugas siswa. Akses
              mudah, aman, dan efisien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/student">
                <Button size="lg" className="w-full sm:w-auto">
                  Dashboard Siswa
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Login Staff
                </Button>
              </Link>
            </div>
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-2">
                Belum punya akun?
              </p>
              <Link href="/auth/register">
                <Button variant="link" className="text-primary">
                  Daftar sekarang
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none">
            <Image
              src="/assets/file.png"
              alt="File management illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 SMA Negeri 3 Rangkasbitung. Hak cipta dilindungi
            undang-undang.
          </p>
        </div>
      </footer>
    </div>
  );
}
