import React from 'react';

export default function Experts() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-[32px] font-bold text-gray-900 mb-2">Financial Experts</h1>
        <p className="text-[17px] text-gray-600">
          Connect with verified financial professionals for expert advice and insights
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">search</span>
          <input 
            type="text" 
            placeholder="Search experts by name, specialty, or location..." 
            className="w-full bg-[#F8F9FA] border border-gray-200 rounded-md py-3 pl-12 pr-4 text-[15px] focus:outline-none focus:border-[#287A7A] focus:ring-1 focus:ring-[#287A7A]"
          />
        </div>
        <button className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-md text-[15px] font-medium flex items-center justify-center gap-2 hover:bg-gray-50 shrink-0">
          <span className="material-symbols-outlined text-[20px]">filter_list</span>
          Filters
        </button>
      </div>

      <div className="text-[15px] text-gray-500 mb-6">Showing 6 verified experts</div>

      {/* Experts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Expert 1 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
          <div className="flex gap-4 mb-4">
            <div className="w-14 h-14 rounded bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center text-xl font-bold shrink-0">
              SJ
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h2 className="text-[18px] font-bold text-gray-900">Sarah Johnson</h2>
                <span className="material-symbols-outlined text-[#10B981] text-[18px]">verified</span>
              </div>
              <div className="text-[14px] text-gray-600 mb-1">CPA, CFA</div>
              <div className="text-[13px] text-gray-500">Senior Tax Strategist</div>
              <div className="text-[13px] text-gray-500">Johnson & Associates</div>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 text-gray-500 text-[13px] mb-4">
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            New York, NY
          </div>
          
          <p className="text-[14px] text-gray-600 mb-4 flex-1">
            Specializing in tax planning and investment strategies for high-net-worth individuals and small businesses.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Tax Planning</span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Investment Strategy</span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Business Finance</span>
          </div>
          
          <div className="flex justify-between border-t border-b border-gray-100 py-4 mb-6">
            <div className="text-center">
              <div className="text-[18px] font-bold text-gray-900">87</div>
              <div className="text-[12px] text-gray-500">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-[18px] font-bold text-gray-900">234</div>
              <div className="text-[12px] text-gray-500">Answers</div>
            </div>
            <div className="text-center">
              <div className="text-[18px] font-bold text-gray-900">2543</div>
              <div className="text-[12px] text-gray-500">Followers</div>
            </div>
          </div>
          
          <div className="flex gap-3 mb-3">
            <button className="flex-1 bg-[#287A7A] text-white py-2 rounded text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-[#206060]">
              <span className="material-symbols-outlined text-[18px]">person_add</span>
              Follow
            </button>
            <button className="flex-1 bg-white border border-gray-200 text-gray-700 py-2 rounded text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
              <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
              Ask
            </button>
          </div>
          <button className="w-full bg-[#F8F9FA] border border-gray-200 text-gray-700 py-2 rounded text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-gray-100">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            Request & Schedule a Consultation
          </button>
        </div>

        {/* Expert 2 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
          <div className="flex gap-4 mb-4">
            <div className="w-14 h-14 rounded bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center text-xl font-bold shrink-0">
              MC
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h2 className="text-[18px] font-bold text-gray-900">Michael Chen</h2>
                <span className="material-symbols-outlined text-[#10B981] text-[18px]">verified</span>
              </div>
              <div className="text-[14px] text-gray-600 mb-1">CFP, MBA</div>
              <div className="text-[13px] text-gray-500">Wealth Management Advisor</div>
              <div className="text-[13px] text-gray-500">Chen Financial Group</div>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 text-gray-500 text-[13px] mb-4">
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            San Francisco, CA
          </div>
          
          <p className="text-[14px] text-gray-600 mb-4 flex-1">
            Helping families build and preserve wealth through comprehensive financial planning and investment management.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Wealth Management</span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Retirement Planning</span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Estate Planning</span>
          </div>
          
          <div className="flex justify-between border-t border-b border-gray-100 py-4 mb-6">
            <div className="text-center">
              <div className="text-[18px] font-bold text-gray-900">65</div>
              <div className="text-[12px] text-gray-500">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-[18px] font-bold text-gray-900">189</div>
              <div className="text-[12px] text-gray-500">Answers</div>
            </div>
            <div className="text-center">
              <div className="text-[18px] font-bold text-gray-900">1876</div>
              <div className="text-[12px] text-gray-500">Followers</div>
            </div>
          </div>
          
          <div className="flex gap-3 mb-3">
            <button className="flex-1 bg-[#287A7A] text-white py-2 rounded text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-[#206060]">
              <span className="material-symbols-outlined text-[18px]">person_add</span>
              Follow
            </button>
            <button className="flex-1 bg-white border border-gray-200 text-gray-700 py-2 rounded text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
              <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
              Ask
            </button>
          </div>
          <button className="w-full bg-[#F8F9FA] border border-gray-200 text-gray-700 py-2 rounded text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-gray-100">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            Request & Schedule a Consultation
          </button>
        </div>

        {/* Expert 3 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
          <div className="flex gap-4 mb-4">
            <div className="w-14 h-14 rounded bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center text-xl font-bold shrink-0">
              DR
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h2 className="text-[18px] font-bold text-gray-900">David Rodriguez</h2>
                <span className="material-symbols-outlined text-[#10B981] text-[18px]">verified</span>
              </div>
              <div className="text-[14px] text-gray-600 mb-1">CFA, Real Estate License</div>
              <div className="text-[13px] text-gray-500">Real Estate Investment Specialist</div>
              <div className="text-[13px] text-gray-500">Rodriguez Capital</div>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 text-gray-500 text-[13px] mb-4">
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            Miami, FL
          </div>
          
          <p className="text-[14px] text-gray-600 mb-4 flex-1">
            Expert in real estate investment analysis and portfolio optimization with 15+ years of experience.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Real Estate</span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">REITs</span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Investment Analysis</span>
          </div>
          
          <div className="flex justify-between border-t border-b border-gray-100 py-4 mb-6">
            <div className="text-center">
              <div className="text-[18px] font-bold text-gray-900">92</div>
              <div className="text-[12px] text-gray-500">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-[18px] font-bold text-gray-900">156</div>
              <div className="text-[12px] text-gray-500">Answers</div>
            </div>
            <div className="text-center">
              <div className="text-[18px] font-bold text-gray-900">3201</div>
              <div className="text-[12px] text-gray-500">Followers</div>
            </div>
          </div>
          
          <div className="flex gap-3 mb-3">
            <button className="flex-1 bg-[#287A7A] text-white py-2 rounded text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-[#206060]">
              <span className="material-symbols-outlined text-[18px]">person_add</span>
              Follow
            </button>
            <button className="flex-1 bg-white border border-gray-200 text-gray-700 py-2 rounded text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
              <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
              Ask
            </button>
          </div>
          <button className="w-full bg-[#F8F9FA] border border-gray-200 text-gray-700 py-2 rounded text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-gray-100">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            Request & Schedule a Consultation
          </button>
        </div>

        {/* Expert 4 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
          <div className="flex gap-4 mb-4">
            <div className="w-14 h-14 rounded bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center text-xl font-bold shrink-0">
              EW
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h2 className="text-[18px] font-bold text-gray-900">Emily Watson</h2>
                <span className="material-symbols-outlined text-[#10B981] text-[18px]">verified</span>
              </div>
              <div className="text-[14px] text-gray-600 mb-1">CPA, Crypto Specialist</div>
              <div className="text-[13px] text-gray-500">Digital Asset Tax Advisor</div>
              <div className="text-[13px] text-gray-500">CryptoTax Solutions</div>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 text-gray-500 text-[13px] mb-4">
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            Austin, TX
          </div>
          
          <p className="text-[14px] text-gray-600 mb-4 flex-1">
            Leading expert in cryptocurrency taxation and compliance for individuals and businesses.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Cryptocurrency</span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Tax Compliance</span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Digital Assets</span>
          </div>
          
          <div className="flex justify-between border-t border-b border-gray-100 py-4 mb-6">
            <div className="text-center">
              <div className="text-[18px] font-bold text-gray-900">78</div>
              <div className="text-[12px] text-gray-500">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-[18px] font-bold text-gray-900">203</div>
              <div className="text-[12px] text-gray-500">Answers</div>
            </div>
            <div className="text-center">
              <div className="text-[18px] font-bold text-gray-900">1432</div>
              <div className="text-[12px] text-gray-500">Followers</div>
            </div>
          </div>
          
          <div className="flex gap-3 mb-3">
            <button className="flex-1 bg-[#287A7A] text-white py-2 rounded text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-[#206060]">
              <span className="material-symbols-outlined text-[18px]">person_add</span>
              Follow
            </button>
            <button className="flex-1 bg-white border border-gray-200 text-gray-700 py-2 rounded text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
              <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
              Ask
            </button>
          </div>
          <button className="w-full bg-[#F8F9FA] border border-gray-200 text-gray-700 py-2 rounded text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-gray-100">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            Request & Schedule a Consultation
          </button>
        </div>

        {/* Expert 5 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
          <div className="flex gap-4 mb-4">
            <div className="w-14 h-14 rounded bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center text-xl font-bold shrink-0">
              RK
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h2 className="text-[18px] font-bold text-gray-900">Robert Kim</h2>
                <span className="material-symbols-outlined text-[#10B981] text-[18px]">verified</span>
              </div>
              <div className="text-[14px] text-gray-600 mb-1">MBA, CPA</div>
              <div className="text-[13px] text-gray-500">Small Business Financial Consultant</div>
              <div className="text-[13px] text-gray-500">Kim Business Advisory</div>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 text-gray-500 text-[13px] mb-4">
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            Chicago, IL
          </div>
          
          <p className="text-[14px] text-gray-600 mb-4 flex-1">
            Dedicated to helping small businesses achieve financial success through strategic planning and optimization.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Small Business</span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Financial Planning</span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Business Strategy</span>
          </div>
          
          <div className="flex justify-between border-t border-b border-gray-100 py-4 mb-6">
            <div className="text-center">
              <div className="text-[18px] font-bold text-gray-900">54</div>
              <div className="text-[12px] text-gray-500">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-[18px] font-bold text-gray-900">167</div>
              <div className="text-[12px] text-gray-500">Answers</div>
            </div>
            <div className="text-center">
              <div className="text-[18px] font-bold text-gray-900">987</div>
              <div className="text-[12px] text-gray-500">Followers</div>
            </div>
          </div>
          
          <div className="flex gap-3 mb-3">
            <button className="flex-1 bg-[#287A7A] text-white py-2 rounded text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-[#206060]">
              <span className="material-symbols-outlined text-[18px]">person_add</span>
              Follow
            </button>
            <button className="flex-1 bg-white border border-gray-200 text-gray-700 py-2 rounded text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
              <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
              Ask
            </button>
          </div>
          <button className="w-full bg-[#F8F9FA] border border-gray-200 text-gray-700 py-2 rounded text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-gray-100">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            Request & Schedule a Consultation
          </button>
        </div>

        {/* Expert 6 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
          <div className="flex gap-4 mb-4">
            <div className="w-14 h-14 rounded bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center text-xl font-bold shrink-0">
              LC
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h2 className="text-[18px] font-bold text-gray-900">Lisa Chen</h2>
                <span className="material-symbols-outlined text-[#10B981] text-[18px]">verified</span>
              </div>
              <div className="text-[14px] text-gray-600 mb-1">CFP, ChFC</div>
              <div className="text-[13px] text-gray-500">Insurance and Risk Management Specialist</div>
              <div className="text-[13px] text-gray-500">SecureLife Financial</div>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 text-gray-500 text-[13px] mb-4">
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            Seattle, WA
          </div>
          
          <p className="text-[14px] text-gray-600 mb-4 flex-1">
            Specializing in comprehensive insurance strategies and risk management for individuals and families.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Insurance</span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Risk Management</span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Financial Protection</span>
          </div>
          
          <div className="flex justify-between border-t border-b border-gray-100 py-4 mb-6">
            <div className="text-center">
              <div className="text-[18px] font-bold text-gray-900">43</div>
              <div className="text-[12px] text-gray-500">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-[18px] font-bold text-gray-900">145</div>
              <div className="text-[12px] text-gray-500">Answers</div>
            </div>
            <div className="text-center">
              <div className="text-[18px] font-bold text-gray-900">1654</div>
              <div className="text-[12px] text-gray-500">Followers</div>
            </div>
          </div>
          
          <div className="flex gap-3 mb-3">
            <button className="flex-1 bg-[#287A7A] text-white py-2 rounded text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-[#206060]">
              <span className="material-symbols-outlined text-[18px]">person_add</span>
              Follow
            </button>
            <button className="flex-1 bg-white border border-gray-200 text-gray-700 py-2 rounded text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
              <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
              Ask
            </button>
          </div>
          <button className="w-full bg-[#F8F9FA] border border-gray-200 text-gray-700 py-2 rounded text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-gray-100">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            Request & Schedule a Consultation
          </button>
        </div>
      </div>

      {/* Load More */}
      <div className="mt-10 flex justify-center">
        <button className="bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded text-[14px] font-medium hover:bg-gray-50">
          Load More Experts
        </button>
      </div>
    </div>
  );
}
