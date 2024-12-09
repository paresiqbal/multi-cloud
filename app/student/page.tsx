import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function StudentPage() {
  return (
    <div className="container mx-auto mt-10 p-4 max-w-7xl">
      <h1>Student Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aliquid?
      </p>
      <Link href="/student/student-task">
        <Button>Cari Tugas</Button>
      </Link>
    </div>
  );
}
