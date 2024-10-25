"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Hello World</h1>
      <Button onClick={() => router.push("/dashboard")}>Go page dashs</Button>
    </div>
  );
};

export default LoginPage;
