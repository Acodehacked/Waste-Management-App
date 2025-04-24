import { Card, CardContent } from "@/components/ui/card";

export function InfoSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-green-800">Why Waste Management Matters</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Proper waste management is essential for maintaining a healthy environment and sustainable future. Here's why it's crucial for our community:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-green-100 hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-green-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-700">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-green-800">Environmental Protection</h3>
              <p className="text-gray-600 text-center">
                Prevents pollution of air, water, and soil, protecting ecosystems and wildlife from harmful contaminants.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-green-100 hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-green-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-700">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-green-800">Public Health</h3>
              <p className="text-gray-600 text-center">
                Reduces disease vectors and prevents contamination of water sources, safeguarding community health.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-green-100 hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-green-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-700">
                  <path d="M12 3a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9-4.97 0-9-4.03-9-9H3c0 4.97 4.03 9 9 9"></path>
                  <path d="M12 3c4.97 0 9 4.03 9 9h-9m9 0c0 4.97-4.03 9-9 9"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-green-800">Resource Recovery</h3>
              <p className="text-gray-600 text-center">
                Enables recycling and composting, converting waste into valuable resources and reducing landfill usage.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 bg-green-50 p-6 rounded-lg border border-green-100">
          <h3 className="text-xl font-bold mb-4 text-green-800">The Consequences of Inaction</h3>
          <p className="text-gray-700 mb-4">
            If waste continues to be mismanaged, future generations may face irreversible environmental damage, increased disease outbreaks, and loss of biodiversity. Oceans could be filled with plastic, and air quality may deteriorate beyond safe levels.
          </p>
          <p className="text-gray-700">
            By taking action today and properly reporting waste, you're contributing to a cleaner, healthier future for our community and the planet.
          </p>
        </div>
      </div>
    </section>
  );
}