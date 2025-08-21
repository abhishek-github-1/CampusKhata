import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter,
  GraduationCap,
  Users,
  Briefcase,
  Home,
  Heart,
  Award,
  ExternalLink,
  Clock,
  MapPin,
  IndianRupee
} from "lucide-react";

interface Scheme {
  id: string;
  name: string;
  description: string;
  department: string;
  eligibility: string[];
  benefits: string;
  amount: string;
  deadline: string;
  state: string;
  category: "education" | "employment" | "housing" | "healthcare" | "social" | "entrepreneurship";
  icon: React.ComponentType<any>;
  status: "active" | "closing_soon" | "new";
  link: string;
}

const schemes: Scheme[] = [
  {
    id: "1",
    name: "Post Matric Scholarship",
    description: "Financial assistance for SC/ST/OBC students pursuing higher education",
    department: "Ministry of Social Justice & Empowerment",
    eligibility: ["SC/ST/OBC category", "Family income < ₹2.5 lakh", "Pursuing graduation/PG"],
    benefits: "Tuition fees + maintenance allowance",
    amount: "₹20,000 - ₹2,00,000",
    deadline: "2024-03-31",
    state: "All India",
    category: "education",
    icon: GraduationCap,
    status: "active",
    link: "https://scholarships.gov.in"
  },
  {
    id: "2",
    name: "PM-KISAN",
    description: "Income support for farmer families",
    department: "Ministry of Agriculture",
    eligibility: ["Small & marginal farmers", "Land holding records", "Valid Aadhaar"],
    benefits: "Direct benefit transfer to bank account",
    amount: "₹6,000/year",
    deadline: "Ongoing",
    state: "All India", 
    category: "social",
    icon: Users,
    status: "active",
    link: "https://pmkisan.gov.in"
  },
  {
    id: "3",
    name: "Startup India Seed Fund",
    description: "Financial support for startups in early stages",
    department: "DPIIT, Ministry of Commerce",
    eligibility: ["DPIIT recognized startup", "Incorporated < 2 years", "Valid business plan"],
    benefits: "Proof of concept + Prototype development",
    amount: "Up to ₹20 lakhs",
    deadline: "2024-04-15",
    state: "All India",
    category: "entrepreneurship", 
    icon: Briefcase,
    status: "closing_soon",
    link: "https://startupindia.gov.in"
  },
  {
    id: "4",
    name: "Pradhan Mantri Awas Yojana",
    description: "Affordable housing for economically weaker sections",
    department: "Ministry of Housing & Urban Affairs",
    eligibility: ["EWS/LIG/MIG category", "First-time home buyer", "Annual income criteria"],
    benefits: "Interest subsidy on home loans",
    amount: "Up to ₹2.67 lakhs",
    deadline: "2024-12-31",
    state: "All India",
    category: "housing",
    icon: Home,
    status: "active", 
    link: "https://pmaymis.gov.in"
  },
  {
    id: "5",
    name: "Ayushman Bharat",
    description: "Health insurance for poor and vulnerable families",
    department: "Ministry of Health & Family Welfare", 
    eligibility: ["SECC 2011 beneficiary", "Valid Aadhaar card", "Family card"],
    benefits: "Cashless treatment in empaneled hospitals",
    amount: "₹5 lakhs/family/year",
    deadline: "Ongoing",
    state: "All India",
    category: "healthcare",
    icon: Heart,
    status: "active",
    link: "https://pmjay.gov.in"
  },
  {
    id: "6",
    name: "National Scholarship Portal",
    description: "Merit cum means scholarship for various categories",
    department: "Ministry of Electronics & IT",
    eligibility: ["Merit in previous exam", "Family income criteria", "Regular student"],
    benefits: "Scholarship for education expenses",
    amount: "₹12,000 - ₹20,000",
    deadline: "2024-02-28",
    state: "All India", 
    category: "education",
    icon: Award,
    status: "new",
    link: "https://scholarships.gov.in"
  }
];

const SchemeCard: React.FC<{ scheme: Scheme }> = ({ scheme }) => {
  const Icon = scheme.icon;
  
  const categoryColors = {
    education: "bg-blue-500",
    employment: "bg-green-500", 
    housing: "bg-orange-500",
    healthcare: "bg-red-500",
    social: "bg-purple-500",
    entrepreneurship: "bg-yellow-500"
  };

  const statusColors = {
    active: "bg-success text-success-foreground",
    closing_soon: "bg-destructive text-destructive-foreground",
    new: "bg-accent text-accent-foreground"
  };

  const statusText = {
    active: "Active",
    closing_soon: "Closing Soon", 
    new: "New"
  };

  return (
    <Card className="p-6 hover-lift transition-smooth">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${categoryColors[scheme.category]}`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg leading-tight">{scheme.name}</h3>
              <p className="text-sm text-muted-foreground">{scheme.department}</p>
            </div>
          </div>
          <Badge className={statusColors[scheme.status]}>
            {statusText[scheme.status]}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">{scheme.description}</p>

        {/* Benefits & Amount */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Benefits</span>
            <div className="flex items-center text-success font-semibold">
              <IndianRupee className="w-4 h-4" />
              <span>{scheme.amount}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{scheme.benefits}</p>
        </div>

        {/* Key Info */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-muted-foreground">Deadline</p>
              <p className="font-medium">{scheme.deadline}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-muted-foreground">Applicable</p>
              <p className="font-medium">{scheme.state}</p>
            </div>
          </div>
        </div>

        {/* Eligibility */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Eligibility Criteria</p>
          <div className="space-y-1">
            {scheme.eligibility.slice(0, 2).map((criteria, index) => (
              <div key={index} className="flex items-center text-xs text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                {criteria}
              </div>
            ))}
            {scheme.eligibility.length > 2 && (
              <p className="text-xs text-muted-foreground">+{scheme.eligibility.length - 2} more criteria</p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Button variant="default" size="sm" className="flex-1">
            <ExternalLink className="w-4 h-4 mr-2" />
            Apply Now
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export const GovernmentSchemes = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [selectedState, setSelectedState] = React.useState<string>("all");

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "education", label: "Education" },
    { value: "employment", label: "Employment" }, 
    { value: "housing", label: "Housing" },
    { value: "healthcare", label: "Healthcare" },
    { value: "social", label: "Social Welfare" },
    { value: "entrepreneurship", label: "Entrepreneurship" }
  ];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || scheme.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const activeSchemes = schemes.filter(s => s.status === "active").length;
  const closingSoon = schemes.filter(s => s.status === "closing_soon").length;
  const newSchemes = schemes.filter(s => s.status === "new").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Government Scheme Filter</h1>
          <p className="text-muted-foreground">Discover government schemes and benefits tailored for students</p>
        </div>
        <Button variant="hero" className="flex items-center space-x-2">
          <Award className="w-4 h-4" />
          <span>Scheme Alerts</span>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Schemes</p>
              <p className="text-2xl font-bold text-primary">{schemes.length}</p>
            </div>
            <Award className="w-8 h-8 text-primary" />
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active</p>
              <p className="text-2xl font-bold text-success">{activeSchemes}</p>
            </div>
            <Users className="w-8 h-8 text-success" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Closing Soon</p>
              <p className="text-2xl font-bold text-destructive">{closingSoon}</p>
            </div>
            <Clock className="w-8 h-8 text-destructive" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">New Schemes</p>
              <p className="text-2xl font-bold text-accent">{newSchemes}</p>
            </div>
            <Award className="w-8 h-8 text-accent" />
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Filter Schemes</h3>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                <Input
                  placeholder="Search schemes by name, department, or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Schemes Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">
            Available Schemes ({filteredSchemes.length})
          </h2>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Advanced Filter
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSchemes.map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>

        {filteredSchemes.length === 0 && (
          <Card className="p-12 text-center">
            <Award className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No schemes found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your filters or search terms to find relevant schemes.
            </p>
            <Button variant="outline" onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}>
              Clear Filters
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
};