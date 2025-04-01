"use client";

import React from "react";
import { Timeline } from "@/components/ui/Timeline";

export default function RoadmapSection() {
  const timelineData = [
    {
      title: "Phase 1: Pre-Launch (April-May 2025)",
      content: (
        <div className="glass-effect rounded-xl p-6 border border-accent/20 backdrop-blur-md bg-background/30">
          <p className="text-foreground/80 mb-4 font-medium">
            <strong className="text-accent">Goal</strong>: Build the base, spark interest.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-accent font-bold mr-3 text-lg">•</span>
              <div>
                <span className="font-semibold">April 15</span>: White paper locked in (done here!).
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-accent font-bold mr-3 text-lg">•</span>
              <div>
                <span className="font-semibold">April 20</span>: Launch landing page with newsletter signup.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-accent font-bold mr-3 text-lg">•</span>
              <div>
                <span className="font-semibold">April 25</span>: Send first newsletter—&quot;Why Building Alone Sucks&quot;—target 50-100 subscribers.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-accent font-bold mr-3 text-lg">•</span>
              <div>
                <span className="font-semibold">May 1</span>: Set up community platform—basic channels like &quot;Chat,&quot; &quot;Ideas.&quot;
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-accent font-bold mr-3 text-lg">•</span>
              <div>
                <span className="font-semibold">May 15</span>: Test community with 5-10 beta users (e.g., friends), tweak setup.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Phase 2: Soft Launch (June 2025)",
      content: (
        <div className="glass-effect rounded-xl p-6 border border-accent/20 backdrop-blur-md bg-background/30">
          <p className="text-foreground/80 mb-4 font-medium">
            <strong className="text-accent">Goal</strong>: Open up, kick off tiers, cohorts, and YouTube.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-accent font-bold mr-3 text-lg">•</span>
              <div>
                <span className="font-semibold">June 1</span>: Community launches—$30/month base tier, aim for 20-50 members
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-accent font-bold mr-3 text-lg">•</span>
              <div>
                <span className="font-semibold">June 5</span>: Host intro Q&A with an in-house dev (1 hour).
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-accent font-bold mr-3 text-lg">•</span>
              <div>
                <span className="font-semibold">June 15</span>: Launch higher tiers and cohorts:
                <ul className="mt-3 space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-accent/80 mr-2 text-lg">◦</span>
                    <div>
                      <span className="font-semibold">Pro Tier (TBD)</span>: 1 hour of 1:1 dev help/month, priority Q&A access—target 5-10 upgrades.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent/80 mr-2 text-lg">◦</span>
                    <div>
                      <span className="font-semibold">Elite Tier (TBD)</span>: 3 hours of 1:1 help/month, private peer group—target 2-5 upgrades.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent/80 mr-2 text-lg">◦</span>
                    <div>
                      <span className="font-semibold">Cohorts</span>: Form 2-3 groups (5-7 members each) based on app ideas or skills—weekly check-ins with an in-house dev, fast-tracked for funding.
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Phase 3: Info Coming Soon",
      content: (
        <div className="glass-effect rounded-xl p-6 border border-accent/20 backdrop-blur-md bg-background/30">
          <div className="text-center">
            <p className="text-lg mb-4">Stay tuned for more details about our next phase!</p>
            <div className="inline-flex items-center gap-2 text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Coming soon</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="roadmap" className="relative">
      <Timeline data={timelineData} />
    </section>
  );
}
