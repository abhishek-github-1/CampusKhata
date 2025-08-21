import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Plus, 
  ArrowUpDown, 
  Target, 
  CreditCard,
  Smartphone,
  Book
} from "lucide-react";

interface ActionCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  action: string;
  color: "primary" | "secondary" | "success" | "accent";
}

const ActionCard: React.FC<ActionCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  action, 
  color 
}) => {
  const colorClasses = {
    primary: "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground",
    secondary: "bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground",
    success: "bg-success/10 text-success hover:bg-success hover:text-success-foreground",
    accent: "bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground"
  };

  return (
    <Card className="p-6 hover-lift transition-smooth cursor-pointer group">
      <div className="space-y-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-smooth ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Button 
          variant="ghost" 
          className="w-full justify-start text-primary hover:bg-primary/10"
        >
          {action}
        </Button>
      </div>
    </Card>
  );
};

export const QuickActions = () => {
  const actions = [
    {
      title: "Add Transaction",
      description: "Record a new expense or income",
      icon: Plus,
      action: "Add Now",
      color: "primary" as const,
    },
    {
      title: "Transfer Money", 
      description: "Send money to friends or family",
      icon: ArrowUpDown,
      action: "Transfer",
      color: "secondary" as const,
    },
    {
      title: "Set New Goal",
      description: "Create a savings target",
      icon: Target,
      action: "Create Goal",
      color: "success" as const,
    },
    {
      title: "Pay Bills",
      description: "Manage recurring payments",
      icon: CreditCard,
      action: "Pay Now",
      color: "accent" as const,
    },
    {
      title: "Mobile Recharge",
      description: "Top up your phone balance",
      icon: Smartphone,
      action: "Recharge",
      color: "primary" as const,
    },
    {
      title: "Education Loan",
      description: "Apply for student loans",
      icon: Book,
      action: "Apply",
      color: "secondary" as const,
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {actions.map((action, index) => (
          <ActionCard key={index} {...action} />
        ))}
      </div>
    </div>
  );
};