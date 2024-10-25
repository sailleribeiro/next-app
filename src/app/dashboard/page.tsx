"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const Dashboard: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Dashboard Page</h1>
      <Button onClick={() => router.push("/login")}>go Login page</Button>
    </div>
  );
};

export default Dashboard;
