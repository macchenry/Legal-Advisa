import React from 'react';

export default function Consultation() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10 flex flex-col lg:flex-row gap-12">
      {/* Main Content */}
      <div className="flex-1 max-w-[900px]">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-[32px] font-bold text-gray-900 mb-2">Request & Schedule a Consultation</h1>
          <p className="text-[17px] text-gray-600">
            Get personalized financial advice from our certified experts through our secure two-step booking process.
          </p>
        </div>

        {/* Choose Schedule Consultation Type */}
        <div className="mb-12">
          <h2 className="text-[22px] font-bold text-gray-900 mb-6">Choose Schedule Consultation Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Type 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-[18px] font-bold text-gray-900 leading-tight">Financial Health Check-up</h3>
                <span className="text-[22px] font-bold text-[#287A7A]">$150</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-[14px] mb-4">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                60 minutes
              </div>
              <p className="text-[14px] text-gray-600 mb-6">
                Get a comprehensive review of your financial situation with personalized recommendations.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2 text-[14px] text-gray-700">
                  <span className="material-symbols-outlined text-[#10B981] text-[18px] shrink-0">check_circle</span>
                  Budget analysis and optimization
                </li>
                <li className="flex items-start gap-2 text-[14px] text-gray-700">
                  <span className="material-symbols-outlined text-[#10B981] text-[18px] shrink-0">check_circle</span>
                  Debt management strategy
                </li>
                <li className="flex items-start gap-2 text-[14px] text-gray-700">
                  <span className="material-symbols-outlined text-[#10B981] text-[18px] shrink-0">check_circle</span>
                  Emergency fund planning
                </li>
                <li className="flex items-start gap-2 text-[14px] text-gray-700">
                  <span className="material-symbols-outlined text-[#10B981] text-[18px] shrink-0">check_circle</span>
                  Basic investment guidance
                </li>
              </ul>
              <button className="w-full bg-[#287A7A] text-white py-2.5 rounded text-[15px] font-medium flex items-center justify-center gap-2 hover:bg-[#206060]">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                Request This Consultation
              </button>
            </div>

            {/* Type 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-[18px] font-bold text-gray-900 leading-tight">Investment Strategy Session</h3>
                <span className="text-[22px] font-bold text-[#287A7A]">$225</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-[14px] mb-4">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                90 minutes
              </div>
              <p className="text-[14px] text-gray-600 mb-6">
                Deep dive into investment planning tailored to your goals and risk tolerance.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2 text-[14px] text-gray-700">
                  <span className="material-symbols-outlined text-[#10B981] text-[18px] shrink-0">check_circle</span>
                  Portfolio review and rebalancing
                </li>
                <li className="flex items-start gap-2 text-[14px] text-gray-700">
                  <span className="material-symbols-outlined text-[#10B981] text-[18px] shrink-0">check_circle</span>
                  Retirement planning strategy
                </li>
                <li className="flex items-start gap-2 text-[14px] text-gray-700">
                  <span className="material-symbols-outlined text-[#10B981] text-[18px] shrink-0">check_circle</span>
                  Tax-efficient investing
                </li>
                <li className="flex items-start gap-2 text-[14px] text-gray-700">
                  <span className="material-symbols-outlined text-[#10B981] text-[18px] shrink-0">check_circle</span>
                  Risk assessment and management
                </li>
              </ul>
              <button className="w-full bg-[#287A7A] text-white py-2.5 rounded text-[15px] font-medium flex items-center justify-center gap-2 hover:bg-[#206060]">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                Request This Consultation
              </button>
            </div>

            {/* Type 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-[18px] font-bold text-gray-900 leading-tight">Tax Planning Consultation</h3>
                <span className="text-[22px] font-bold text-[#287A7A]">$200</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-[14px] mb-4">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                75 minutes
              </div>
              <p className="text-[14px] text-gray-600 mb-6">
                Optimize your tax strategy and ensure you're not leaving money on the table.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2 text-[14px] text-gray-700">
                  <span className="material-symbols-outlined text-[#10B981] text-[18px] shrink-0">check_circle</span>
                  Tax return review
                </li>
                <li className="flex items-start gap-2 text-[14px] text-gray-700">
                  <span className="material-symbols-outlined text-[#10B981] text-[18px] shrink-0">check_circle</span>
                  Year-round tax planning
                </li>
                <li className="flex items-start gap-2 text-[14px] text-gray-700">
                  <span className="material-symbols-outlined text-[#10B981] text-[18px] shrink-0">check_circle</span>
                  Deduction optimization
                </li>
                <li className="flex items-start gap-2 text-[14px] text-gray-700">
                  <span className="material-symbols-outlined text-[#10B981] text-[18px] shrink-0">check_circle</span>
                  Business tax strategies
                </li>
              </ul>
              <button className="w-full bg-[#287A7A] text-white py-2.5 rounded text-[15px] font-medium flex items-center justify-center gap-2 hover:bg-[#206060]">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                Request This Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Meet Our Expert Advisors */}
        <div className="mb-12">
          <h2 className="text-[22px] font-bold text-gray-900 mb-6">Meet Our Expert Advisors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Advisor 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center text-2xl font-bold mb-4">
                SJ
              </div>
              <h3 className="text-[18px] font-bold text-gray-900 mb-1">Sarah Johnson</h3>
              <div className="text-[14px] text-gray-600 mb-2">CFP, CPA</div>
              <div className="flex items-center gap-1 text-[14px] mb-4">
                <span className="material-symbols-outlined text-[#F59E0B] text-[18px]">star</span>
                <span className="font-bold text-gray-900">4.9</span>
                <span className="text-gray-500">(127 reviews)</span>
              </div>
              <p className="text-[14px] text-gray-600 mb-6 flex-1">
                Tax Planning & Investment Strategy
              </p>
              <button className="w-full bg-white border border-gray-200 text-gray-700 py-2 rounded text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
                <span className="material-symbols-outlined text-[18px]">person</span>
                Request Sarah
              </button>
            </div>

            {/* Advisor 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center text-2xl font-bold mb-4">
                MC
              </div>
              <h3 className="text-[18px] font-bold text-gray-900 mb-1">Michael Chen</h3>
              <div className="text-[14px] text-gray-600 mb-2">CFA, MBA</div>
              <div className="flex items-center gap-1 text-[14px] mb-4">
                <span className="material-symbols-outlined text-[#F59E0B] text-[18px]">star</span>
                <span className="font-bold text-gray-900">4.8</span>
                <span className="text-gray-500">(98 reviews)</span>
              </div>
              <p className="text-[14px] text-gray-600 mb-6 flex-1">
                Investment Advisory & Retirement Planning
              </p>
              <button className="w-full bg-white border border-gray-200 text-gray-700 py-2 rounded text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
                <span className="material-symbols-outlined text-[18px]">person</span>
                Request Michael
              </button>
            </div>

            {/* Advisor 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center text-2xl font-bold mb-4">
                DR
              </div>
              <h3 className="text-[18px] font-bold text-gray-900 mb-1">David Rodriguez</h3>
              <div className="text-[14px] text-gray-600 mb-2">CFP, Real Estate Expert</div>
              <div className="flex items-center gap-1 text-[14px] mb-4">
                <span className="material-symbols-outlined text-[#F59E0B] text-[18px]">star</span>
                <span className="font-bold text-gray-900">4.9</span>
                <span className="text-gray-500">(156 reviews)</span>
              </div>
              <p className="text-[14px] text-gray-600 mb-6 flex-1">
                Real Estate Investment & Portfolio Management
              </p>
              <button className="w-full bg-white border border-gray-200 text-gray-700 py-2 rounded text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
                <span className="material-symbols-outlined text-[18px]">person</span>
                Request David
              </button>
            </div>
          </div>
        </div>

        {/* Secure Three-Step Consultation Booking */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-[22px] font-bold text-gray-900 mb-1">Secure Three-Step Consultation Booking</h2>
            <div className="flex items-center gap-1.5 text-[14px] text-gray-500">
              <span className="material-symbols-outlined text-[16px]">lock</span>
              Encrypted and secure booking process
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-white border-2 border-[#287A7A] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#287A7A] text-white rounded flex items-center justify-center font-bold">1</div>
                <h3 className="text-[18px] font-bold text-gray-900 leading-tight">Request a Consultation</h3>
              </div>
              <p className="text-[14px] text-gray-600 mb-6">
                Fill out our secure form to request a consultation with our expert advisors.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label className="flex items-center gap-1.5 text-[14px] font-medium text-gray-900 mb-1.5">
                    <span className="material-symbols-outlined text-[18px]">person</span>
                    Full Name
                  </label>
                  <input type="text" placeholder="Enter your full name" className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-[14px] focus:outline-none focus:border-[#287A7A] focus:ring-1 focus:ring-[#287A7A]" />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-[14px] font-medium text-gray-900 mb-1.5">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                    Email Address
                  </label>
                  <input type="email" placeholder="Enter your email" className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-[14px] focus:outline-none focus:border-[#287A7A] focus:ring-1 focus:ring-[#287A7A]" />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-[14px] font-medium text-gray-900 mb-1.5">
                    <span className="material-symbols-outlined text-[18px]">phone</span>
                    Phone Number
                  </label>
                  <input type="tel" placeholder="Enter your phone number" className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-[14px] focus:outline-none focus:border-[#287A7A] focus:ring-1 focus:ring-[#287A7A]" />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-gray-900 mb-1.5">Consultation Type</label>
                  <select className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-[14px] focus:outline-none focus:border-[#287A7A] focus:ring-1 focus:ring-[#287A7A] appearance-none">
                    <option>Select consultation type</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-gray-900 mb-1.5">Financial Goals & Topics</label>
                  <textarea rows={3} placeholder="Describe your financial consultation goals and specific topics you'd like to discuss..." className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-[14px] focus:outline-none focus:border-[#287A7A] focus:ring-1 focus:ring-[#287A7A] resize-none"></textarea>
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-gray-900 mb-1.5">Preferred Time Windows</label>
                  <textarea rows={2} placeholder="Let us know your preferred days and times for the consultation (e.g., weekday mornings, Tuesday/Thursday afternoons)..." className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-[14px] focus:outline-none focus:border-[#287A7A] focus:ring-1 focus:ring-[#287A7A] resize-none"></textarea>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded p-4 flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#287A7A] focus:ring-[#287A7A]" />
                  <span className="text-[14px] font-medium text-gray-900">I'm not a robot</span>
                  <div className="ml-auto flex flex-col items-center">
                    <span className="material-symbols-outlined text-gray-400 text-[24px]">shield</span>
                    <span className="text-[10px] text-gray-500">Click to verify you're human</span>
                  </div>
                </div>
                
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-[#287A7A] focus:ring-[#287A7A]" />
                  <span className="text-[13px] text-gray-600">I consent to secure storage of my information and email verification for consultation booking.</span>
                </label>
                
                <button type="button" className="w-full bg-[#8BB8B8] text-white py-2.5 rounded text-[15px] font-medium mt-2 cursor-not-allowed">
                  Request a Consultation
                </button>
              </form>
            </div>

            {/* Step 2 */}
            <div className="bg-transparent border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center opacity-50">
              <div className="flex items-center gap-3 mb-4 self-start">
                <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded flex items-center justify-center font-bold">2</div>
                <h3 className="text-[18px] font-bold text-gray-500">Payment</h3>
              </div>
              <p className="text-[14px] text-gray-500 mb-8 text-left w-full">
                Once approved, secure payment is required to confirm your consultation.
              </p>
              <div className="flex-1 flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-gray-300 text-[64px] mb-4">attach_money</span>
                <p className="text-[14px] text-gray-500">Complete step 1 to unlock payment</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4 self-start">
                <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded flex items-center justify-center font-bold">3</div>
                <h3 className="text-[18px] font-bold text-gray-900 text-left leading-tight">Schedule Your Session</h3>
              </div>
              <p className="text-[14px] text-gray-600 mb-6 text-left w-full">
                Select your preferred date and time for the consultation.
              </p>
              
              {/* Calendar UI */}
              <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                  <button className="text-gray-500 hover:text-gray-900">
                    <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                  </button>
                  <span className="text-[14px] font-bold text-gray-900">October 2024</span>
                  <button className="text-gray-500 hover:text-gray-900">
                    <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                  </button>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-7 gap-1 text-center mb-2">
                    <div className="text-[12px] font-medium text-gray-500">Su</div>
                    <div className="text-[12px] font-medium text-gray-500">Mo</div>
                    <div className="text-[12px] font-medium text-gray-500">Tu</div>
                    <div className="text-[12px] font-medium text-gray-500">We</div>
                    <div className="text-[12px] font-medium text-gray-500">Th</div>
                    <div className="text-[12px] font-medium text-gray-500">Fr</div>
                    <div className="text-[12px] font-medium text-gray-500">Sa</div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {/* Empty days */}
                    <div className="p-1.5"></div>
                    <div className="p-1.5"></div>
                    {/* Days */}
                    {[...Array(31)].map((_, i) => (
                      <button 
                        key={i} 
                        className={`p-1.5 text-[13px] rounded-full w-8 h-8 flex items-center justify-center mx-auto ${i + 1 === 15 ? 'bg-[#287A7A] text-white font-bold' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Time Slots */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                <button className="border border-gray-200 rounded py-2 text-[13px] font-medium text-gray-700 hover:border-[#287A7A] hover:text-[#287A7A]">09:00 AM</button>
                <button className="border border-gray-200 rounded py-2 text-[13px] font-medium text-gray-700 hover:border-[#287A7A] hover:text-[#287A7A]">10:30 AM</button>
                <button className="border-2 border-[#287A7A] rounded py-2 text-[13px] font-bold text-[#287A7A] bg-[#E6F2F1]">01:00 PM</button>
                <button className="border border-gray-200 rounded py-2 text-[13px] font-medium text-gray-700 hover:border-[#287A7A] hover:text-[#287A7A]">03:30 PM</button>
              </div>

              <button className="w-full bg-[#287A7A] text-white py-2.5 rounded text-[15px] font-medium mt-auto hover:bg-[#206060]">
                Confirm Time
              </button>
            </div>
          </div>
        </div>

        {/* How Our Secure Booking Process Works */}
        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-8">
          <h2 className="text-[22px] font-bold text-gray-900 mb-8">How Our Secure Booking Process Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#10B981] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-[16px] font-bold text-gray-900 mb-2">Submit Request</h3>
              <p className="text-[14px] text-[#166534]">Fill out our secure, encrypted form with your consultation needs and verify your email.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#10B981] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-[16px] font-bold text-gray-900 mb-2">Await Approval</h3>
              <p className="text-[14px] text-[#166534]">Our team reviews your request within 24 hours to ensure the best advisor match.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#10B981] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-[16px] font-bold text-gray-900 mb-2">Schedule Session</h3>
              <p className="text-[14px] text-[#166534]">Once approved, access our calendar to book your preferred time with your matched advisor.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#10B981] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
              <h3 className="text-[16px] font-bold text-gray-900 mb-2">Get Your Plan</h3>
              <p className="text-[14px] text-[#166534]">Attend your virtual consultation and receive a personalized action plan with follow-up resources.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-full lg:w-[320px] shrink-0">
        {/* New Here Widget */}
        <div className="bg-[#287A7A] rounded-lg p-6 text-white mb-8">
          <h3 className="text-[20px] font-bold mb-2">New Here?</h3>
          <p className="text-[15px] text-[#E6F2F1] mb-6">Start with the basics and build your financial confidence.</p>
          <button className="w-full bg-[#3D9494] hover:bg-[#4AA3A3] text-white py-2.5 rounded text-[15px] font-medium flex items-center justify-center gap-2 transition-colors">
            <span className="material-symbols-outlined text-[20px]">lightbulb</span>
            Financial Basics Guide
            <span className="material-symbols-outlined text-[20px] ml-1">arrow_forward</span>
          </button>
        </div>

        {/* Trending Topics */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-[12px] font-bold text-gray-500 tracking-wider uppercase mb-4">
            <span className="material-symbols-outlined text-[18px]">trending_up</span>
            Trending Topics
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between group cursor-pointer">
              <div>
                <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors">Saving Money Tips</div>
                <div className="text-[13px] text-gray-500">Smart ways to save</div>
              </div>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[12px] font-bold">245</span>
            </div>
            <div className="flex items-center justify-between group cursor-pointer">
              <div>
                <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors">Investing for Beginners</div>
                <div className="text-[13px] text-gray-500">Start your investment journey</div>
              </div>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[12px] font-bold">189</span>
            </div>
            <div className="flex items-center justify-between group cursor-pointer">
              <div>
                <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors">Retirement Planning</div>
                <div className="text-[13px] text-gray-500">Plan for your future</div>
              </div>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[12px] font-bold">156</span>
            </div>
            <div className="flex items-center justify-between group cursor-pointer">
              <div>
                <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors">Buying a Home</div>
                <div className="text-[13px] text-gray-500">First-time buyer advice</div>
              </div>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[12px] font-bold">134</span>
            </div>
            <div className="flex items-center justify-between group cursor-pointer">
              <div>
                <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors">Understanding Crypto</div>
                <div className="text-[13px] text-gray-500">Digital money explained</div>
              </div>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[12px] font-bold">98</span>
            </div>
            <div className="flex items-center justify-between group cursor-pointer">
              <div>
                <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors">Small Business Money</div>
                <div className="text-[13px] text-gray-500">Business finance basics</div>
              </div>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[12px] font-bold">87</span>
            </div>
          </div>
        </div>

        {/* Browse by Topic */}
        <div className="mb-8">
          <div className="text-[12px] font-bold text-gray-500 tracking-wider uppercase mb-4">
            Browse by Topic
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3 group cursor-pointer">
              <span className="material-symbols-outlined text-[#287A7A] text-[20px] mt-0.5">calendar_today</span>
              <div>
                <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors">Taxes & Money Management</div>
                <div className="text-[13px] text-gray-500">1,234 discussions</div>
              </div>
            </div>
            <div className="flex items-start gap-3 group cursor-pointer">
              <span className="material-symbols-outlined text-[#287A7A] text-[20px] mt-0.5">trending_up</span>
              <div>
                <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors">Investing & Growing Money</div>
                <div className="text-[13px] text-gray-500">987 discussions</div>
              </div>
            </div>
            <div className="flex items-start gap-3 group cursor-pointer">
              <span className="material-symbols-outlined text-[#287A7A] text-[20px] mt-0.5">attach_money</span>
              <div>
                <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors">Personal Finance Basics</div>
                <div className="text-[13px] text-gray-500">756 discussions</div>
              </div>
            </div>
            <div className="flex items-start gap-3 group cursor-pointer">
              <span className="material-symbols-outlined text-[#287A7A] text-[20px] mt-0.5">lightbulb</span>
              <div>
                <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors">Starting a Business</div>
                <div className="text-[13px] text-gray-500">543 discussions</div>
              </div>
            </div>
            <div className="flex items-start gap-3 group cursor-pointer">
              <span className="material-symbols-outlined text-[#287A7A] text-[20px] mt-0.5">sell</span>
              <div>
                <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors">Buying Property</div>
                <div className="text-[13px] text-gray-500">432 discussions</div>
              </div>
            </div>
            <div className="flex items-start gap-3 group cursor-pointer">
              <span className="material-symbols-outlined text-[#287A7A] text-[20px] mt-0.5">group</span>
              <div>
                <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors">Insurance & Protection</div>
                <div className="text-[13px] text-gray-500">321 discussions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <div className="text-[12px] font-bold text-gray-500 tracking-wider uppercase mb-4">
            Quick Actions
          </div>
          <div className="flex flex-col gap-3">
            <button className="w-full bg-white border border-gray-200 text-gray-700 py-2.5 rounded text-[14px] font-medium flex items-center gap-3 hover:bg-gray-50 px-4">
              <span className="material-symbols-outlined text-[#287A7A] text-[20px]">chat_bubble</span>
              Ask a Money Question
            </button>
            <button className="w-full bg-white border border-gray-200 text-gray-700 py-2.5 rounded text-[14px] font-medium flex items-center gap-3 hover:bg-gray-50 px-4">
              <span className="material-symbols-outlined text-[#287A7A] text-[20px]">person_search</span>
              Find Financial Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
