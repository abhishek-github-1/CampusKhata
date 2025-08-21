import React from "react";
import { Navigation } from "@/components/ui/navigation";
import { GovernmentSchemes } from "@/components/modules/government-schemes";

const Schemes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <GovernmentSchemes />
      </main>
    </div>
  );
};

export default Schemes;