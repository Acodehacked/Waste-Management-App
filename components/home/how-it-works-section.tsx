export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-green-800">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our waste management reporting system is designed to be simple and effective, connecting community members with local panchayat officials.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -ml-0.5 w-0.5 h-full bg-green-200"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-start md:items-center flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2 text-green-800">1. Report Waste</h3>
                  <p className="text-gray-600">
                    Fill out the simple reporting form with details about the waste location, type, and other relevant information.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-start md:justify-center z-10 order-1 md:order-2">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center border-4 border-white shadow-md">
                    <span className="text-lg font-bold text-green-800">1</span>
                  </div>
                </div>
              </div>
              
              <div className="relative flex items-start md:items-center flex-col md:flex-row">
                <div className="md:w-1/2 flex justify-start md:justify-center z-10 order-1">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center border-4 border-white shadow-md">
                    <span className="text-lg font-bold text-green-800">2</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0 order-2">
                  <h3 className="text-xl font-bold mb-2 text-green-800">2. Notification</h3>
                  <p className="text-gray-600">
                    The panchayat officials receive instant notifications about new waste reports in their jurisdiction.
                  </p>
                </div>
              </div>
              
              <div className="relative flex items-start md:items-center flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2 text-green-800">3. Assessment</h3>
                  <p className="text-gray-600">
                    Officials review and assess the reported waste situation, determining the appropriate action needed.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-start md:justify-center z-10 order-1 md:order-2">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center border-4 border-white shadow-md">
                    <span className="text-lg font-bold text-green-800">3</span>
                  </div>
                </div>
              </div>
              
              <div className="relative flex items-start md:items-center flex-col md:flex-row">
                <div className="md:w-1/2 flex justify-start md:justify-center z-10 order-1">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center border-4 border-white shadow-md">
                    <span className="text-lg font-bold text-green-800">4</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0 order-2">
                  <h3 className="text-xl font-bold mb-2 text-green-800">4. Action</h3>
                  <p className="text-gray-600">
                    The waste collection team is dispatched to the location to properly remove and dispose of the waste.
                  </p>
                </div>
              </div>
              
              <div className="relative flex items-start md:items-center flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2 text-green-800">5. Resolution</h3>
                  <p className="text-gray-600">
                    Once resolved, the report is marked as complete, and you can check the status of your report at any time.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-start md:justify-center z-10 order-1 md:order-2">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center border-4 border-white shadow-md">
                    <span className="text-lg font-bold text-green-800">5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}