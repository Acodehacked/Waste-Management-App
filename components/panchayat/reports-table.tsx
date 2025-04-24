"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { db } from "@/lib/firebase/firebase-config";
import { collection, getDocs, doc, updateDoc, query, orderBy, Timestamp } from "firebase/firestore";

interface WasteReport {
  id: string;
  area: string;
  wasteType: string;
  description: string;
  status: "new" | "assigned" | "in-progress" | "resolved";
  reportedAt: Timestamp;
  contactName?: string;
  contactPhone?: string;
  assignedTo?: string;
  actionTaken?: string;
}

export function ReportsTable() {
  const { toast } = useToast();
  const [reports, setReports] = useState<WasteReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedReport, setSelectedReport] = useState<WasteReport | null>(null);
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({
    status: "",
    assignedTo: "",
    actionTaken: "",
  });

  // For demo purposes, we'll use mock data
  // In a real app, this would fetch from Firestore
  useEffect(() => {
    // const mockReports: WasteReport[] = [
    //   {
    //     id: "1",
    //     area: "Gandhi Nagar",
    //     wasteType: "household",
    //     description: "Large pile of household waste near the park entrance",
    //     status: "new",
    //     reportedAt: Timestamp.fromDate(new Date(Date.now() - 86400000)), // 1 day ago
    //     contactName: "Rajesh Kumar",
    //     contactPhone: "9876543210",
    //   },
    //   {
    //     id: "2",
    //     area: "Shastri Road",
    //     wasteType: "construction",
    //     description: "Construction debris blocking drainage",
    //     status: "assigned",
    //     assignedTo: "Team Alpha",
    //     reportedAt: Timestamp.fromDate(new Date(Date.now() - 172800000)), // 2 days ago
    //     contactName: "Priya Sharma",
    //     contactPhone: "8765432109",
    //   },
    //   {
    //     id: "3",
    //     area: "Nehru Market",
    //     wasteType: "organic",
    //     description: "Vegetable waste from market vendors",
    //     status: "in-progress",
    //     assignedTo: "Team Beta",
    //     actionTaken: "Team dispatched for cleanup",
    //     reportedAt: Timestamp.fromDate(new Date(Date.now() - 259200000)), // 3 days ago
    //     contactName: "Anil Verma",
    //     contactPhone: "7654321098",
    //   },
    //   {
    //     id: "4",
    //     area: "Patel Colony",
    //     wasteType: "plastic",
    //     description: "Plastic waste clogging community pond",
    //     status: "resolved",
    //     assignedTo: "Team Gamma",
    //     actionTaken: "Waste collected and recycled",
    //     reportedAt: Timestamp.fromDate(new Date(Date.now() - 345600000)), // 4 days ago
    //     contactName: "Meera Patel",
    //     contactPhone: "6543210987",
    //   },
    //   {
    //     id: "5",
    //     area: "Ambedkar Road",
    //     wasteType: "electronic",
    //     description: "Discarded electronic items near school",
    //     status: "new",
    //     reportedAt: Timestamp.fromDate(new Date(Date.now() - 432000000)), // 5 days ago
    //     contactName: "Suresh Gupta",
    //     contactPhone: "5432109876",
    //   }
    // ];

    // setReports(mockReports);
    setLoading(false);

    // In a real app, you would fetch from Firestore like this:
    const fetchReports = async () => {
      try {
        const reportsRef = collection(db, "wasteReports");
        const q = query(reportsRef, orderBy("reportedAt", "desc"));
        const querySnapshot = await getDocs(q);

        const fetchedReports: WasteReport[] = [];
        querySnapshot.forEach((doc) => {
          fetchedReports.push({
            id: doc.id,
            ...doc.data(),
          } as WasteReport);
        });

        setReports(fetchedReports);
      } catch (error) {
        console.error("Error fetching reports:", error);
        toast({
          title: "Error",
          description: "Failed to load waste reports",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  const handleUpdateReport = (report: WasteReport) => {
    setSelectedReport(report);
    setUpdateFormData({
      status: report.status,
      assignedTo: report.assignedTo || "",
      actionTaken: report.actionTaken || "",
    });
    setIsUpdateDialogOpen(true);
  };

  const handleUpdateSubmit = async () => {
    if (!selectedReport) return;

    // In a real app, you would update in Firestore:
    try {
      const reportRef = doc(db, "wasteReports", selectedReport.id);
      await updateDoc(reportRef, {
        status: updateFormData.status,
        assignedTo: updateFormData.assignedTo,
        actionTaken: updateFormData.actionTaken,
        updatedAt: new Date().toDateString(),
      });
      
      // // Update local state
      // setReports(reports.map(report => 
      //   report.id === selectedReport.id 
      //     ? { ...report, ...updateFormData } 
      //     : report
      // ));
      
      toast({
        title: "Report updated",
        description: "The waste report has been successfully updated",
      });
    } catch (error) {
      console.error("Error updating report:", error);
      toast({
        title: "Update failed",
        description: "There was an error updating the report",
        variant: "destructive",
      });
    }

    // For demo purposes, just update the local state
    setReports(reports.map(report =>
      report.id === selectedReport.id
        ? { ...report, ...updateFormData as any }
        : report
    ));

    toast({
      title: "Report updated",
      description: "The waste report has been successfully updated",
    });

    setIsUpdateDialogOpen(false);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <Badge variant="default" className="bg-blue-500">New</Badge>;
      case "assigned":
        return <Badge variant="outline" className="border-yellow-500 text-yellow-500">Assigned</Badge>;
      case "in-progress":
        return <Badge variant="default" className="bg-amber-500">In Progress</Badge>;
      case "resolved":
        return <Badge variant="default" className="bg-green-500">Resolved</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const formatDate = (timestamp: Timestamp) => {
    const date = timestamp.toDate();
    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date);
  };

  if (loading) {
    return <div className="flex justify-center p-4">Loading reports...</div>;
  }

  return (
    <>
      <div className="bg-white rounded-md border shadow-sm">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-bold">Waste Reports</h2>
          <div className="flex space-x-2">
            <Input className="max-w-[180px]" placeholder="Search reports..." />
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Reports</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="assigned">Assigned</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Area</TableHead>
              <TableHead>Waste Type</TableHead>
              <TableHead>Reported</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reports.map((report,index) => (
              <TableRow key={report.id}>
                <TableCell className="font-medium">{index+1}</TableCell>
                <TableCell>{report.area}</TableCell>
                <TableCell className="capitalize">{report.wasteType}</TableCell>
                <TableCell>{formatDate(report.reportedAt)}</TableCell>
                <TableCell>{getStatusBadge(report.status)}</TableCell>
                <TableCell>
                  {report.contactName ? `${report.contactName.substring(0, 15)}...` : "Anonymous"}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleUpdateReport(report)}>
                        Update Status
                      </DropdownMenuItem>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Assign Team</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="p-4 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {reports.length} reports
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isUpdateDialogOpen} onOpenChange={setIsUpdateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Waste Report</DialogTitle>
            <DialogDescription>
              Update the status and details for report from {selectedReport?.area}.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={updateFormData.status}
                onValueChange={(value: WasteReport["status"]) => setUpdateFormData({ ...updateFormData, status: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="assigned">Assigned</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="assignedTo">Assign To</Label>
              <Select
                value={updateFormData.assignedTo}
                onValueChange={(value) => setUpdateFormData({ ...updateFormData, assignedTo: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select team" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Team Alpha">Team Alpha</SelectItem>
                  <SelectItem value="Team Beta">Team Beta</SelectItem>
                  <SelectItem value="Team Gamma">Team Gamma</SelectItem>
                  <SelectItem value="Team Delta">Team Delta</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="actionTaken">Action Taken</Label>
              <Textarea
                id="actionTaken"
                value={updateFormData.actionTaken}
                onChange={(e) => setUpdateFormData({ ...updateFormData, actionTaken: e.target.value })}
                placeholder="Describe the action taken"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsUpdateDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleUpdateSubmit}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}