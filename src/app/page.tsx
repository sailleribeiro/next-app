"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUtils } from "@/lib/utils";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function Home() {
  const { router } = useUtils();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-end">
        <div className="flex items-start justify-start w-full">
          <h1 className="text-3xl font-bold">Login</h1>
        </div>
        <Input placeholder="Email" type="email" />
        <Input placeholder="Senha" type="password" />
        <Button onClick={() => router.push("/pages/dashboard")}>
          <ArrowTopRightIcon />
          Entrar
        </Button>
      </main>
    </div>
  );
}
