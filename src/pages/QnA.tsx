import React from 'react';

export default function QnA() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-[32px] font-bold text-gray-900 mb-2">Financial Q&A</h1>
          <p className="text-[17px] text-gray-600">
            Get answers from verified financial experts
          </p>
        </div>
        <button className="bg-[#287A7A] text-white px-5 py-2.5 rounded text-[15px] font-medium flex items-center gap-2 hover:bg-[#206060] transition-colors self-start md:self-auto">
          <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
          Ask a Question
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">search</span>
          <input 
            type="text" 
            placeholder="Search questions..." 
            className="w-full bg-[#F8F9FA] border border-gray-200 rounded-md py-3 pl-12 pr-4 text-[15px] focus:outline-none focus:border-[#287A7A] focus:ring-1 focus:ring-[#287A7A]"
          />
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <select className="appearance-none bg-[#F8F9FA] border border-gray-200 rounded-md py-3 pl-10 pr-10 text-[15px] text-gray-700 font-medium focus:outline-none focus:border-[#287A7A] focus:ring-1 focus:ring-[#287A7A] w-full md:w-[180px]">
              <option>Trending</option>
              <option>Newest</option>
              <option>Unanswered</option>
            </select>
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-[20px]">trending_up</span>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-[20px]">expand_more</span>
          </div>
          <div className="relative">
            <select className="appearance-none bg-[#F8F9FA] border border-gray-200 rounded-md py-3 pl-4 pr-10 text-[15px] text-gray-700 font-medium focus:outline-none focus:border-[#287A7A] focus:ring-1 focus:ring-[#287A7A] w-full md:w-[180px]">
              <option>All Questions</option>
              <option>My Questions</option>
              <option>Answered</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-[20px]">expand_more</span>
          </div>
        </div>
      </div>

      {/* Popular Topics */}
      <div className="mb-10">
        <h3 className="text-[16px] font-bold text-gray-900 mb-4">Popular Topics</h3>
        <div className="flex flex-wrap gap-2">
          <button className="bg-[#287A7A] text-white px-4 py-1.5 rounded text-[13px] font-medium">All Topics</button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded text-[13px] font-medium hover:bg-gray-50">Tax Planning</button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded text-[13px] font-medium hover:bg-gray-50">Investment Strategy</button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded text-[13px] font-medium hover:bg-gray-50">Retirement Planning</button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded text-[13px] font-medium hover:bg-gray-50">Real Estate</button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded text-[13px] font-medium hover:bg-gray-50">Cryptocurrency</button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded text-[13px] font-medium hover:bg-gray-50">Business Finance</button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded text-[13px] font-medium hover:bg-gray-50">Personal Finance</button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded text-[13px] font-medium hover:bg-gray-50">Insurance</button>
        </div>
      </div>

      <div className="text-[15px] text-gray-500 mb-6">Showing 5 questions</div>

      {/* Questions List */}
      <div className="flex flex-col gap-6">
        {/* Question 1 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex gap-6">
          <div className="flex flex-col items-center gap-1 shrink-0">
            <button className="text-gray-400 hover:text-gray-900">
              <span className="material-symbols-outlined text-[24px]">arrow_upward</span>
            </button>
            <span className="text-[16px] font-bold text-gray-900">15</span>
          </div>
          <div className="flex-1">
            <h2 className="text-[20px] font-bold text-gray-900 mb-2">Should I convert my traditional IRA to a Roth IRA in 2024?</h2>
            <p className="text-[15px] text-gray-600 mb-4">
              I'm 35 years old, currently in the 22% tax bracket, and have $50,000 in a traditional IRA. With potential tax changes coming, I'm wondering if now is a good time to convert to a Roth IRA.
            </p>
            <div className="flex gap-2 mb-6">
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Retirement Planning</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">IRA</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Tax Strategy</span>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 bg-[#E6F2F1] text-[#287A7A] px-3 py-1.5 rounded text-[13px] font-medium">
                  <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
                  3 answers
                  <span className="material-symbols-outlined text-[16px] ml-0.5">check_circle</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-500">
                  <span className="material-symbols-outlined text-[18px]">visibility</span>
                  <span className="text-[13px] font-medium">89</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-gray-200 text-gray-600 flex items-center justify-center text-[10px] font-bold">
                  JS
                </div>
                <span className="text-[13px] font-bold text-gray-900">Jennifer Smith</span>
                <span className="text-[13px] text-gray-500">· 3 hours ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex gap-6">
          <div className="flex flex-col items-center gap-1 shrink-0">
            <button className="text-gray-400 hover:text-gray-900">
              <span className="material-symbols-outlined text-[24px]">arrow_upward</span>
            </button>
            <span className="text-[16px] font-bold text-gray-900">23</span>
          </div>
          <div className="flex-1">
            <h2 className="text-[20px] font-bold text-gray-900 mb-2">How do I calculate the ROI on rental property investments?</h2>
            <p className="text-[15px] text-gray-600 mb-4">
              I'm looking at purchasing my first rental property and want to understand all the factors that go into calculating a proper return on investment. What expenses should I consider?
            </p>
            <div className="flex gap-2 mb-6">
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Real Estate</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">ROI</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Investment Analysis</span>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 bg-[#E6F2F1] text-[#287A7A] px-3 py-1.5 rounded text-[13px] font-medium">
                  <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
                  5 answers
                  <span className="material-symbols-outlined text-[16px] ml-0.5">check_circle</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-500">
                  <span className="material-symbols-outlined text-[18px]">visibility</span>
                  <span className="text-[13px] font-medium">156</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-gray-200 text-gray-600 flex items-center justify-center text-[10px] font-bold">
                  MT
                </div>
                <span className="text-[13px] font-bold text-gray-900">Mark Thompson</span>
                <span className="text-[13px] text-gray-500">· 6 hours ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex gap-6">
          <div className="flex flex-col items-center gap-1 shrink-0">
            <button className="text-gray-400 hover:text-gray-900">
              <span className="material-symbols-outlined text-[24px]">arrow_upward</span>
            </button>
            <span className="text-[16px] font-bold text-gray-900">18</span>
          </div>
          <div className="flex-1">
            <h2 className="text-[20px] font-bold text-gray-900 mb-2">What are the tax implications of cryptocurrency trading?</h2>
            <p className="text-[15px] text-gray-600 mb-4">
              I've been trading various cryptocurrencies and want to make sure I'm properly reporting everything for tax purposes. Do I need to track every single transaction?
            </p>
            <div className="flex gap-2 mb-6">
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Cryptocurrency</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Tax Planning</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Trading</span>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 bg-gray-100 text-gray-600 px-3 py-1.5 rounded text-[13px] font-medium">
                  <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
                  2 answers
                </div>
                <div className="flex items-center gap-1.5 text-gray-500">
                  <span className="material-symbols-outlined text-[18px]">visibility</span>
                  <span className="text-[13px] font-medium">234</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-gray-200 text-gray-600 flex items-center justify-center text-[10px] font-bold">
                  AJ
                </div>
                <span className="text-[13px] font-bold text-gray-900">Alex Johnson</span>
                <span className="text-[13px] text-gray-500">· 1 day ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex gap-6">
          <div className="flex flex-col items-center gap-1 shrink-0">
            <button className="text-gray-400 hover:text-gray-900">
              <span className="material-symbols-outlined text-[24px]">arrow_upward</span>
            </button>
            <span className="text-[16px] font-bold text-gray-900">42</span>
          </div>
          <div className="flex-1">
            <h2 className="text-[20px] font-bold text-gray-900 mb-2">Is it worth getting a financial advisor for a $100k portfolio?</h2>
            <p className="text-[15px] text-gray-600 mb-4">
              I've managed to save $100,000 and I'm not sure if I should continue managing my investments myself or hire a financial advisor. What are the pros and cons?
            </p>
            <div className="flex gap-2 mb-6">
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Financial Planning</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Investment Management</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Financial Advisor</span>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 bg-[#E6F2F1] text-[#287A7A] px-3 py-1.5 rounded text-[13px] font-medium">
                  <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
                  7 answers
                  <span className="material-symbols-outlined text-[16px] ml-0.5">check_circle</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-500">
                  <span className="material-symbols-outlined text-[18px]">visibility</span>
                  <span className="text-[13px] font-medium">312</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-gray-200 text-gray-600 flex items-center justify-center text-[10px] font-bold">
                  LC
                </div>
                <span className="text-[13px] font-bold text-gray-900">Lisa Chen</span>
                <span className="text-[13px] text-gray-500">· 2 days ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Question 5 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex gap-6">
          <div className="flex flex-col items-center gap-1 shrink-0">
            <button className="text-gray-400 hover:text-gray-900">
              <span className="material-symbols-outlined text-[24px]">arrow_upward</span>
            </button>
            <span className="text-[16px] font-bold text-gray-900">31</span>
          </div>
          <div className="flex-1">
            <h2 className="text-[20px] font-bold text-gray-900 mb-2">How to structure a small business for tax efficiency?</h2>
            <p className="text-[15px] text-gray-600 mb-4">
              I'm starting a consulting business and want to make sure I choose the right business structure (LLC, S-Corp, etc.) for tax purposes. What factors should I consider?
            </p>
            <div className="flex gap-2 mb-6">
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Business Structure</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Tax Strategy</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Small Business</span>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 bg-[#E6F2F1] text-[#287A7A] px-3 py-1.5 rounded text-[13px] font-medium">
                  <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
                  4 answers
                  <span className="material-symbols-outlined text-[16px] ml-0.5">check_circle</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-500">
                  <span className="material-symbols-outlined text-[18px]">visibility</span>
                  <span className="text-[13px] font-medium">198</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-gray-200 text-gray-600 flex items-center justify-center text-[10px] font-bold">
                  DP
                </div>
                <span className="text-[13px] font-bold text-gray-900">David Park</span>
                <span className="text-[13px] text-gray-500">· 3 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Load More */}
      <div className="mt-10 flex justify-center">
        <button className="bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded text-[14px] font-medium hover:bg-gray-50">
          Load More Questions
        </button>
      </div>
    </div>
  );
}
