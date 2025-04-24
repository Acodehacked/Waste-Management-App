import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-green-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Proper Waste Management for a Cleaner Future
          </h1>
          <p className="text-xl mb-8 text-green-100">
            Join our community effort to manage waste efficiently and build a sustainable environment for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#report">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                Report Waste
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button size="lg" variant="outline" className="border-white  hover:bg-white text-green-800">
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}