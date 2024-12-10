import { IpaForm } from "@/components/studentTask/IpaForm";

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
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">IPA</TabsTrigger>
          <TabsTrigger value="password">Matematika</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
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
        <TabsContent value="password">
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
      </Tabs>
    </div>
  );
}
