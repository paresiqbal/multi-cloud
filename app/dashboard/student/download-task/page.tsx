"use client";

import { IpaList } from "@/components/studentTask/IpaList";
import { MathList } from "@/components/studentTask/MathList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DownloadTask() {
  return (
    <div className="container mx-auto mt-10 p-4 max-w-7xl">
      <h1 className="text-2xl font-bold">Ambil Tugas Siswa</h1>
      <p className="mb-8">Unggah tugas atau pekerjaan rumah siswa.</p>
      <div className="mb-8">
        <Tabs defaultValue="account" className="max-w-7xl">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">IPA</TabsTrigger>
            <TabsTrigger value="password">Matematika</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Ilmu Pengetahuan Alam</CardTitle>
                <CardDescription>
                  Ambil tugas atau pekerjaan rumah IPA di sini.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <IpaList />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Matematika</CardTitle>
                <CardDescription>
                  Ambil tugas atau pekerjaan rumah matematika di sini.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <MathList />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
