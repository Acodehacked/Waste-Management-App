"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "../ui/badge";

export function AnalyticsDashboard() {
  // Mock data for charts
  const monthlyReportsData = [
    { name: "Jan", reports: 30 },
    { name: "Feb", reports: 25 },
    { name: "Mar", reports: 35 },
    { name: "Apr", reports: 40 },
    { name: "May", reports: 28 },
    { name: "Jun", reports: 32 },
    { name: "Jul", reports: 45 },
    { name: "Aug", reports: 38 },
    { name: "Sep", reports: 42 },
    { name: "Oct", reports: 36 },
    { name: "Nov", reports: 30 },
    { name: "Dec", reports: 28 },
  ];

  const wasteTypeData = [
    { name: "Household", value: 35 },
    { name: "Organic", value: 25 },
    { name: "Plastic", value: 20 },
    { name: "Electronic", value: 8 },
    { name: "Construction", value: 12 },
  ];

  const resolutionTimeData = [
    { name: "< 24 hours", count: 28 },
    { name: "1-2 days", count: 35 },
    { name: "3-5 days", count: 22 },
    { name: "6-10 days", count: 10 },
    { name: "10+ days", count: 5 },
  ];

  const areaReportsData = [
    { name: "North District", reports: 45, resolved: 38 },
    { name: "South District", reports: 35, resolved: 30 },
    { name: "East District", reports: 28, resolved: 22 },
    { name: "West District", reports: 32, resolved: 28 },
    { name: "Central District", reports: 30, resolved: 25 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
        <div className="flex space-x-2">
          <Select defaultValue="year">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">125</div>
            <p className="text-xs text-muted-foreground">+15.3% from last period</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">+4.5% from last period</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Resolution Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4 days</div>
            <p className="text-xs text-muted-foreground">-0.3 days from last period</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Citizen Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last period</p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="waste-types">Waste Types</TabsTrigger>
          <TabsTrigger value="areas">Areas</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Reports Trend</CardTitle>
              <CardDescription>
                Number of waste reports submitted each month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={monthlyReportsData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="reports" 
                      stroke="hsl(var(--chart-1))" 
                      fill="hsla(var(--chart-1), 0.2)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Waste Type Distribution</CardTitle>
                <CardDescription>
                  Breakdown of reports by waste type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={wasteTypeData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {wasteTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={`hsl(var(--chart-${(index % 5) + 1}))`} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Resolution Time</CardTitle>
                <CardDescription>
                  Time taken to resolve waste reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={resolutionTimeData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="hsl(var(--chart-2))" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="waste-types">
          <Card>
            <CardHeader>
              <CardTitle>Waste Type Analytics</CardTitle>
              <CardDescription>
                Detailed analysis of different waste types reported
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-6">
                This section provides insights into the various types of waste reported, helping to target specific waste management strategies.
              </p>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Waste Category Analysis</h3>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={wasteTypeData}
                            cx="50%"
                            cy="50%"
                            labelLine={true}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            nameKey="name"
                          >
                            {wasteTypeData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Waste Type Trends</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      The most frequently reported waste types over time:
                    </p>
                    <ol className="space-y-3">
                      {wasteTypeData.map((type, index) => (
                        <li key={index} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div 
                              className="w-3 h-3 rounded-full mr-2" 
                              style={{ backgroundColor: COLORS[index % COLORS.length] }}
                            ></div>
                            <span>{type.name}</span>
                          </div>
                          <span className="font-medium">{type.value} reports</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Recommendations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-semibold mb-2">Household Waste</h4>
                        <p className="text-sm text-muted-foreground">
                          Consider increasing collection frequency in residential areas.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-semibold mb-2">Organic Waste</h4>
                        <p className="text-sm text-muted-foreground">
                          Implement community composting initiatives near markets.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-semibold mb-2">Plastic Waste</h4>
                        <p className="text-sm text-muted-foreground">
                          Launch awareness campaign about reducing single-use plastics.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="areas">
          <Card>
            <CardHeader>
              <CardTitle>Area-wise Reports</CardTitle>
              <CardDescription>
                Distribution of waste reports by geographical area
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] mb-8">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={areaReportsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="reports" name="Total Reports" fill="hsl(var(--chart-1))" />
                    <Bar dataKey="resolved" name="Resolved" fill="hsl(var(--chart-2))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Area Highlights</h3>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold">North District</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Highest report volume, 84% resolution rate
                      </p>
                      <div className="h-2 bg-gray-100 rounded">
                        <div className="h-2 bg-green-500 rounded" style={{ width: "84%" }}></div>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold">East District</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Lowest resolution rate at 78%
                      </p>
                      <div className="h-2 bg-gray-100 rounded">
                        <div className="h-2 bg-amber-500 rounded" style={{ width: "78%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Recommended Actions</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-2 mt-0.5">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Increase collection frequency in North District due to high volume</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-2 mt-0.5">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Allocate additional resources to East District to improve resolution rate</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-2 mt-0.5">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Conduct community awareness programs in South District</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-2 mt-0.5">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Install additional waste bins in hotspot areas of Central District</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Team Performance</CardTitle>
              <CardDescription>
                Analysis of waste management team performance metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2 text-center">Team Alpha</h3>
                      <div className="text-3xl font-bold text-center mb-2 text-green-600">94%</div>
                      <p className="text-sm text-muted-foreground text-center">Resolution Rate</p>
                      <div className="h-2 bg-gray-100 rounded mt-4">
                        <div className="h-2 bg-green-500 rounded" style={{ width: "94%" }}></div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2 text-center">Team Beta</h3>
                      <div className="text-3xl font-bold text-center mb-2 text-green-600">87%</div>
                      <p className="text-sm text-muted-foreground text-center">Resolution Rate</p>
                      <div className="h-2 bg-gray-100 rounded mt-4">
                        <div className="h-2 bg-green-500 rounded" style={{ width: "87%" }}></div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2 text-center">Team Gamma</h3>
                      <div className="text-3xl font-bold text-center mb-2 text-green-600">82%</div>
                      <p className="text-sm text-muted-foreground text-center">Resolution Rate</p>
                      <div className="h-2 bg-gray-100 rounded mt-4">
                        <div className="h-2 bg-green-500 rounded" style={{ width: "82%" }}></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Resolution Time by Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          layout="vertical"
                          data={[
                            { name: "Team Alpha", time: 1.8 },
                            { name: "Team Beta", time: 2.3 },
                            { name: "Team Gamma", time: 2.7 },
                            { name: "Team Delta", time: 3.1 },
                          ]}
                          margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" label={{ value: 'Days', position: 'insideBottom', offset: -5 }} />
                          <YAxis dataKey="name" type="category" />
                          <Tooltip />
                          <Bar dataKey="time" name="Avg. Resolution Time (days)" fill="hsl(var(--chart-3))" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Performance Insights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-semibold mb-2">Top Performers</h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between items-center">
                            <span>Raj Kumar (Team Alpha)</span>
                            <Badge>98% resolution</Badge>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Priya Singh (Team Alpha)</span>
                            <Badge>96% resolution</Badge>
                          </li>
                          <li className="flex justify-between items-center">
                            <span>Amit Sharma (Team Beta)</span>
                            <Badge>95% resolution</Badge>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-semibold mb-2">Areas for Improvement</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 mr-2 mt-0.5">
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="8" x2="12" y2="12"></line>
                              <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                            <span>Team Gamma needs additional training on hazardous waste handling</span>
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 mr-2 mt-0.5">
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="8" x2="12" y2="12"></line>
                              <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                            <span>Response time in East District needs to be improved</span>
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 mr-2 mt-0.5">
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="8" x2="12" y2="12"></line>
                              <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                            <span>Equipment maintenance schedule needs better adherence</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}