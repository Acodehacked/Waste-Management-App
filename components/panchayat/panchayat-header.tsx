"use client";

import { useFirebase } from "@/lib/firebase/firebase-provider";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function PanchayatHeader() {
  const { user, signOut } = useFirebase();
  const { toast } = useToast();
  const router = useRouter();
  
  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out successfully",
      });
      router.push("/panchayat/login");
    } catch (error) {
      toast({
        title: "Error signing out",
        variant: "destructive",
      });
    }
  };
  
  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/panchayat/dashboard" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-700">
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
              <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
              <path d="M12 3v6"></path>
            </svg>
            <span className="text-lg font-bold text-green-700">Panchayat Dashboard</span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-sm hidden md:block">
            Logged in as: <span className="font-medium">{user?.email}</span>
          </div>
          <Link href="/">
            <Button variant="outline" size="sm">View Public Site</Button>
          </Link>
          <Button variant="ghost" size="sm" onClick={handleSignOut}>Sign Out</Button>
        </div>
      </div>
    </header>
  );
}