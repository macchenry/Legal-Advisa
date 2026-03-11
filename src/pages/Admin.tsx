import React from 'react';

export default function Admin() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10 flex flex-col lg:flex-row gap-12">
      {/* Main Content */}
      <div className="flex-1 max-w-[900px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-[32px] font-bold text-gray-900 mb-2 flex items-center gap-3">
              <span className="material-symbols-outlined text-[#287A7A] text-[36px]">shield</span>
              Admin Dashboard
            </h1>
            <p className="text-[17px] text-gray-600">
              Manage consultations, experts, and integrations
            </p>
          </div>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded text-[14px] font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors self-start md:self-auto">
            <span className="material-symbols-outlined text-[18px]">person</span>
            Admin Access
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Stat 1 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-[14px] font-bold text-gray-900">Total Consultations</h3>
              <span className="material-symbols-outlined text-[#287A7A] text-[20px]">calendar_today</span>
            </div>
            <div className="text-[32px] font-bold text-gray-900 mb-2">156</div>
            <div className="text-[13px] text-gray-500">
              <span className="text-[#10B981] font-bold">+12%</span> from last month
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-[14px] font-bold text-gray-900">Active Experts</h3>
              <span className="material-symbols-outlined text-[#10B981] text-[20px]">group</span>
            </div>
            <div className="text-[32px] font-bold text-gray-900 mb-2">23</div>
            <div className="text-[13px] text-gray-500">
              <span className="text-[#10B981] font-bold">+2</span> from last month
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-[14px] font-bold text-gray-900">Completed Sessions</h3>
              <span className="material-symbols-outlined text-[#287A7A] text-[20px]">check_circle</span>
            </div>
            <div className="text-[32px] font-bold text-gray-900 mb-2">134</div>
            <div className="text-[13px] text-gray-500">
              <span className="text-[#10B981] font-bold">+8%</span> from last month
            </div>
          </div>

          {/* Stat 4 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-[14px] font-bold text-gray-900">Pending Requests</h3>
              <span className="material-symbols-outlined text-[#F59E0B] text-[20px]">schedule</span>
            </div>
            <div className="text-[32px] font-bold text-gray-900 mb-2">22</div>
            <div className="text-[13px] text-gray-500">
              <span className="text-[#EF4444] font-bold">-3</span> from last month
            </div>
          </div>

          {/* Stat 5 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-[14px] font-bold text-gray-900">Emails Sent</h3>
              <span className="material-symbols-outlined text-[#8B5CF6] text-[20px]">mail</span>
            </div>
            <div className="text-[32px] font-bold text-gray-900 mb-2">1,247</div>
            <div className="text-[13px] text-gray-500">
              <span className="text-[#10B981] font-bold">+15%</span> from last month
            </div>
          </div>

          {/* Stat 6 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-[14px] font-bold text-gray-900">Meeting Links Created</h3>
              <span className="material-symbols-outlined text-[#3B82F6] text-[20px]">videocam</span>
            </div>
            <div className="text-[32px] font-bold text-gray-900 mb-2">89</div>
            <div className="text-[13px] text-gray-500">
              <span className="text-[#10B981] font-bold">+7%</span> from last month
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
          <button className="px-6 py-3 text-[14px] font-bold text-gray-900 border-b-2 border-gray-900 whitespace-nowrap">
            Consultations
          </button>
          <button className="px-6 py-3 text-[14px] font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap">
            Experts
          </button>
          <button className="px-6 py-3 text-[14px] font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap">
            Email Settings
          </button>
          <button className="px-6 py-3 text-[14px] font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap">
            Meeting Settings
          </button>
        </div>

        {/* Consultation Management Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex items-center gap-3">
            <span className="material-symbols-outlined text-gray-500 text-[24px]">calendar_today</span>
            <h2 className="text-[18px] font-bold text-gray-900">Consultation Management</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-[13px] font-bold text-gray-500 uppercase tracking-wider">
                  <th className="p-4 font-bold">ID</th>
                  <th className="p-4 font-bold">Client</th>
                  <th className="p-4 font-bold">Topic</th>
                  <th className="p-4 font-bold">Expert</th>
                  <th className="p-4 font-bold">Status</th>
                  <th className="p-4 font-bold">Priority</th>
                  <th className="p-4 font-bold">Request Date</th>
                  <th className="p-4 font-bold">Actions</th>
                </tr>
              </thead>
              <tbody className="text-[14px] text-gray-900">
                {/* Row 1 */}
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-bold">CS001</td>
                  <td className="p-4">
                    <div className="font-bold">John Smith</div>
                    <div className="text-[12px] text-gray-500">john@example.com</div>
                  </td>
                  <td className="p-4">Retirement Planning</td>
                  <td className="p-4">Sarah Johnson</td>
                  <td className="p-4">
                    <span className="bg-[#FEF3C7] text-[#D97706] px-2.5 py-1 rounded text-[12px] font-bold">Pending</span>
                  </td>
                  <td className="p-4">
                    <span className="bg-[#FEE2E2] text-[#EF4444] px-2.5 py-1 rounded text-[12px] font-bold">High</span>
                  </td>
                  <td className="p-4">2024-01-15</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100">
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                      </button>
                      <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-[#10B981] hover:bg-green-50">
                        <span className="material-symbols-outlined text-[18px]">check_circle</span>
                      </button>
                      <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-[#EF4444] hover:bg-red-50">
                        <span className="material-symbols-outlined text-[18px]">close</span>
                      </button>
                      <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100">
                        <span className="material-symbols-outlined text-[18px]">mail</span>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-bold">CS002</td>
                  <td className="p-4">
                    <div className="font-bold">Emma Davis</div>
                    <div className="text-[12px] text-gray-500">emma@example.com</div>
                  </td>
                  <td className="p-4">Investment Strategy</td>
                  <td className="p-4">Michael Chen</td>
                  <td className="p-4">
                    <span className="bg-[#D1FAE5] text-[#10B981] px-2.5 py-1 rounded text-[12px] font-bold">Approved</span>
                  </td>
                  <td className="p-4">
                    <span className="bg-[#FEF3C7] text-[#D97706] px-2.5 py-1 rounded text-[12px] font-bold">Medium</span>
                  </td>
                  <td className="p-4">2024-01-14</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100">
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                      </button>
                      <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100">
                        <span className="material-symbols-outlined text-[18px]">mail</span>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold">CS003</td>
                  <td className="p-4">
                    <div className="font-bold">Robert Wilson</div>
                    <div className="text-[12px] text-gray-500">robert@example.com</div>
                  </td>
                  <td className="p-4">Tax Planning</td>
                  <td className="p-4">Lisa Rodriguez</td>
                  <td className="p-4">
                    <span className="bg-[#DBEAFE] text-[#3B82F6] px-2.5 py-1 rounded text-[12px] font-bold">Completed</span>
                  </td>
                  <td className="p-4">
                    <span className="bg-[#D1FAE5] text-[#10B981] px-2.5 py-1 rounded text-[12px] font-bold">Low</span>
                  </td>
                  <td className="p-4">2024-01-10</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100">
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                      </button>
                      <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100">
                        <span className="material-symbols-outlined text-[18px]">mail</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Scrollbar indicator (visual only) */}
          <div className="px-6 py-4 border-t border-gray-200 flex items-center gap-2">
            <span className="material-symbols-outlined text-gray-400 text-[16px]">arrow_left</span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-gray-400 rounded-full"></div>
            </div>
            <span className="material-symbols-outlined text-gray-400 text-[16px]">arrow_right</span>
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
