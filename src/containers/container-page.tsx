import React from "react";

interface ContainerPageProps {
  children: React.ReactNode;
}

const ContainerPage: React.FC<ContainerPageProps> = ({ children }) => {
  return (
    <div className="p-8 h-screen gap-4 flex flex-col overflow-y-auto ">
      {children}
    </div>
  );
};

export default ContainerPage;
