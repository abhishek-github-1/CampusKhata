import React from "react";
import { Navigation } from "@/components/ui/navigation";
import { BankingModules } from "@/components/modules/banking-modules";

const Banking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BankingModules />
      </main>
    </div>
  );
};

export default Banking;