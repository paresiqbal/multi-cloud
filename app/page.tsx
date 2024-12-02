import { FileList } from "@/components/FileList";
import { UploadForm } from "@/components/UploadForm";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold mb-4">Document Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Upload Document</h2>
          <UploadForm />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">File List</h2>
          <FileList />
        </div>
      </div>
    </div>
  );
}
