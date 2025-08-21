import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Download, 
  Filter,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Calendar,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";

interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: string;
  status: "completed" | "pending";
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    description: "Mess Fee Payment",
    amount: -2500,
    type: "expense",
    category: "Food",
    date: "2024-01-15",
    status: "completed"
  },
  {
    id: "2", 
    description: "Scholarship Credit",
    amount: 15000,
    type: "income",
    category: "Education",
    date: "2024-01-14",
    status: "completed"
  },
  {
    id: "3",
    description: "Book Purchase",
    amount: -850,
    type: "expense", 
    category: "Education",
    date: "2024-01-13",
    status: "completed"
  },
  {
    id: "4",
    description: "Mobile Recharge",
    amount: -399,
    type: "expense",
    category: "Utilities",
    date: "2024-01-12",
    status: "pending"
  },
  {
    id: "5",
    description: "Freelance Payment",
    amount: 5000,
    type: "income",
    category: "Work",
    date: "2024-01-11", 
    status: "completed"
  }
];

const TransactionRow: React.FC<{ transaction: Transaction }> = ({ transaction }) => (
  <div className="flex items-center justify-between p-4 hover:bg-muted/50 rounded-lg transition-smooth">
    <div className="flex items-center space-x-4">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
        transaction.type === "income" 
          ? "bg-success/10 text-success" 
          : "bg-destructive/10 text-destructive"
      }`}>
        {transaction.type === "income" ? (
          <ArrowUp className="w-5 h-5" />
        ) : (
          <ArrowDown className="w-5 h-5" />
        )}
      </div>
      <div className="space-y-1">
        <p className="font-medium text-foreground">{transaction.description}</p>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="text-xs">
            {transaction.category}
          </Badge>
          <span className="text-xs text-muted-foreground">{transaction.date}</span>
          <Badge 
            variant={transaction.status === "completed" ? "default" : "secondary"}
            className="text-xs"
          >
            {transaction.status}
          </Badge>
        </div>
      </div>
    </div>
    <div className={`text-lg font-semibold ${
      transaction.amount > 0 ? "text-success" : "text-destructive"
    }`}>
      {transaction.amount > 0 ? "+" : ""}₹{Math.abs(transaction.amount).toLocaleString()}
    </div>
  </div>
);

export const TransactionsTracker = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterType, setFilterType] = React.useState<"all" | "income" | "expense">("all");

  const filteredTransactions = mockTransactions.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || transaction.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const totalIncome = mockTransactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalExpenses = mockTransactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Transaction Tracker</h1>
          <p className="text-muted-foreground">Monitor all your financial transactions in one place</p>
        </div>
        <Button variant="hero" className="flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Transaction</span>
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Income</p>
              <p className="text-2xl font-bold text-success">₹{totalIncome.toLocaleString()}</p>
            </div>
            <ArrowUp className="w-8 h-8 text-success" />
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Expenses</p>
              <p className="text-2xl font-bold text-destructive">₹{totalExpenses.toLocaleString()}</p>
            </div>
            <ArrowDown className="w-8 h-8 text-destructive" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Net Balance</p>
              <p className={`text-2xl font-bold ${
                (totalIncome - totalExpenses) > 0 ? "text-success" : "text-destructive"
              }`}>
                ₹{(totalIncome - totalExpenses).toLocaleString()}
              </p>
            </div>
            <ArrowUpDown className="w-8 h-8 text-primary" />
          </div>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <Search className="w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant={filterType === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType("all")}
            >
              All
            </Button>
            <Button
              variant={filterType === "income" ? "success" : "outline"}
              size="sm" 
              onClick={() => setFilterType("income")}
            >
              Income
            </Button>
            <Button
              variant={filterType === "expense" ? "destructive" : "outline"}
              size="sm"
              onClick={() => setFilterType("expense")}
            >
              Expenses
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Date Range
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </Card>

      {/* Transactions List */}
      <Card className="p-0 overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold">Recent Transactions</h3>
        </div>
        <div className="divide-y divide-border">
          {filteredTransactions.map((transaction) => (
            <TransactionRow key={transaction.id} transaction={transaction} />
          ))}
        </div>
        {filteredTransactions.length === 0 && (
          <div className="p-12 text-center">
            <p className="text-muted-foreground">No transactions found matching your criteria.</p>
          </div>
        )}
      </Card>
    </div>
  );
};