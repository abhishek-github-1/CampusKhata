import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Smartphone,
  PiggyBank,
  TrendingUp,
  Shield,
  Users,
  Zap,
  Gift,
  Book,
  Target,
  ArrowRight,
  ExternalLink,
  Star,
  IndianRupee
} from "lucide-react";

interface BankingProduct {
  id: string;
  name: string;
  description: string;
  bank: string;
  type: "account" | "card" | "loan" | "investment" | "digital";
  features: string[];
  eligibility: string;
  offers: string;
  rating: number;
  icon: React.ComponentType<any>;
  color: string;
  popular: boolean;
}

interface DigitalTool {
  id: string;
  name: string;
  description: string;
  category: "payments" | "investments" | "budgeting" | "loans";
  features: string[];
  icon: React.ComponentType<any>;
  rating: number;
  users: string;
}

const bankingProducts: BankingProduct[] = [
  {
    id: "1",
    name: "Student Savings Account",
    description: "Zero balance account designed for college students",
    bank: "SBI",
    type: "account",
    features: ["Zero minimum balance", "Free debit card", "Internet banking", "Mobile banking"],
    eligibility: "Students aged 16-25",
    offers: "Free account for first 2 years",
    rating: 4.5,
    icon: PiggyBank,
    color: "bg-blue-500",
    popular: true
  },
  {
    id: "2",
    name: "Student Credit Card", 
    description: "Build credit history with student-friendly credit card",
    bank: "HDFC Bank",
    type: "card",
    features: ["₹50,000 limit", "Reward points", "Cashback on education", "Low interest rate"],
    eligibility: "College students with income proof",
    offers: "₹500 cashback on first transaction",
    rating: 4.3,
    icon: CreditCard,
    color: "bg-purple-500",
    popular: false
  },
  {
    id: "3",
    name: "Education Loan",
    description: "Affordable loans for higher education in India and abroad",
    bank: "ICICI Bank",
    type: "loan", 
    features: ["Up to ₹1 crore", "Flexible repayment", "Moratorium period", "Tax benefits"],
    eligibility: "Admission to recognized college",
    offers: "0.5% interest rate concession for girls",
    rating: 4.2,
    icon: Book,
    color: "bg-green-500",
    popular: true
  },
  {
    id: "4",
    name: "SIP Investment",
    description: "Start investing with as little as ₹500 per month",
    bank: "Axis Bank",
    type: "investment",
    features: ["Mutual funds", "SIP starting ₹500", "Tax saving options", "Expert advisory"],
    eligibility: "Age 18+ with KYC",
    offers: "Zero processing fee for first year",
    rating: 4.4,
    icon: TrendingUp,
    color: "bg-orange-500",
    popular: false
  },
  {
    id: "5",
    name: "Digital Wallet",
    description: "UPI-enabled digital wallet for seamless transactions",
    bank: "Paytm",
    type: "digital",
    features: ["UPI payments", "Bill payments", "Recharge", "Cashback offers"],
    eligibility: "Valid mobile number",
    offers: "₹100 cashback on first ₹1000 transaction",
    rating: 4.1,
    icon: Smartphone,
    color: "bg-indigo-500",
    popular: true
  }
];

const digitalTools: DigitalTool[] = [
  {
    id: "1",
    name: "Google Pay",
    description: "Simple, secure UPI payments with rewards",
    category: "payments",
    features: ["UPI payments", "Bill pay", "Scratch cards", "Loans"],
    icon: Smartphone,
    rating: 4.4,
    users: "15Cr+"
  },
  {
    id: "2", 
    name: "Groww",
    description: "Start investing in mutual funds and stocks",
    category: "investments",
    features: ["Mutual funds", "Stocks", "Gold", "US stocks"],
    icon: TrendingUp,
    rating: 4.3,
    users: "3Cr+"
  },
  {
    id: "3",
    name: "CRED",
    description: "Pay credit card bills and earn rewards",
    category: "payments", 
    features: ["Credit card bills", "Rewards", "Credit score", "Investments"],
    icon: CreditCard,
    rating: 4.2,
    users: "1Cr+"
  }
];

const ProductCard: React.FC<{ product: BankingProduct }> = ({ product }) => {
  const Icon = product.icon;

  return (
    <Card className={`p-6 hover-lift transition-smooth relative ${product.popular ? "border-primary border-2" : ""}`}>
      {product.popular && (
        <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground">
          Popular
        </Badge>
      )}
      
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${product.color}`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.bank}</p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>

        {/* Features */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Key Features</p>
          <div className="space-y-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center text-xs text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-success rounded-full mr-2" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Offer */}
        <div className="bg-accent/10 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <Gift className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Special Offer</span>
          </div>
          <p className="text-xs text-accent mt-1">{product.offers}</p>
        </div>

        {/* Eligibility */}
        <div className="text-xs text-muted-foreground">
          <span className="font-medium">Eligibility: </span>
          {product.eligibility}
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Button variant="default" size="sm" className="flex-1">
            <ExternalLink className="w-4 h-4 mr-2" />
            Apply Now
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Learn More
          </Button>
        </div>
      </div>
    </Card>
  );
};

const ToolCard: React.FC<{ tool: DigitalTool }> = ({ tool }) => {
  const Icon = tool.icon;

  return (
    <Card className="p-6 hover-lift transition-smooth">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">{tool.name}</h3>
              <Badge variant="outline" className="text-xs">
                {tool.category}
              </Badge>
            </div>
          </div>
          <div className="text-right text-sm">
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
              <span className="font-medium">{tool.rating}</span>
            </div>
            <p className="text-muted-foreground text-xs">{tool.users} users</p>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground">{tool.description}</p>
        
        <div className="flex flex-wrap gap-1">
          {tool.features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
        
        <Button variant="outline" size="sm" className="w-full">
          Download App
        </Button>
      </div>
    </Card>
  );
};

export const BankingModules = () => {
  const [selectedType, setSelectedType] = React.useState<string>("all");

  const types = [
    { value: "all", label: "All Products" },
    { value: "account", label: "Bank Accounts" },
    { value: "card", label: "Credit Cards" },
    { value: "loan", label: "Loans" },
    { value: "investment", label: "Investments" },
    { value: "digital", label: "Digital Banking" }
  ];

  const filteredProducts = selectedType === "all" 
    ? bankingProducts 
    : bankingProducts.filter(p => p.type === selectedType);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Financial & Banking Modules</h1>
          <p className="text-muted-foreground">Explore banking products and digital tools for students</p>
        </div>
        <Button variant="hero" className="flex items-center space-x-2">
          <Shield className="w-4 h-4" />
          <span>Compare Banks</span>
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Student Accounts</p>
              <p className="text-2xl font-bold text-primary">25+</p>
            </div>
            <PiggyBank className="w-8 h-8 text-primary" />
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Credit Cards</p>
              <p className="text-2xl font-bold text-purple-500">15+</p>
            </div>
            <CreditCard className="w-8 h-8 text-purple-500" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Loan Options</p>
              <p className="text-2xl font-bold text-green-500">12+</p>
            </div>
            <Book className="w-8 h-8 text-green-500" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Digital Tools</p>
              <p className="text-2xl font-bold text-accent">30+</p>
            </div>
            <Smartphone className="w-8 h-8 text-accent" />
          </div>
        </Card>
      </div>

      {/* Product Filters */}
      <Card className="p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Browse by Category</h3>
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <Button
                key={type.value}
                variant={selectedType === type.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(type.value)}
              >
                {type.label}
              </Button>
            ))}
          </div>
        </div>
      </Card>

      {/* Featured Products */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">
          Banking Products ({filteredProducts.length})
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Digital Tools */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Popular Digital Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {digitalTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>

      {/* Financial Education */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Book className="w-6 h-6 text-primary" />
            <h3 className="text-lg font-semibold">Financial Education</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="flex items-center justify-start space-x-3 h-auto p-4">
              <TrendingUp className="w-8 h-8 text-success" />
              <div className="text-left">
                <p className="font-medium">Investment Basics</p>
                <p className="text-xs text-muted-foreground">Learn to invest wisely</p>
              </div>
            </Button>
            
            <Button variant="outline" className="flex items-center justify-start space-x-3 h-auto p-4">
              <CreditCard className="w-8 h-8 text-primary" />
              <div className="text-left">
                <p className="font-medium">Credit Score Guide</p>
                <p className="text-xs text-muted-foreground">Build good credit history</p>
              </div>
            </Button>
            
            <Button variant="outline" className="flex items-center justify-start space-x-3 h-auto p-4">
              <Shield className="w-8 h-8 text-destructive" />
              <div className="text-left">
                <p className="font-medium">Banking Safety</p>
                <p className="text-xs text-muted-foreground">Stay safe from frauds</p>
              </div>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};