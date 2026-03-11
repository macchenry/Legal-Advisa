import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10 flex flex-col lg:flex-row gap-12">
      {/* Left Column */}
      <div className="flex-1 max-w-[900px]">
          {/* Welcome Section */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-1.5 bg-[#E6F2F1] text-[#287A7A] px-3 py-1 rounded-full text-[13px] font-medium mb-5">
              <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
              Welcome back
            </div>
            <h2 className="text-[40px] font-bold text-gray-900 mb-4 tracking-tight leading-tight">Welcome to FinancialAdvisa</h2>
            <p className="text-[18px] text-gray-600 max-w-3xl leading-relaxed">
              Get clear, jargon-free answers from verified financial experts. Whether you're saving, investing, or planning — we've got you covered.
            </p>
          </div>

          {/* Banner */}
          <div className="bg-[#E6F2F1] rounded-sm p-8 mb-10 flex items-start gap-6 relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-48 bg-[#D1E8E6] opacity-50"></div>
            <div className="bg-[#287A7A] text-white w-14 h-14 rounded flex items-center justify-center shrink-0 z-10">
              <span className="material-symbols-outlined text-[28px]">help_outline</span>
            </div>
            <div className="z-10">
              <h3 className="text-[22px] font-bold text-gray-900 mb-2">New to personal finance?</h3>
              <p className="text-gray-700 text-[16px] mb-6 max-w-2xl">
                Our community of verified experts helps you understand budgeting, investing, and everything in between — all in plain English.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-[#287A7A] text-white px-5 py-2.5 rounded text-[15px] font-medium flex items-center gap-2 hover:bg-[#206060] transition-colors">
                  Ask Your First Question
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <button className="bg-white text-[#287A7A] border border-gray-200 px-5 py-2.5 rounded text-[15px] font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">group</span>
                  Meet Our Experts
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-10">
            <button className="flex-1 flex items-center justify-center gap-2 py-4 border-b-2 border-[#287A7A] text-[#287A7A] font-medium text-[15px]">
              <span className="material-symbols-outlined text-[20px]">trending_up</span>
              What's Hot
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-4 text-gray-500 hover:text-gray-700 font-medium text-[15px]">
              <span className="material-symbols-outlined text-[20px]">schedule</span>
              Latest Posts
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-4 text-gray-500 hover:text-gray-700 font-medium text-[15px]">
              <span className="material-symbols-outlined text-[20px]">group</span>
              My Feed
            </button>
          </div>

          {/* Easy-to-Read Articles */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-[#E6F2F1] text-[#287A7A] w-10 h-10 rounded flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">menu_book</span>
                </div>
                <div>
                  <h3 className="text-[22px] font-bold text-gray-900 leading-tight">Easy-to-Read Articles</h3>
                  <p className="text-[15px] text-gray-500">Financial advice that actually makes sense</p>
                </div>
              </div>
              <Link to="/easy-reads" className="text-[#287A7A] text-[15px] font-medium flex items-center gap-1 hover:underline">
                View All
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>

            <div className="space-y-4">
              {/* Article 1 */}
              <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
                <div className="h-[280px] bg-[#E5E5E5] relative flex items-center justify-center text-gray-400">
                  <span className="text-sm">Tax Changes for 2024: What This Means for Your Money</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center text-[13px] font-bold">
                      SJ
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-[15px] font-bold text-gray-900">Sarah Johnson</span>
                        <span className="material-symbols-outlined text-[16px] text-[#287A7A]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                      </div>
                      <div className="text-[13px] text-gray-500">Tax Expert • 2 hours ago</div>
                    </div>
                  </div>
                  <h4 className="text-[22px] font-bold text-gray-900 mb-3">Tax Changes for 2024: What This Means for Your Money</h4>
                  <p className="text-gray-600 text-[15px] mb-5 leading-relaxed">
                    Simple explanations of the new tax rules and how they might affect your paycheck, refund, and savings. No complicated jargon - just the facts you need to know.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-[#F3F4F6] text-gray-700 px-3 py-1.5 rounded-sm text-[13px] font-medium">Taxes Made Simple</span>
                    <span className="bg-[#F3F4F6] text-gray-700 px-3 py-1.5 rounded-sm text-[13px] font-medium">Your Money</span>
                    <span className="bg-[#F3F4F6] text-gray-700 px-3 py-1.5 rounded-sm text-[13px] font-medium">Government Changes</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-500 border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 hover:text-gray-700">
                        <span className="material-symbols-outlined text-[20px]">favorite_border</span>
                        <span className="text-[14px]">124</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-gray-700">
                        <span className="material-symbols-outlined text-[20px]">chat_bubble_outline</span>
                        <span className="text-[14px]">18</span>
                      </button>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">schedule</span>
                        <span className="text-[14px]">5 min</span>
                      </div>
                    </div>
                    <button className="hover:text-gray-700">
                      <span className="material-symbols-outlined text-[22px]">bookmark_border</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Article 2 */}
              <div className="bg-white border border-gray-200 rounded-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center text-[13px] font-bold">
                    MC
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-[15px] font-bold text-gray-900">Michael Chen</span>
                      <span className="material-symbols-outlined text-[16px] text-[#287A7A]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    </div>
                    <div className="text-[13px] text-gray-500">Investment Advisor • 5 hours ago</div>
                  </div>
                </div>
                <h4 className="text-[22px] font-bold text-gray-900 mb-3">Should You Invest When Interest Rates Go Up?</h4>
                <p className="text-gray-600 text-[15px] mb-5 leading-relaxed">
                  When banks start paying more interest, should you change how you invest your money? Here's what rising rates mean for your savings and investments in plain English.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-[#F3F4F6] text-gray-700 px-3 py-1.5 rounded-sm text-[13px] font-medium">Investing Basics</span>
                  <span className="bg-[#F3F4F6] text-gray-700 px-3 py-1.5 rounded-sm text-[13px] font-medium">Interest Rates</span>
                  <span className="bg-[#F3F4F6] text-gray-700 px-3 py-1.5 rounded-sm text-[13px] font-medium">Your Savings</span>
                </div>
                <div className="flex items-center justify-between text-gray-500 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 hover:text-gray-700">
                      <span className="material-symbols-outlined text-[20px]">favorite_border</span>
                      <span className="text-[14px]">89</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-gray-700">
                      <span className="material-symbols-outlined text-[20px]">chat_bubble_outline</span>
                      <span className="text-[14px]">12</span>
                    </button>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px]">schedule</span>
                      <span className="text-[14px]">7 min</span>
                    </div>
                  </div>
                  <button className="hover:text-gray-700">
                    <span className="material-symbols-outlined text-[22px]">bookmark_border</span>
                  </button>
                </div>
              </div>

              {/* Article 3 */}
              <div className="bg-white border border-gray-200 rounded-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center text-[13px] font-bold">
                    DR
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-[15px] font-bold text-gray-900">David Rodriguez</span>
                      <span className="material-symbols-outlined text-[16px] text-[#287A7A]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    </div>
                    <div className="text-[13px] text-gray-500">Real Estate Expert • 1 day ago</div>
                  </div>
                </div>
                <h4 className="text-[22px] font-bold text-gray-900 mb-3">Real Estate Investing: A Complete Beginner's Guide</h4>
                <p className="text-gray-600 text-[15px] mb-5 leading-relaxed">
                  Thinking about investing in real estate but don't know where to start? This guide breaks down everything from REITs to rental properties in simple terms.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-[#F3F4F6] text-gray-700 px-3 py-1.5 rounded-sm text-[13px] font-medium">Real Estate</span>
                  <span className="bg-[#F3F4F6] text-gray-700 px-3 py-1.5 rounded-sm text-[13px] font-medium">Beginner Investing</span>
                  <span className="bg-[#F3F4F6] text-gray-700 px-3 py-1.5 rounded-sm text-[13px] font-medium">Property</span>
                </div>
                <div className="flex items-center justify-between text-gray-500 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 hover:text-gray-700">
                      <span className="material-symbols-outlined text-[20px]">favorite_border</span>
                      <span className="text-[14px]">156</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-gray-700">
                      <span className="material-symbols-outlined text-[20px]">chat_bubble_outline</span>
                      <span className="text-[14px]">24</span>
                    </button>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px]">schedule</span>
                      <span className="text-[14px]">10 min</span>
                    </div>
                  </div>
                  <button className="hover:text-gray-700">
                    <span className="material-symbols-outlined text-[22px]">bookmark_border</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Community Questions */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-[#E6F2F1] text-[#287A7A] w-10 h-10 rounded flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">help_outline</span>
                </div>
                <div>
                  <h3 className="text-[22px] font-bold text-gray-900 leading-tight">Community Questions</h3>
                  <p className="text-[15px] text-gray-500">Real questions, expert answers</p>
                </div>
              </div>
              <Link to="/qna" className="text-[#287A7A] text-[15px] font-medium flex items-center gap-1 hover:underline">
                View All
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>

            <div className="space-y-4">
              {/* Question 1 */}
              <div className="bg-white border border-gray-200 rounded-sm p-6 flex gap-6">
                <div className="flex flex-col items-center gap-1 shrink-0 mt-1">
                  <button className="text-gray-400 hover:text-gray-600">
                    <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
                  </button>
                  <span className="font-bold text-gray-900 text-[15px]">15</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-[18px] font-bold text-gray-900 mb-2">Should I switch my retirement account from traditional to Roth?</h4>
                  <p className="text-gray-600 text-[15px] mb-5 leading-relaxed">
                    I'm 35, make about $65,000 a year, and have $50,000 in a traditional IRA. I keep hearing about Roth IRAs. Should I convert mine? What are the pros and cons?
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="border border-gray-200 text-gray-700 px-3 py-1.5 rounded-sm text-[13px] font-medium">Retirement Planning</span>
                    <span className="border border-gray-200 text-gray-700 px-3 py-1.5 rounded-sm text-[13px] font-medium">IRA Questions</span>
                    <span className="border border-gray-200 text-gray-700 px-3 py-1.5 rounded-sm text-[13px] font-medium">Tax Strategy</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 bg-[#E6F2F1] text-[#287A7A] px-3 py-1.5 rounded-sm text-[13px] font-medium">
                        <span className="material-symbols-outlined text-[16px]">chat_bubble_outline</span>
                        3 answers
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500 text-[13px]">
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                        89
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-gray-500">
                      <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-[11px] font-bold text-gray-600">JS</div>
                      <span className="font-medium text-gray-900">Jennifer Smith</span>
                      <span>• 3 hours ago</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="bg-white border border-gray-200 rounded-sm p-6 flex gap-6">
                <div className="flex flex-col items-center gap-1 shrink-0 mt-1">
                  <button className="text-gray-400 hover:text-gray-600">
                    <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
                  </button>
                  <span className="font-bold text-gray-900 text-[15px]">23</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-[18px] font-bold text-gray-900 mb-2">How do I know if a rental property is a good investment?</h4>
                  <p className="text-gray-600 text-[15px] mb-5 leading-relaxed">
                    I'm looking at buying my first rental property. What numbers should I look at to make sure it's actually going to make money? What expenses am I forgetting about?
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="border border-gray-200 text-gray-700 px-3 py-1.5 rounded-sm text-[13px] font-medium">Real Estate</span>
                    <span className="border border-gray-200 text-gray-700 px-3 py-1.5 rounded-sm text-[13px] font-medium">Investment Tips</span>
                    <span className="border border-gray-200 text-gray-700 px-3 py-1.5 rounded-sm text-[13px] font-medium">First-Time Investor</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 bg-[#E6F2F1] text-[#287A7A] px-3 py-1.5 rounded-sm text-[13px] font-medium">
                        <span className="material-symbols-outlined text-[16px]">chat_bubble_outline</span>
                        5 answers
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500 text-[13px]">
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                        156
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-gray-500">
                      <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-[11px] font-bold text-gray-600">MT</div>
                      <span className="font-medium text-gray-900">Mark Thompson</span>
                      <span>• 6 hours ago</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Question 3 */}
              <div className="bg-white border border-gray-200 rounded-sm p-6 flex gap-6">
                <div className="flex flex-col items-center gap-1 shrink-0 mt-1">
                  <button className="text-gray-400 hover:text-gray-600">
                    <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
                  </button>
                  <span className="font-bold text-gray-900 text-[15px]">18</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-[18px] font-bold text-gray-900 mb-2">Do I need to report cryptocurrency trades on my taxes?</h4>
                  <p className="text-gray-600 text-[15px] mb-5 leading-relaxed">
                    I bought and sold some Bitcoin and other crypto this year. Made some money, lost some money. Do I need to tell the IRS about every single trade I made?
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="border border-gray-200 text-gray-700 px-3 py-1.5 rounded-sm text-[13px] font-medium">Cryptocurrency</span>
                    <span className="border border-gray-200 text-gray-700 px-3 py-1.5 rounded-sm text-[13px] font-medium">Tax Questions</span>
                    <span className="border border-gray-200 text-gray-700 px-3 py-1.5 rounded-sm text-[13px] font-medium">Getting Started</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 bg-gray-100 text-gray-600 px-3 py-1.5 rounded-sm text-[13px] font-medium">
                        <span className="material-symbols-outlined text-[16px]">chat_bubble_outline</span>
                        2 answers
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500 text-[13px]">
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                        234
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-gray-500">
                      <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-[11px] font-bold text-gray-600">AJ</div>
                      <span className="font-medium text-gray-900">Alex Johnson</span>
                      <span>• 1 day ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[340px] shrink-0 space-y-10">
          {/* New Here Widget */}
          <div className="bg-[#287A7A] rounded-sm p-8 text-white">
            <h3 className="text-[20px] font-bold mb-3">New Here?</h3>
            <p className="text-white/90 text-[15px] mb-6 leading-relaxed">Start with the basics and build your financial confidence.</p>
            <button className="w-full bg-white/10 hover:bg-white/20 transition-colors rounded py-3 px-4 flex items-center justify-between text-[15px] font-medium border border-white/20">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">emoji_objects</span>
                Financial Basics Guide
              </div>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>

          {/* Trending Topics */}
          <div>
            <h3 className="text-[13px] font-bold text-gray-500 uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">trending_up</span>
              Trending Topics
            </h3>
            <div className="space-y-5">
              <div className="flex items-center justify-between group cursor-pointer">
                <div>
                  <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors mb-0.5">Saving Money Tips</div>
                  <div className="text-[13px] text-gray-500">Smart ways to save</div>
                </div>
                <div className="bg-gray-100 text-gray-700 text-[12px] font-bold px-2 py-1 rounded-sm">245</div>
              </div>
              <div className="flex items-center justify-between group cursor-pointer">
                <div>
                  <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors mb-0.5">Investing for Beginners</div>
                  <div className="text-[13px] text-gray-500">Start your investment journey</div>
                </div>
                <div className="bg-gray-100 text-gray-700 text-[12px] font-bold px-2 py-1 rounded-sm">189</div>
              </div>
              <div className="flex items-center justify-between group cursor-pointer">
                <div>
                  <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors mb-0.5">Retirement Planning</div>
                  <div className="text-[13px] text-gray-500">Plan for your future</div>
                </div>
                <div className="bg-gray-100 text-gray-700 text-[12px] font-bold px-2 py-1 rounded-sm">156</div>
              </div>
              <div className="flex items-center justify-between group cursor-pointer">
                <div>
                  <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors mb-0.5">Buying a Home</div>
                  <div className="text-[13px] text-gray-500">First-time buyer advice</div>
                </div>
                <div className="bg-gray-100 text-gray-700 text-[12px] font-bold px-2 py-1 rounded-sm">134</div>
              </div>
              <div className="flex items-center justify-between group cursor-pointer">
                <div>
                  <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors mb-0.5">Understanding Crypto</div>
                  <div className="text-[13px] text-gray-500">Digital money explained</div>
                </div>
                <div className="bg-gray-100 text-gray-700 text-[12px] font-bold px-2 py-1 rounded-sm">98</div>
              </div>
              <div className="flex items-center justify-between group cursor-pointer">
                <div>
                  <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors mb-0.5">Small Business Money</div>
                  <div className="text-[13px] text-gray-500">Business finance basics</div>
                </div>
                <div className="bg-gray-100 text-gray-700 text-[12px] font-bold px-2 py-1 rounded-sm">87</div>
              </div>
            </div>
          </div>

          {/* Your Recent Activity */}
          <div>
            <h3 className="text-[13px] font-bold text-gray-500 uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">history</span>
              Your Recent Activity
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px]">bookmark</span>
                </div>
                <div>
                  <p className="text-[14px] text-gray-900">You saved <span className="font-bold">Tax Changes for 2024</span></p>
                  <p className="text-[12px] text-gray-500 mt-0.5">2 hours ago</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px]">chat_bubble</span>
                </div>
                <div>
                  <p className="text-[14px] text-gray-900">You commented on <span className="font-bold">Should You Invest When Interest Rates Go Up?</span></p>
                  <p className="text-[12px] text-gray-500 mt-0.5">Yesterday</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px]">event_available</span>
                </div>
                <div>
                  <p className="text-[14px] text-gray-900">You booked a consultation with <span className="font-bold">Sarah Johnson</span></p>
                  <p className="text-[12px] text-gray-500 mt-0.5">3 days ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Browse by Topic */}
          <div>
            <h3 className="text-[13px] font-bold text-gray-500 uppercase tracking-widest mb-5">Browse by Topic</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="text-[#287A7A] mt-0.5">
                  <span className="material-symbols-outlined text-[22px]">calendar_today</span>
                </div>
                <div>
                  <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors mb-0.5">Taxes & Money Management</div>
                  <div className="text-[13px] text-gray-500">1,234 discussions</div>
                </div>
              </div>
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="text-[#287A7A] mt-0.5">
                  <span className="material-symbols-outlined text-[22px]">trending_up</span>
                </div>
                <div>
                  <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors mb-0.5">Investing & Growing Money</div>
                  <div className="text-[13px] text-gray-500">987 discussions</div>
                </div>
              </div>
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="text-[#287A7A] mt-0.5">
                  <span className="material-symbols-outlined text-[22px]">attach_money</span>
                </div>
                <div>
                  <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors mb-0.5">Personal Finance Basics</div>
                  <div className="text-[13px] text-gray-500">756 discussions</div>
                </div>
              </div>
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="text-[#287A7A] mt-0.5">
                  <span className="material-symbols-outlined text-[22px]">lightbulb</span>
                </div>
                <div>
                  <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors mb-0.5">Starting a Business</div>
                  <div className="text-[13px] text-gray-500">543 discussions</div>
                </div>
              </div>
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="text-[#287A7A] mt-0.5">
                  <span className="material-symbols-outlined text-[22px]">home</span>
                </div>
                <div>
                  <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors mb-0.5">Buying Property</div>
                  <div className="text-[13px] text-gray-500">432 discussions</div>
                </div>
              </div>
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="text-[#287A7A] mt-0.5">
                  <span className="material-symbols-outlined text-[22px]">shield_person</span>
                </div>
                <div>
                  <div className="text-[15px] font-bold text-gray-900 group-hover:text-[#287A7A] transition-colors mb-0.5">Insurance & Protection</div>
                  <div className="text-[13px] text-gray-500">321 discussions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-[13px] font-bold text-gray-500 uppercase tracking-widest mb-5">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 border border-gray-200 rounded-sm p-4 hover:bg-gray-50 transition-colors text-left">
                <span className="material-symbols-outlined text-[#287A7A] text-[22px]">chat_bubble_outline</span>
                <span className="text-[15px] font-bold text-gray-900">Ask a Money Question</span>
              </button>
              <button className="w-full flex items-center gap-3 border border-gray-200 rounded-sm p-4 hover:bg-gray-50 transition-colors text-left">
                <span className="material-symbols-outlined text-[#287A7A] text-[22px]">person_search</span>
                <span className="text-[15px] font-bold text-gray-900">Find Financial Experts</span>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}
