import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-center min-h-screen p-8 sm:p-20 gap-16">
      <Image src="/assets/file.png" width={500} height={500} alt="file" />
      <div className="text-center sm:text-left space-y-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800">
          SMA Negeri 1 Indonesia
        </h1>
        <p className="text-base sm:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,
          aperiam?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button>Register</Button>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
}
