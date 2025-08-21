import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Target, 
  Plus, 
  Calendar,
  TrendingUp,
  Smartphone,
  GraduationCap,
  Car,
  Home,
  Plane,
  Gift
} from "lucide-react";

interface SavingGoal {
  id: string;
  title: string;
  description: string;
  target_amount: number;
  current_amount: number;
  monthly_contribution: number;
  target_date: string;
  category: string;
  icon: React.ComponentType<any>;
  priority: "high" | "medium" | "low";
}

const savingGoals: SavingGoal[] = [
  {
    id: "1",
    title: "New Laptop",
    description: "MacBook for programming and design work",
    target_amount: 80000,
    current_amount: 32000,
    monthly_contribution: 8000,
    target_date: "2024-06-15",
    category: "Education",
    icon: GraduationCap,
    priority: "high"
  },
  {
    id: "2", 
    title: "Emergency Fund",
    description: "6 months of expenses for emergencies",
    target_amount: 60000,
    current_amount: 18000,
    monthly_contribution: 5000,
    target_date: "2024-12-31",
    category: "Security",
    icon: Target,
    priority: "high"
  },
  {
    id: "3",
    title: "Bike Down Payment",
    description: "First vehicle for college commute",
    target_amount: 25000,
    current_amount: 15000,
    monthly_contribution: 2500,
    target_date: "2024-05-01",
    category: "Transport",
    icon: Car,
    priority: "medium"
  },
  {
    id: "4",
    title: "Europe Trip",
    description: "Graduation celebration trip",
    target_amount: 120000,
    current_amount: 25000,
    monthly_contribution: 6000,
    target_date: "2025-06-01",
    category: "Travel",
    icon: Plane,
    priority: "low"
  }
];

const GoalCard: React.FC<{ goal: SavingGoal }> = ({ goal }) => {
  const percentage = (goal.current_amount / goal.target_amount) * 100;
  const remaining = goal.target_amount - goal.current_amount;
  const monthsToTarget = Math.ceil(remaining / goal.monthly_contribution);
  
  const Icon = goal.icon;
  
  const priorityColors = {
    high: "border-destructive bg-destructive/5",
    medium: "border-accent bg-accent/5",
    low: "border-muted bg-muted/5"
  };

  const targetDate = new Date(goal.target_date);
  const today = new Date();
  const isOverdue = targetDate < today;
  const daysRemaining = Math.ceil((targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <Card className={`p-6 hover-lift transition-smooth ${priorityColors[goal.priority]}`}>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{goal.title}</h3>
              <p className="text-sm text-muted-foreground">{goal.description}</p>
            </div>
          </div>
          <Badge variant={
            goal.priority === "high" ? "destructive" :
            goal.priority === "medium" ? "secondary" : "outline"
          }>
            {goal.priority}
          </Badge>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{percentage.toFixed(1)}%</span>
          </div>
          <Progress value={percentage} className="h-3" />
          <div className="flex justify-between text-sm">
            <span className="font-medium">₹{goal.current_amount.toLocaleString()}</span>
            <span className="text-muted-foreground">₹{goal.target_amount.toLocaleString()}</span>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Remaining</p>
            <p className="font-semibold">₹{remaining.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Monthly Goal</p>
            <p className="font-semibold">₹{goal.monthly_contribution.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Target Date</p>
            <p className={`font-semibold ${isOverdue ? "text-destructive" : "text-foreground"}`}>
              {targetDate.toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">Est. Completion</p>
            <p className="font-semibold">{monthsToTarget} months</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button variant="default" size="sm" className="flex-1">
            Add Money
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Edit Goal
          </Button>
        </div>
      </div>
    </Card>
  );
};

export const SavingGoals = () => {
  const totalTargetAmount = savingGoals.reduce((sum, goal) => sum + goal.target_amount, 0);
  const totalCurrentAmount = savingGoals.reduce((sum, goal) => sum + goal.current_amount, 0);
  const totalMonthlyContribution = savingGoals.reduce((sum, goal) => sum + goal.monthly_contribution, 0);
  const overallProgress = (totalCurrentAmount / totalTargetAmount) * 100;

  const completedGoals = savingGoals.filter(goal => goal.current_amount >= goal.target_amount);
  const activeGoals = savingGoals.filter(goal => goal.current_amount < goal.target_amount);
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Saving Goals Tracker</h1>
          <p className="text-muted-foreground">Achieve your financial dreams with structured savings</p>
        </div>
        <Button variant="hero" className="flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Create New Goal</span>
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Saved</p>
              <p className="text-2xl font-bold text-success">₹{totalCurrentAmount.toLocaleString()}</p>
            </div>
            <Target className="w-8 h-8 text-success" />
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Target</p>
              <p className="text-2xl font-bold text-primary">₹{totalTargetAmount.toLocaleString()}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-primary" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Monthly Saving</p>
              <p className="text-2xl font-bold text-accent">₹{totalMonthlyContribution.toLocaleString()}</p>
            </div>
            <Calendar className="w-8 h-8 text-accent" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Overall Progress</p>
              <p className="text-2xl font-bold text-foreground">{overallProgress.toFixed(1)}%</p>
            </div>
            <Target className="w-8 h-8 text-foreground" />
          </div>
        </Card>
      </div>

      {/* Progress Overview */}
      <Card className="p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Overall Progress</h3>
          <Progress value={overallProgress} className="h-4" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>₹{totalCurrentAmount.toLocaleString()} saved</span>
            <span>₹{totalTargetAmount.toLocaleString()} target</span>
          </div>
        </div>
      </Card>

      {/* Active Goals */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Active Goals ({activeGoals.length})</h2>
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
            Sort by Priority
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {activeGoals.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="flex items-center justify-start space-x-2 h-auto p-4">
            <Plus className="w-5 h-5" />
            <div className="text-left">
              <p className="font-medium">Create Goal</p>
              <p className="text-xs text-muted-foreground">Set a new savings target</p>
            </div>
          </Button>
          
          <Button variant="outline" className="flex items-center justify-start space-x-2 h-auto p-4">
            <TrendingUp className="w-5 h-5" />
            <div className="text-left">
              <p className="font-medium">Auto-Save</p>
              <p className="text-xs text-muted-foreground">Set up automatic transfers</p>
            </div>
          </Button>
          
          <Button variant="outline" className="flex items-center justify-start space-x-2 h-auto p-4">
            <Target className="w-5 h-5" />
            <div className="text-left">
              <p className="font-medium">Goal Templates</p>
              <p className="text-xs text-muted-foreground">Use predefined goals</p>
            </div>
          </Button>
        </div>
      </Card>
    </div>
  );
};