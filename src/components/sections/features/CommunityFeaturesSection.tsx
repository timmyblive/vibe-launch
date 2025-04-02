"use client";

import React from "react";

export default function CommunityFeaturesSection() {
  return (
    <section id="features" className="py-20 relative">
      <div className="w-full px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
            <span className="text-gradient">Community</span> Features
          </h2>
          <p className="text-xl md:text-2xl text-center mb-12 text-foreground/80">
            <strong>Build Together—Real Apps, Real Community, No Hype</strong>
          </p>
          
          {/* Problem Section */}
          <div className="glass-effect rounded-2xl p-8 border border-accent/20 blue-glow backdrop-blur-md bg-background/30 mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold mr-4">1</div>
              <h3 className="text-2xl md:text-3xl font-bold">The Problem We Solve</h3>
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
          
          {/* Our Approach Section */}
          <div className="glass-effect rounded-2xl p-8 border border-accent/20 blue-glow backdrop-blur-md bg-background/30 mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold mr-4">2</div>
              <h3 className="text-2xl md:text-3xl font-bold">Our Approach: Community Over Chaos</h3>
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
          
          {/* Coming Soon Section (formerly Current Features) */}
          <div className="glass-effect rounded-2xl p-8 border border-accent/20 blue-glow backdrop-blur-md bg-background/30 mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold mr-4">3</div>
              <h3 className="text-2xl md:text-3xl font-bold">Coming Soon</h3>
            </div>
            
            <p className="text-foreground/80 mb-6">
              Here&apos;s what we&apos;re launching soon:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-effect rounded-xl p-6 border border-accent/20 backdrop-blur-sm bg-background/20">
                <h4 className="text-xl font-bold mb-4 text-accent">Community Features</h4>
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
                      <span className="font-semibold">Accountability</span>: Regular check-ins to keep your project moving forward.
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="glass-effect rounded-xl p-6 border border-accent/20 backdrop-blur-sm bg-background/20">
                <h4 className="text-xl font-bold mb-4 text-accent">Technical Support</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold">Code Reviews</span>: Get feedback on your code from experienced developers.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold">Debugging Help</span>: Stuck on a bug? Our community will help you solve it.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2">•</span>
                    <div>
                      <span className="font-semibold">AI Integration</span>: Learn how to effectively use AI tools in your development workflow.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-4 border border-accent/20 rounded-lg bg-accent/5 text-center">
              <p className="text-lg font-medium">
                <span className="text-accent">✨ Join our waitlist to be the first to access these features! ✨</span>
              </p>
            </div>
          </div>
          
          {/* Future Expansion Section (formerly Coming Soon) */}
          <div className="glass-effect rounded-2xl p-8 border border-accent/20 blue-glow backdrop-blur-md bg-background/30 mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold mr-4">4</div>
              <h3 className="text-2xl md:text-3xl font-bold">Future Expansion</h3>
            </div>
            
            <p className="text-foreground/80 mb-6">
              We&apos;re constantly evolving and adding new features based on community feedback. Here&apos;s what&apos;s on our long-term roadmap:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-effect rounded-xl p-6 border border-accent/20 backdrop-blur-sm bg-background/20">
                <h4 className="text-xl font-bold mb-4 text-accent">Enhanced Community</h4>
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
                      <span className="font-semibold">Mentorship Program</span>: One-on-one guidance from experienced developers.
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="glass-effect rounded-xl p-6 border border-accent/20 backdrop-blur-sm bg-background/20">
                <h4 className="text-xl font-bold mb-4 text-accent">Additional Resources</h4>
                <ul className="space-y-3">
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
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-4 border border-accent/20 rounded-lg bg-accent/5 text-center">
              <p className="text-lg font-medium">
                <span className="text-accent">✨ New features are added regularly based on community feedback! ✨</span>
              </p>
              <p className="mt-2 text-foreground/70">
                Have a feature suggestion? Join our community and let us know!
              </p>
            </div>
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
