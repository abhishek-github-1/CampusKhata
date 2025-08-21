import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Smartphone, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-fintech.jpg";

const features = [
  "Track expenses automatically",
  "Government scheme finder", 
  "Smart saving goals",
  "Banking made simple"
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-secondary rounded-full animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Smart Finance for
                  <span className="block text-accent"> College Students</span>
                </h1>
                <p className="text-xl text-white/90 max-w-2xl">
                  Take control of your finances with our AI-powered platform designed specifically for Indian college students. Track expenses, find government schemes, and achieve your financial goals.
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-white/90">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild variant="secondary" size="lg" className="text-lg px-8 hover-lift">
                  <Link to="/dashboard">
                    Get Started <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 border-white/30 text-white hover:bg-white hover:text-primary">
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="flex justify-center lg:justify-start space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10K+</div>
                  <div className="text-sm text-white/70">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">₹2Cr+</div>
                  <div className="text-sm text-white/70">Money Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-white/70">Colleges</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong hover-scale transition-smooth">
              <img 
                src={heroImage} 
                alt="Indian college students using EduFinance app"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 card-glass rounded-xl p-4 animate-float">
              <div className="flex items-center space-x-3">
                <Smartphone className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-semibold text-sm">Mobile First</div>
                  <div className="text-xs text-muted-foreground">Bank anywhere</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 card-glass rounded-xl p-4 animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center space-x-3">
                <Shield className="w-8 h-8 text-success" />
                <div>
                  <div className="font-semibold text-sm">100% Secure</div>
                  <div className="text-xs text-muted-foreground">Bank grade security</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-8 card-glass rounded-xl p-4 animate-float" style={{ animationDelay: "2s" }}>
              <div className="flex items-center space-x-3">
                <Zap className="w-8 h-8 text-secondary" />
                <div>
                  <div className="font-semibold text-sm">AI Powered</div>
                  <div className="text-xs text-muted-foreground">Smart insights</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};