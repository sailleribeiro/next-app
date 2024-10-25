"use client";
import { ModeToggle } from "@/components/themes/theme-mode";
import { Button } from "@/components/ui/button";
import ContainerPage from "@/containers/container-page";
import { useUtils } from "@/lib/utils";
import React from "react";

const Dashboard: React.FC = () => {
  const { router } = useUtils();
  return (
    <ContainerPage>
      <div className="flex w-full items-center justify-end gap-2 ">
        <Button onClick={() => router.push("/")}>Sair</Button>
        <ModeToggle />
      </div>
    </ContainerPage>
  );
};

export default Dashboard;
