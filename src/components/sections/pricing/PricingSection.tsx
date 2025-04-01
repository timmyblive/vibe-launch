"use client";

import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface PricingTierProps {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  billingPeriod: "monthly" | "yearly";
}

function PricingTier({
  name,
  price,
  description,
  features,
  isPopular = false,
  ctaText = "Get Started",
  billingPeriod,
}: PricingTierProps) {
  const currentPrice = billingPeriod === "monthly" ? price.monthly : price.yearly;
  const discount = Math.round(((price.monthly * 12) - price.yearly) / (price.monthly * 12) * 100);

  return (
    <Card
      variant={isPopular ? "glow" : "glass"}
      className={`relative ${isPopular ? "border-accent" : ""}`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <Card.Header>
        <Card.Title className="text-center">{name}</Card.Title>
        <div className="mt-4 text-center">
          <div className="flex items-center justify-center">
            <span className="text-4xl font-bold">${currentPrice}</span>
            <span className="text-foreground/60 ml-2">/{billingPeriod === "monthly" ? "mo" : "yr"}</span>
          </div>
          {billingPeriod === "yearly" && (
            <div className="text-sm text-accent mt-1">Save {discount}% yearly</div>
          )}
        </div>
        <Card.Description className="text-center mt-4">
          {description}
        </Card.Description>
      </Card.Header>
      <Card.Body>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent mr-2 mt-1 flex-shrink-0"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </Card.Body>
      <Card.Footer>
        <Button
          variant={isPopular ? "primary" : "outline"}
          fullWidth
          href="#"
        >
          {ctaText}
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  
  const pricingTiers = [
    {
      name: "Starter",
      price: {
        monthly: 29,
        yearly: 290,
      },
      description: "Perfect for small projects and personal websites.",
      features: [
        "Responsive design",
        "Dark/light mode",
        "Basic animations",
        "Standard support",
        "1 project",
      ],
      isPopular: false,
      ctaText: "Start Free Trial",
    },
    {
      name: "Pro",
      price: {
        monthly: 79,
        yearly: 790,
      },
      description: "Ideal for businesses and professional websites.",
      features: [
        "All Starter features",
        "Advanced animations",
        "Custom components",
        "Priority support",
        "5 projects",
        "Analytics integration",
      ],
      isPopular: true,
      ctaText: "Get Pro",
    },
    {
      name: "Enterprise",
      price: {
        monthly: 199,
        yearly: 1990,
      },
      description: "For large organizations with complex needs.",
      features: [
        "All Pro features",
        "Custom branding",
        "Dedicated support",
        "Unlimited projects",
        "Advanced analytics",
        "Team collaboration",
        "API access",
      ],
      isPopular: false,
      ctaText: "Contact Sales",
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-headline font-bold mb-6">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-body text-foreground/70 max-w-2xl mx-auto mb-10">
            Choose the perfect plan for your needs. All plans include core features with different levels of support and capabilities.
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center mb-10">
            <span
              className={`mr-3 ${
                billingPeriod === "monthly" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")
              }
              className="relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-accent"
              style={{
                backgroundColor:
                  billingPeriod === "yearly" ? "#2D7FF9" : "#E2E8F0",
              }}
              aria-label={`Switch to ${
                billingPeriod === "yearly" ? "monthly" : "yearly"
              } billing`}
            >
              <span
                className={`${
                  billingPeriod === "yearly" ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out`}
              />
            </button>
            <span
              className={`ml-3 flex items-center ${
                billingPeriod === "yearly" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Yearly
              <span className="ml-2 rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">
                Save 20%
              </span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              isPopular={tier.isPopular}
              ctaText={tier.ctaText}
              billingPeriod={billingPeriod}
            />
          ))}
        </div>
        
        {/* FAQ */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Can I cancel my subscription anytime?",
                answer:
                  "Yes, you can cancel your subscription at any time. Your plan will remain active until the end of your billing period.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "We offer a 14-day money-back guarantee for all plans. If you're not satisfied, contact our support team within 14 days of purchase.",
              },
              {
                question: "Can I upgrade or downgrade my plan?",
                answer:
                  "Yes, you can change your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the new rate will apply to your next billing cycle.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise plans.",
              },
            ].map((faq, index) => (
              <div key={index} className="glass-effect rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-3">{faq.question}</h4>
                <p className="text-foreground/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-foreground/70 mb-6">
            Need a custom solution? Contact our sales team for a tailored quote.
          </p>
          <Button variant="primary" size="lg" href="#contact">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
