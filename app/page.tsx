'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { ReportWasteSection } from "@/components/home/report-waste-section";
import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { InfoSection } from "@/components/home/info-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Home() {
  const [open, setopen] = useState(false)
  return (
    <div className="bg-background min-h-screen">
      <header className="border-b">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-green-700">Waste Management</span>
          </div>
          <nav className={cn("md:flex-row flex-col md:relative fixed md:top-0 left-0 right-0 z-[999] md:justify-end justify-start w-full bg-white top-[60px] md:p-0 p-8 md:items-center gap-5 md:flex",open?'flex':'hidden')}>
            <Link href="/" className="text-foreground hover:text-green-700 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-foreground hover:text-green-700 transition-colors">
              About
            </Link>
            <Link href="#report" className="text-foreground hover:text-green-700 transition-colors">
              Report Waste
            </Link>
            <Link href="#how-it-works" className="text-foreground hover:text-green-700 transition-colors">
              How it Works
            </Link>
            <Link href="/panchayat/login">
              <Button variant="outline" className="ml-4">Panchayat Login</Button>
            </Link>
          </nav>
          <div className="md:hidden">
            <Button onClick={()=>setopen(!open)} variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <HeroSection />
        <InfoSection />
        <div id="report" className="py-12 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Report Waste in Your Area</h2>
            <ReportWasteSection />
          </div>
        </div>
        <HowItWorksSection />
        <StatsSection />
      </main>

      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Waste Management</h3>
              <p className="text-green-100">
                Working together for a cleaner, healthier community through efficient waste management solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-green-100 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-green-100 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#report" className="text-green-100 hover:text-white transition-colors">
                    Report Waste
                  </Link>
                </li>
                <li>
                  <Link href="/panchayat/login" className="text-green-100 hover:text-white transition-colors">
                    Panchayat Login
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <address className="not-italic text-green-100">
                <p>Email: contact@wastemanagement.org</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Green Street, Eco City</p>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-700 text-center text-green-100">
            <p>&copy; {new Date().getFullYear()} Community Waste Management. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}