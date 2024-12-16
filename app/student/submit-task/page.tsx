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
      <Tabs defaultValue="account" className="max-w-7xl">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="account">IPA</TabsTrigger>
          <TabsTrigger value="password">Matematika</TabsTrigger>
          <TabsTrigger value="password">B-Indo</TabsTrigger>
        </TabsList>
        <TabsContent value="IPA">
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
        <TabsContent value="MM">
          <Card>
            <CardHeader>
              <CardTitle>MM</CardTitle>
              <CardDescription>
                Kirim tugas atau pekerjaan rumah matematika di sini.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <MathForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="B-indo">
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
      </Tabs>
    </div>
  );
}
