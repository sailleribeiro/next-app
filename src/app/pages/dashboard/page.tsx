"use client";
import { ModeToggle } from "@/components/themes/theme-mode";
import { Button } from "@/components/ui/button";
import ContainerPage from "@/containers/container-page";
import { useUtils } from "@/lib/utils";
import React from "react";

const Dashboard: React.FC = () => {
  const { router } = useUtils();
  return (
    <>
      <ContainerPage>
        <header className="flex w-full items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboards</h1>

          <div className="flex items-center gap-2">
            <Button onClick={() => router.push("/")}>Sair</Button>
            <ModeToggle />
          </div>
        </header>
      </ContainerPage>
    </>
  );
};

export default Dashboard;
