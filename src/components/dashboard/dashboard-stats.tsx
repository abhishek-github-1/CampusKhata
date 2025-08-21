import React from "react";
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Wallet, Target, IndianRupee } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ComponentType<any>;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, isPositive, icon: Icon }) => (
  <Card className="p-6 hover-lift transition-smooth">
    <div className="flex items-center justify-between">
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-3xl font-bold text-foreground">{value}</p>
        <div className={`flex items-center text-sm ${
          isPositive ? "text-success" : "text-destructive"
        }`}>
          {isPositive ? (
            <TrendingUp className="w-4 h-4 mr-1" />
          ) : (
            <TrendingDown className="w-4 h-4 mr-1" />
          )}
          {change} from last month
        </div>
      </div>
      <div className="p-3 bg-primary/10 rounded-full">
        <Icon className="w-6 h-6 text-primary" />
      </div>
    </div>
  </Card>
);

export const DashboardStats = () => {
  const stats = [
    {
      title: "Monthly Income",
      value: "₹15,000",
      change: "+12%",
      isPositive: true,
      icon: Wallet,
    },
    {
      title: "Monthly Expenses",
      value: "₹8,750",
      change: "-8%",
      isPositive: true,
      icon: IndianRupee,
    },
    {
      title: "Savings Rate",
      value: "42%",
      change: "+5%",
      isPositive: true,
      icon: Target,
    },
    {
      title: "Investment Growth",
      value: "₹2,300",
      change: "+18%",
      isPositive: true,
      icon: TrendingUp,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};