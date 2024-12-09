import Image from "next/image";
import Link from "next/link";

// ui
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-center min-h-screen p-8 sm:p-20 gap-16">
      <Image src="/assets/file.png" width={500} height={500} alt="file" />
      <div className="text-center sm:text-left space-y-4">
        <h1 className="text-3xl sm:text-5xl font-bold">
          SMA Negeri 1 Indonesia
        </h1>
        <p className="text-sm sm:text-base leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          omnis.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/auth/register">
            <Button className="bg-amber-500">Upload Tugas</Button>
          </Link>
        </div>
        <p>Atau</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/auth/register">
            <Button variant="outline">Register</Button>
          </Link>
          <Link href="/auth/login">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
