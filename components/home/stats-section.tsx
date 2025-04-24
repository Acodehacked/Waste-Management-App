"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase/firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";

export function StatsSection() {
  const [stats, setStats] = useState({
    totalReports: 0,
    resolvedReports: 0,
    pendingReports: 0,
    resolvedPercentage: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // These would typically be fetched from Firestore
        // For demo purposes, setting placeholder values
        setStats({
          totalReports: 125,
          resolvedReports: 98,
          pendingReports: 27,
          resolvedPercentage: 78,
        });
        
        // Uncomment to fetch real data when database is populated
        /*
        const reportsRef = collection(db, "wasteReports");
        const allReportsSnapshot = await getDocs(reportsRef);
        const totalReports = allReportsSnapshot.size;
        
        const resolvedQuery = query(reportsRef, where("status", "==", "resolved"));
        const resolvedSnapshot = await getDocs(resolvedQuery);
        const resolvedReports = resolvedSnapshot.size;
        
        const pendingReports = totalReports - resolvedReports;
        const resolvedPercentage = totalReports > 0 ? Math.round((resolvedReports / totalReports) * 100) : 0;
        
        setStats({
          totalReports,
          resolvedReports,
          pendingReports,
          resolvedPercentage,
        });
        */
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    
    fetchStats();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-green-800">Our Impact</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how our community-driven waste management system is making a difference in keeping our surroundings clean.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-green-100 hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-green-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-700">
                  <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"></path>
                  <path d="M9 22h9a2 2 0 0 0 2-2v-7"></path>
                  <path d="M13 5v6"></path>
                  <path d="M10 8h6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-green-800">Total Reports</h3>
              <p className="text-3xl font-bold text-center text-green-600">{stats.totalReports}</p>
              <p className="text-gray-600 text-center text-sm mt-2">
                Waste reports submitted by community members
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-green-100 hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-green-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-700">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <path d="M22 4 12 14.01l-3-3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-green-800">Resolved</h3>
              <p className="text-3xl font-bold text-center text-green-600">{stats.resolvedReports}</p>
              <p className="text-gray-600 text-center text-sm mt-2">
                Issues successfully addressed and resolved
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-green-100 hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-green-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-700">
                  <path d="M12 20v-6M12 8V4M20 12h-4M8 12H4"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-green-800">Pending</h3>
              <p className="text-3xl font-bold text-center text-amber-600">{stats.pendingReports}</p>
              <p className="text-gray-600 text-center text-sm mt-2">
                Reports currently in progress
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-green-100 hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-green-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-700">
                  <line x1="12" y1="20" x2="12" y2="10"></line>
                  <line x1="18" y1="20" x2="18" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="16"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-green-800">Success Rate</h3>
              <p className="text-3xl font-bold text-center text-green-600">{stats.resolvedPercentage}%</p>
              <p className="text-gray-600 text-center text-sm mt-2">
                Resolution rate of reported issues
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Additional UI component to show what's added in a future version */}
        <div className="mt-12 bg-green-50 p-6 rounded-lg border border-green-100 text-center">
          <h3 className="text-xl font-bold mb-4 text-green-800">Waste Reduction Impact</h3>
          <p className="text-gray-700 mb-4">
            Through our community's efforts, we've prevented approximately 15 tons of waste from reaching landfills this month.
          </p>
          <p className="text-sm text-gray-500">
            We are continuously working to improve our tracking and measuring capabilities to provide even more detailed impact analytics.
          </p>
        </div>
      </div>
    </section>
  );
}