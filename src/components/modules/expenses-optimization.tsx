import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle,
  Lightbulb,
  PieChart,
  Target
} from "lucide-react";

interface ExpenseCategory {
  name: string;
  spent: number;
  budget: number;
  color: string;
  trend: "up" | "down" | "stable";
}

interface OptimizationTip {
  id: string;
  category: string;
  tip: string;
  potential_savings: number;
  priority: "high" | "medium" | "low";
  icon: React.ComponentType<any>;
}

const expenseCategories: ExpenseCategory[] = [
  { name: "Food & Dining", spent: 4200, budget: 3500, color: "bg-red-500", trend: "up" },
  { name: "Transportation", spent: 1200, budget: 1500, color: "bg-blue-500", trend: "down" },
  { name: "Entertainment", spent: 800, budget: 1000, color: "bg-purple-500", trend: "stable" },
  { name: "Shopping", spent: 1500, budget: 1200, color: "bg-orange-500", trend: "up" },
  { name: "Education", spent: 900, budget: 1000, color: "bg-green-500", trend: "down" },
  { name: "Utilities", spent: 600, budget: 800, color: "bg-yellow-500", trend: "stable" }
];

const optimizationTips: OptimizationTip[] = [
  {
    id: "1",
    category: "Food & Dining",
    tip: "You're spending 20% more on food. Consider meal planning and cooking at home more often.",
    potential_savings: 700,
    priority: "high",
    icon: AlertTriangle
  },
  {
    id: "2", 
    category: "Shopping",
    tip: "Set a monthly shopping limit and use price comparison apps before purchases.",
    potential_savings: 300,
    priority: "medium", 
    icon: Target
  },
  {
    id: "3",
    category: "Transportation",
    tip: "Great job! You're saving on transport. Consider carpooling to save even more.",
    potential_savings: 200,
    priority: "low",
    icon: CheckCircle
  }
];

const CategoryCard: React.FC<{ category: ExpenseCategory }> = ({ category }) => {
  const percentage = (category.spent / category.budget) * 100;
  const isOverBudget = category.spent > category.budget;

  return (
    <Card className="p-6 hover-lift transition-smooth">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{category.name}</h3>
          <Badge variant={isOverBudget ? "destructive" : "default"}>
            {percentage.toFixed(0)}%
          </Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Spent</span>
            <span className="font-medium">₹{category.spent.toLocaleString()}</span>
          </div>
          <Progress 
            value={Math.min(percentage, 100)} 
            className="h-2"
            // Custom color based on status
          />
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Budget: ₹{category.budget.toLocaleString()}</span>
            <span className={`font-medium ${isOverBudget ? "text-destructive" : "text-success"}`}>
              {isOverBudget ? "+" : ""}₹{Math.abs(category.spent - category.budget).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

const OptimizationTipCard: React.FC<{ tip: OptimizationTip }> = ({ tip }) => {
  const Icon = tip.icon;
  const priorityColors = {
    high: "border-destructive bg-destructive/5",
    medium: "border-accent bg-accent/5", 
    low: "border-success bg-success/5"
  };

  return (
    <Card className={`p-6 border-2 hover-lift transition-smooth ${priorityColors[tip.priority]}`}>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              tip.priority === "high" ? "bg-destructive/10 text-destructive" :
              tip.priority === "medium" ? "bg-accent/10 text-accent" :
              "bg-success/10 text-success"
            }`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <Badge variant="outline" className="mb-2">
                {tip.category}
              </Badge>
              <Badge variant={
                tip.priority === "high" ? "destructive" :
                tip.priority === "medium" ? "secondary" : "default"
              }>
                {tip.priority} priority
              </Badge>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Potential Savings</p>
            <p className="text-lg font-bold text-success">₹{tip.potential_savings}</p>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed">{tip.tip}</p>
        
        <Button variant="outline" size="sm" className="w-full">
          Apply This Tip
        </Button>
      </div>
    </Card>
  );
};

export const ExpensesOptimization = () => {
  const totalSpent = expenseCategories.reduce((sum, cat) => sum + cat.spent, 0);
  const totalBudget = expenseCategories.reduce((sum, cat) => sum + cat.budget, 0);
  const overBudgetAmount = Math.max(0, totalSpent - totalBudget);
  const potentialSavings = optimizationTips.reduce((sum, tip) => sum + tip.potential_savings, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Expenses Optimization</h1>
          <p className="text-muted-foreground">Smart insights to optimize your spending habits</p>
        </div>
        <Button variant="hero" className="flex items-center space-x-2">
          <PieChart className="w-4 h-4" />
          <span>View Analytics</span>
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Spent</p>
              <p className="text-2xl font-bold text-foreground">₹{totalSpent.toLocaleString()}</p>
            </div>
            <TrendingDown className="w-8 h-8 text-primary" />
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Monthly Budget</p>
              <p className="text-2xl font-bold text-muted-foreground">₹{totalBudget.toLocaleString()}</p>
            </div>
            <Target className="w-8 h-8 text-muted-foreground" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Over Budget</p>
              <p className="text-2xl font-bold text-destructive">₹{overBudgetAmount.toLocaleString()}</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Potential Savings</p>
              <p className="text-2xl font-bold text-success">₹{potentialSavings.toLocaleString()}</p>
            </div>
            <Lightbulb className="w-8 h-8 text-success" />
          </div>
        </Card>
      </div>

      {/* Expense Categories */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Expense Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expenseCategories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>

      {/* Optimization Tips */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Lightbulb className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold text-foreground">Smart Optimization Tips</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {optimizationTips.map((tip) => (
            <OptimizationTipCard key={tip.id} tip={tip} />
          ))}
        </div>
      </div>
    </div>
  );
};