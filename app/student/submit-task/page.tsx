"use client";

import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Beaker,
  BookOpen,
  Calculator,
  GraduationCap,
  Languages,
  Palette,
  Music,
  Globe,
} from "lucide-react";

const subjects = [
  { id: "ipa", name: "IPA", icon: Beaker, form: IpaForm },
  { id: "matematika", name: "Matematika", icon: Calculator, form: MathForm },
  { id: "bindo", name: "B-Indo", icon: BookOpen, form: BindoForm },
  { id: "agama", name: "Agama", icon: GraduationCap, form: AgamaForm },
  { id: "english", name: "English", icon: Languages, form: BindoForm },
  { id: "seni", name: "Seni", icon: Palette, form: AgamaForm },
  { id: "musik", name: "Musik", icon: Music, form: IpaForm },
  { id: "ips", name: "IPS", icon: Globe, form: MathForm },
];

export default function SubmitTask() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-10 p-4 max-w-7xl">
      <h1 className="mb-6 text-3xl font-bold">
        Kirim Tugas atau Pekerjaan Rumah
      </h1>
      <Input
        type="text"
        placeholder="Cari mata pelajaran..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4"
      />
      <Tabs defaultValue="ipa" className="max-w-7xl">
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <TabsList className="inline-flex w-max p-1">
            {filteredSubjects.map((subject) => (
              <TabsTrigger
                key={subject.id}
                value={subject.id}
                className="inline-flex items-center gap-2"
              >
                <subject.icon className="h-4 w-4" />
                {subject.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </ScrollArea>
        {filteredSubjects.map((subject) => (
          <TabsContent key={subject.id} value={subject.id}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <subject.icon className="h-6 w-6" />
                  {subject.name}
                </CardTitle>
                <CardDescription>
                  Kirim tugas atau pekerjaan rumah {subject.name} di sini.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <subject.form />
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
