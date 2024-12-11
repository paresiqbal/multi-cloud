import { EbookList } from "@/components/EbookList";

export default function Ebook() {
  return (
    <div className="container mx-auto mt-10 p-4 max-w-7xl">
      <h1 className="mb-6 text-xl font-bold">Cari ebook.</h1>
      <EbookList />
    </div>
  );
}
