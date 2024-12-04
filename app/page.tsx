import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 flex">
      <Image src="/assets/file.png" width={500} height={500} alt="file" />
      <div>
        <h1>SMA Negeri 1 Indonesia</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,
          aperiam?
        </p>
        <div>
          <Button>Register</Button>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
}
