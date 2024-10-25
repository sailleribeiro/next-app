import React from "react";

interface ContainerPageProps {
  children: React.ReactNode;
}

const ContainerPage: React.FC<ContainerPageProps> = ({ children }) => {
  return <div className="p-8 h-screen">{children}</div>;
};

export default ContainerPage;
