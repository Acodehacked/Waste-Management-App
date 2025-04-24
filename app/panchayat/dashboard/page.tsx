"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFirebase } from "@/lib/firebase/firebase-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PanchayatHeader } from "@/components/panchayat/panchayat-header";
import { ReportsTable } from "@/components/panchayat/reports-table";
import { AnalyticsDashboard } from "@/components/panchayat/analytics-dashboard";
import { Skeleton } from "@/components/ui/skeleton";

export default function PanchayatDashboard() {
  const { user, loading } = useFirebase();
  const router = useRouter();
  
  // useEffect(() => {
  //   if (!loading && !user) {
  //     router.push("/panchayat/login");
  //   }
  // }, [user, loading, router]);
  
  if (loading) {
    return <DashboardSkeleton />;
  }
  
  // if (!user) {
  //   return null; // Will redirect in the useEffect
  // }

  return (
    <div className="min-h-screen bg-background">
      <PanchayatHeader />
      
      <main className="container mx-auto px-4 py-6">
        <Tabs defaultValue="reports" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3 md:w-auto">
            <TabsTrigger value="reports">Waste Reports</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="management">Management</TabsTrigger>
          </TabsList>
          
          <TabsContent value="reports" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    New Reports
                  </CardTitle>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <path d="M5 3v16h16"></path>
                    <path d="M5 19h5"></path>
                    <path d="M10 19v-5"></path>
                    <path d="M15 19v-9"></path>
                    <path d="M20 19v-13"></path>
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">
                    +8% from last week
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    In Progress
                  </CardTitle>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                    <path d="M5 3v16h16"></path>
                    <path d="M5 19h5"></path>
                    <path d="M10 19v-5"></path>
                    <path d="M15 19v-9"></path>
                    <path d="M20 19v-13"></path>
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15</div>
                  <p className="text-xs text-muted-foreground">
                    +12% from last week
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Resolved
                  </CardTitle>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <path d="M22 4 12 14.01l-3-3"></path>
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">98</div>
                  <p className="text-xs text-muted-foreground">
                    +24% from last month
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <ReportsTable />
          </TabsContent>
          
          <TabsContent value="analytics">
            <AnalyticsDashboard />
          </TabsContent>
          
          <TabsContent value="management">
            <Card>
              <CardHeader>
                <CardTitle>Resource Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Manage waste collection teams, equipment, and schedules.
                </p>
                <div className="space-y-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Collection Teams</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 border rounded-md">
                          <h4 className="font-semibold">Team Alpha</h4>
                          <p className="text-sm text-muted-foreground">5 members</p>
                          <p className="text-sm">North District</p>
                        </div>
                        <div className="p-4 border rounded-md">
                          <h4 className="font-semibold">Team Beta</h4>
                          <p className="text-sm text-muted-foreground">4 members</p>
                          <p className="text-sm">South District</p>
                        </div>
                        <div className="p-4 border rounded-md">
                          <h4 className="font-semibold">Team Gamma</h4>
                          <p className="text-sm text-muted-foreground">6 members</p>
                          <p className="text-sm">East District</p>
                        </div>
                      </div>
                      <Button className="mt-4" variant="outline">View All Teams</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Equipment Inventory</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span>Collection Trucks</span>
                          <span className="font-semibold">8 available</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Waste Containers</span>
                          <span className="font-semibold">120 available</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Protective Equipment Sets</span>
                          <span className="font-semibold">45 available</span>
                        </div>
                      </div>
                      <Button className="mt-4" variant="outline">Manage Inventory</Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto py-4 px-4">
          <Skeleton className="h-8 w-48" />
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-6">
        <Skeleton className="h-10 w-[300px] mb-6" />
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <Skeleton className="h-[120px]" />
          <Skeleton className="h-[120px]" />
          <Skeleton className="h-[120px]" />
        </div>
        <Skeleton className="h-[400px]" />
      </main>
    </div>
  );
}