"use client";
import { Component } from "@/components/charts/area-chart";
import { ModeToggle } from "@/components/themes/theme-mode";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ContainerPage from "@/containers/container-page";
import { useUtils } from "@/lib/utils";
import React from "react";

const Dashboard: React.FC = () => {
  const { router } = useUtils();
  const dataBigNumber = [
    {
      title: "Meta",
      value: "100 horas",
    },
    {
      title: "Pendente",
      value: "60 horas",
    },
    {
      title: "Realizado",
      value: "40 horas",
    },
    {
      title: "Extra",
      value: "00:00 horas",
    },
  ];
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
        <div className="flex flex-col lg:flex-row w-full gap-4">
          {dataBigNumber.map((item, index) => (
            <Card key={index} className="w-full lg:w-1/4">
              <CardHeader>
                <CardDescription>{item.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <CardTitle>{item.value}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>

        <Component />
      </ContainerPage>
    </>
  );
};

export default Dashboard;
