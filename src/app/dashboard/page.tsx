"use client";
import { Button } from "@/components/ui/button";
import { useUtils } from "@/lib/utils";
import React from "react";

const Dashboard: React.FC = () => {
  const { router } = useUtils();
  return (
    <div>
      <h1>Dashboard Page</h1>
      <Button onClick={() => router.push("/")}>Sair</Button>
    </div>
  );
};

export default Dashboard;
