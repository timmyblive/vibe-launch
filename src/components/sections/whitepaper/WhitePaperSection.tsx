"use client";

import React from "react";

export default function WhitePaperSection() {
  return (
    <section id="whitepaper" className="py-20 relative">
      <div className="w-full px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
            <span className="text-gradient">White Paper:</span> VibeLaunch
          </h2>
          <p className="text-xl md:text-2xl text-center mb-12 text-foreground/80">
            <strong>Build Together—Real Apps, Real Community, No Hype</strong>
          </p>
          
          {/* Problem Section */}
          <div className="glass-effect rounded-2xl p-8 border border-accent/20 blue-glow backdrop-blur-md bg-background/30 mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold mr-4">1</div>
              <h3 className="text-2xl md:text-3xl font-bold">The Problem: Solo Building Sucks</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-foreground/80">
                Building an app alone is brutal. You&apos;re stuck in your head, wrestling with bugs, second-guessing every move—no one to bounce ideas off, no one to cheer you on. New developers, especially those who don&apos;t yet code fluently, feel this hard. Add the internet&apos;s hype machine—YouTube gurus promising AI will magically build your app or make you a no-code millionaire—and it&apos;s a recipe for burnout.
              </p>
              
              <div className="p-4 border-l-4 border-accent/50 bg-accent/5 rounded-r-lg">
                <p className="text-foreground/80">
                  The fallout&apos;s real: one dev lost thousands when hackers hit his exposed API keys. Another racked up a huge bill from a sloppy code push. These aren&apos;t just mistakes—they&apos;re what happens when you&apos;re isolated, chasing shortcuts without support. You end up with wasted time, drained wallets, and apps that never see daylight.
                </p>
              </div>
              
              <p className="text-foreground/90 font-semibold">
                We&apos;re here to fix that.
              </p>
            </div>
          </div>
          
          {/* Vision Section */}
          <div className="glass-effect rounded-2xl p-8 border border-accent/20 blue-glow backdrop-blur-md bg-background/30 mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold mr-4">2</div>
              <h3 className="text-2xl md:text-3xl font-bold">Our Vision: Community Over Chaos</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-foreground/80">
                <strong className="text-accent">VibeLaunch is your crew.</strong> We&apos;re a community for new developers who want to build web and mobile apps with AI—together, not alone. No fairy tales about instant riches. No vibe-coding chaos that costs you big. Just a group to keep you accountable, make it less lonely, and help you turn your idea into something real. Here&apos;s how we roll:
              </p>
              
              <ul className="space-y-3 pl-6">
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-2 text-lg">•</span>
                  <div>
                    <span className="font-semibold">Real Talk</span>: We ditch the hype—AI&apos;s a tool, not a savior—and focus on what gets apps built.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-2 text-lg">•</span>
                  <div>
                    <span className="font-semibold">In-House Backup</span>: Our devs jump in when you&apos;re stuck—live, not canned—because peers alone aren&apos;t enough.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-2 text-lg">•</span>
                  <div>
                    <span className="font-semibold">Community Power</span>: You&apos;ve got people—peers to brainstorm with, mentors to nudge you forward. Belonging beats building solo every time.
                  </div>
                </li>
              </ul>
              
              <p className="text-foreground/90 font-semibold">
                Our mission: make building fun, keep you on track, and get your app live—without the vibe-coding disasters.
              </p>
            </div>
          </div>
          
          {/* What You Get Section */}
          <div className="glass-effect rounded-2xl p-8 border border-accent/20 blue-glow backdrop-blur-md bg-background/30 mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold mr-4">3</div>
              <h3 className="text-2xl md:text-3xl font-bold">What You Get</h3>
            </div>
            
            <p className="text-foreground/80 mb-6">
              No fluff—here&apos;s the deal.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-effect rounded-xl p-6 border border-accent/20 backdrop-blur-sm bg-background/20">
                <h4 className="text-xl font-bold mb-4 text-accent">At Launch (Phase 1)</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold">Private Community</span>: A space to connect, share struggles, and find your people.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold">Monthly Q&A</span>: Live sessions with our in-house devs to crack your toughest blocks.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold">Cost</span>: Coming soon. No free tier—this is for builders who mean it.
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="glass-effect rounded-xl p-6 border border-accent/20 backdrop-blur-sm bg-background/20">
                <h4 className="text-xl font-bold mb-4 text-accent">Future Goals (Phase 2-3)</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold">Cohorts</span>: Small teams for tighter support and a shot at funding.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold">Tool Discounts</span>: Savings on hosting, AI APIs, or editors as we grow.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold">Funding Opportunities</span>: Pitch your app for cash to scale—fair terms, real backing.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold">More Support</span>: Extra Q&As, 1:1 help, and deeper tools down the line.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Expectations Section */}
          <div className="glass-effect rounded-2xl p-8 border border-accent/20 blue-glow backdrop-blur-md bg-background/30 mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold mr-4">4</div>
              <h3 className="text-2xl md:text-3xl font-bold">Expectations: What We Are (and Aren&apos;t)</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold mr-3 mt-1">✓</div>
                <div>
                  <h4 className="text-lg font-bold mb-1">We Are</h4>
                  <p className="text-foreground/80">
                    Your home to build apps with AI, surrounded by people who get it—accountability, belonging, and real help when you need it. Expect a tight-knit vibe and live support to keep you moving.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold mr-3 mt-1">✗</div>
                <div>
                  <h4 className="text-lg font-bold mb-1">We Aren&apos;t</h4>
                  <p className="text-foreground/80">
                    A lecture hall, a hype factory, or a vibe-coding free-for-all. We&apos;re not here for lone wolves who won&apos;t engage.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold mr-3 mt-1">!</div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Day One Reality</h4>
                  <p className="text-foreground/80">
                    At launch, it&apos;s lean but alive—peer chats and monthly expert Q&As. No polished extras—just a raw, real community to start with.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-foreground/80 mt-6">
              We grow with you. Your voice shapes the support, perks, and future we build together.
            </p>
          </div>
          
          {/* Why Join Section */}
          <div className="glass-effect rounded-2xl p-8 border border-accent/20 blue-glow backdrop-blur-md bg-background/30">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold mr-4">5</div>
              <h3 className="text-2xl md:text-3xl font-bold">Why Join?</h3>
            </div>
            
            <p className="text-foreground/80 mb-6">
              Building alone sucks—here, you&apos;ve got a crew to keep you accountable and make it less lonely. You&apos;ll skip the costly vibe-coding traps, get live help to launch your app, and have a shot at funding or a spot in a select cohort for extra focus. This isn&apos;t about hype—it&apos;s about building, together.
            </p>
            
            <div className="bg-accent/10 p-6 rounded-lg text-center">
              <p className="text-lg mb-4">
                Want a taste? Sign up for our free newsletter at vibelaunch.com—weekly tips that cut the crap.
              </p>
              <button className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:blue-glow transition-all">
                Ready to build with us?
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
