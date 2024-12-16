import { AgamaForm } from "@/components/studentTask/AgamaForm";
import { BindoForm } from "@/components/studentTask/BindoForm";
import { IpaForm } from "@/components/studentTask/IpaForm";
import { MathForm } from "@/components/studentTask/MathForm";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SubmitTask() {
  return (
    <div className="container mx-auto mt-10 p-4 max-w-7xl">
      <h1 className="mb-6 text-xl font-bold">
        Kirim tugas atau pekerjaan rumah
      </h1>
      <Tabs defaultValue="ipa" className="max-w-7xl">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="ipa">IPA</TabsTrigger>
          <TabsTrigger value="matematika">Matematika</TabsTrigger>
          <TabsTrigger value="bindo">B-Indo</TabsTrigger>
          <TabsTrigger value="agama">Agama</TabsTrigger>
        </TabsList>
        <TabsContent value="ipa">
          <Card>
            <CardHeader>
              <CardTitle>Ilmu Pengetahuan Alam</CardTitle>
              <CardDescription>
                Kirim tugas atau pekerjaan rumah IPA di sini.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <IpaForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="matematika">
          <Card>
            <CardHeader>
              <CardTitle>Matematika</CardTitle>
              <CardDescription>
                Kirim tugas atau pekerjaan rumah matematika di sini.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <MathForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="bindo">
          <Card>
            <CardHeader>
              <CardTitle>Bahasa Indonesia</CardTitle>
              <CardDescription>
                Kirim tugas atau pekerjaan rumah matematika di sini.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <BindoForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="agama">
          <Card>
            <CardHeader>
              <CardTitle>Agama</CardTitle>
              <CardDescription>
                Kirim tugas atau pekerjaan rumah matematika di sini.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <AgamaForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
