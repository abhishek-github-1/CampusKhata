import React from "react";
import { Navigation } from "@/components/ui/navigation";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bell, 
  TrendingUp, 
  IndianRupee,
  Calendar,
  ArrowRight,
  Target
} from "lucide-react";

const RecentActivity = () => (
  <Card className="p-6">
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Recent Activity</h3>
      <div className="space-y-3">
        {[
          { desc: "Mess fee payment", amount: "-₹2,500", time: "2 hours ago", type: "expense" },
          { desc: "Scholarship credit", amount: "+₹15,000", time: "1 day ago", type: "income" },
          { desc: "Book purchase", amount: "-₹850", time: "2 days ago", type: "expense" },
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
            <div>
              <p className="font-medium text-sm">{item.desc}</p>
              <p className="text-xs text-muted-foreground">{item.time}</p>
            </div>
            <div className={`font-semibold ${
              item.type === "income" ? "text-success" : "text-destructive"
            }`}>
              {item.amount}
            </div>
          </div>
        ))}
      </div>
      <Button variant="outline" size="sm" className="w-full">
        View All Transactions
      </Button>
    </div>
  </Card>
);

const SavingsProgress = () => (
  <Card className="p-6">
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Savings Goals</h3>
        <Target className="w-5 h-5 text-primary" />
      </div>
      
      <div className="space-y-4">
        {[
          { name: "New Laptop", progress: 40, amount: "₹32,000", target: "₹80,000" },
          { name: "Emergency Fund", progress: 30, amount: "₹18,000", target: "₹60,000" },
        ].map((goal, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">{goal.name}</span>
              <span className="text-muted-foreground">{goal.progress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary rounded-full h-2 transition-all"
                style={{ width: `${goal.progress}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{goal.amount}</span>
              <span>{goal.target}</span>
            </div>
          </div>
        ))}
      </div>
      
      <Button variant="outline" size="sm" className="w-full">
        <Target className="w-4 h-4 mr-2" />
        Manage Goals
      </Button>
    </div>
  </Card>
);

const Notifications = () => (
  <Card className="p-6">
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Notifications</h3>
        <Bell className="w-5 h-5 text-accent" />
      </div>
      
      <div className="space-y-3">
        {[
          { 
            title: "Scholarship Deadline", 
            desc: "Post Matric Scholarship closes in 5 days",
            type: "warning",
            time: "Today"
          },
          {
            title: "Bill Reminder",
            desc: "Mobile recharge due tomorrow",
            type: "info", 
            time: "Yesterday"
          },
          {
            title: "Goal Achievement", 
            desc: "You've saved 40% for your laptop!",
            type: "success",
            time: "2 days ago"
          }
        ].map((notification, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
              notification.type === "warning" ? "bg-destructive" :
              notification.type === "success" ? "bg-success" : "bg-primary"
            }`} />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm">{notification.title}</p>
              <p className="text-xs text-muted-foreground">{notification.desc}</p>
              <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
      
      <Button variant="outline" size="sm" className="w-full">
        View All Notifications
      </Button>
    </div>
  </Card>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Welcome Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back, Rahul! 👋</h1>
              <p className="text-muted-foreground">Here's what's happening with your finances today</p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>January 2024</span>
              </Badge>
              <Button variant="hero" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Alerts
              </Button>
            </div>
          </div>

          {/* Dashboard Stats */}
          <DashboardStats />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <QuickActions />
              
              {/* Financial Insights */}
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Financial Insights</h3>
                    <TrendingUp className="w-5 h-5 text-success" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-success/10 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-success rounded-full" />
                        <span className="text-sm font-medium text-success">Spending Trend</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        You've reduced expenses by 8% this month. Great job on budgeting!
                      </p>
                    </div>
                    
                    <div className="bg-accent/10 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-sm font-medium text-accent">Savings Tip</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Consider meal planning to save an additional ₹1,200 monthly on food expenses.
                      </p>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    View Detailed Analytics
                  </Button>
                </div>
              </Card>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              <RecentActivity />
              <SavingsProgress />
              <Notifications />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;