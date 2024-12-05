"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { LoaderCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    if (!formData.email || !formData.password) {
      toast({
        title: "Atenção",
        description: "Preencha todos os campos",
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      router.push("/pages/dashboard");
    }, 100);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.type]: e.target.value });
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2">
        <h1 className="text-3xl font-bold">Login</h1>
        <Input
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          placeholder="Senha"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button className="w-full" onClick={handleLogin}>
          {isLoading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <ArrowTopRightIcon />
          )}
          {isLoading ? "Carregando..." : "Entrar"}
        </Button>
      </main>
    </div>
  );
}
