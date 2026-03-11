import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function EasyReads() {
  const [savedArticles, setSavedArticles] = useState<Record<number, boolean>>({});

  const toggleSave = (id: number) => {
    setSavedArticles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-[32px] font-bold text-gray-900 mb-3 flex items-center gap-3">
          <span className="material-symbols-outlined text-[#287A7A] text-[36px]">menu_book</span>
          Money Made Simple
        </h1>
        <p className="text-[17px] text-gray-600">
          Financial advice that's easy to understand and actually helpful. Written by real experts, explained for real people.
        </p>
      </div>

      {/* Recommended for You */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-[#D97706] text-[24px]">auto_awesome</span>
          <h2 className="text-[22px] font-bold text-gray-900">Recommended for You</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Recommended Article 1 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col">
            <div className="h-40 bg-gray-200 relative"></div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#E6F2F1] text-[#287A7A] px-2.5 py-1 rounded text-[12px] font-bold">Investing</span>
                <span className="text-[12px] text-gray-500">5 min read</span>
              </div>
              <h3 className="text-[18px] font-bold text-gray-900 mb-2 leading-tight flex-1">The 50/30/20 Rule: A Simple Way to Budget</h3>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center text-[10px] font-bold">MC</div>
                  <span className="text-[13px] font-medium text-gray-700">Michael Chen</span>
                </div>
                <button onClick={() => toggleSave(101)} className={`text-gray-400 hover:text-[#287A7A] transition-colors ${savedArticles[101] ? 'text-[#287A7A]' : ''}`}>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: savedArticles[101] ? "'FILL' 1" : "'FILL' 0" }}>bookmark</span>
                </button>
              </div>
            </div>
          </div>
          {/* Recommended Article 2 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col">
            <div className="h-40 bg-gray-200 relative"></div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#E6F2F1] text-[#287A7A] px-2.5 py-1 rounded text-[12px] font-bold">Retirement</span>
                <span className="text-[12px] text-gray-500">8 min read</span>
              </div>
              <h3 className="text-[18px] font-bold text-gray-900 mb-2 leading-tight flex-1">When Should You Start Saving for Retirement?</h3>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center text-[10px] font-bold">SJ</div>
                  <span className="text-[13px] font-medium text-gray-700">Sarah Johnson</span>
                </div>
                <button onClick={() => toggleSave(102)} className={`text-gray-400 hover:text-[#287A7A] transition-colors ${savedArticles[102] ? 'text-[#287A7A]' : ''}`}>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: savedArticles[102] ? "'FILL' 1" : "'FILL' 0" }}>bookmark</span>
                </button>
              </div>
            </div>
          </div>
          {/* Recommended Article 3 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col hidden lg:flex">
            <div className="h-40 bg-gray-200 relative"></div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#E6F2F1] text-[#287A7A] px-2.5 py-1 rounded text-[12px] font-bold">Taxes</span>
                <span className="text-[12px] text-gray-500">6 min read</span>
              </div>
              <h3 className="text-[18px] font-bold text-gray-900 mb-2 leading-tight flex-1">Tax Deductions You Might Be Missing</h3>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center text-[10px] font-bold">EW</div>
                  <span className="text-[13px] font-medium text-gray-700">Emily Watson</span>
                </div>
                <button onClick={() => toggleSave(103)} className={`text-gray-400 hover:text-[#287A7A] transition-colors ${savedArticles[103] ? 'text-[#287A7A]' : ''}`}>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: savedArticles[103] ? "'FILL' 1" : "'FILL' 0" }}>bookmark</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Looking for something specific? */}
      <div className="bg-[#FFFDF5] border border-[#FDE68A] rounded-lg p-6 mb-10">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-[#FEF3C7] rounded-full flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[#D97706]">lightbulb</span>
          </div>
          <div>
            <h2 className="text-[18px] font-bold text-gray-900 mb-2">Looking for something specific?</h2>
            <p className="text-[15px] text-gray-600 mb-4">
              Our articles are written to help you understand complex financial topics without needing a finance degree. Start with the basics or dive into specific topics.
            </p>
            <div className="flex gap-3">
              <button className="bg-white border border-gray-200 px-4 py-2 rounded text-[14px] font-medium text-gray-700 flex items-center gap-2 hover:bg-gray-50">
                <span className="material-symbols-outlined text-[18px]">menu_book</span>
                Beginner's Guide
              </button>
              <button className="bg-white border border-gray-200 px-4 py-2 rounded text-[14px] font-medium text-gray-700 flex items-center gap-2 hover:bg-gray-50">
                <span className="material-symbols-outlined text-[18px]">search</span>
                Search Articles
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">search</span>
          <input 
            type="text" 
            placeholder="Search for topics like 'saving money' or 'first home'..." 
            className="w-full bg-[#F8F9FA] border border-gray-200 rounded-md py-3 pl-12 pr-4 text-[15px] focus:outline-none focus:border-[#287A7A] focus:ring-1 focus:ring-[#287A7A]"
          />
        </div>
        <div className="relative">
          <select className="appearance-none bg-[#F8F9FA] border border-gray-200 rounded-md py-3 pl-10 pr-10 text-[15px] text-gray-700 font-medium focus:outline-none focus:border-[#287A7A] focus:ring-1 focus:ring-[#287A7A] w-full md:w-auto">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-[20px]">trending_up</span>
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-[20px]">expand_more</span>
        </div>
      </div>

      {/* Browse Popular Topics */}
      <div className="mb-10">
        <h3 className="text-[16px] font-bold text-gray-900 mb-4">Browse Popular Topics</h3>
        <div className="flex flex-wrap gap-2">
          <button className="bg-[#287A7A] text-white px-4 py-1.5 rounded text-[13px] font-medium">All Topics</button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded text-[13px] font-medium hover:bg-gray-50">Money Tips</button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded text-[13px] font-medium hover:bg-gray-50">Investing Basics</button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded text-[13px] font-medium hover:bg-gray-50">Retirement Planning</button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded text-[13px] font-medium hover:bg-gray-50">Home Buying</button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded text-[13px] font-medium hover:bg-gray-50">Understanding Crypto</button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded text-[13px] font-medium hover:bg-gray-50">Small Business</button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded text-[13px] font-medium hover:bg-gray-50">Budgeting Help</button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded text-[13px] font-medium hover:bg-gray-50">Insurance Guide</button>
        </div>
      </div>

      <div className="text-[15px] text-gray-500 mb-6">5 helpful articles</div>

      {/* Articles List */}
      <div className="flex flex-col gap-6">
        {/* Article 1 */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="h-[240px] bg-gray-200 flex items-center justify-center relative overflow-hidden">
            {/* Placeholder for image */}
            <div className="absolute inset-0 bg-gray-200"></div>
            <div className="w-32 h-32 rounded-full border border-gray-300 flex items-center justify-center relative z-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-[1px] bg-gray-300"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[1px] h-full bg-gray-300"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center rotate-45">
                <div className="w-full h-[1px] bg-gray-300"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                <div className="w-full h-[1px] bg-gray-300"></div>
              </div>
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center z-20">
                <span className="material-symbols-outlined text-gray-400 text-[40px]">image</span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center text-sm font-bold">
                SJ
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-[14px] font-bold text-gray-900">Sarah Johnson</span>
                  <span className="material-symbols-outlined text-[#10B981] text-[16px]">verified</span>
                </div>
                <div className="text-[12px] text-gray-500">Tax Expert · 2 hours ago</div>
              </div>
            </div>
            
            <h2 className="text-[22px] font-bold text-gray-900 mb-2">Tax Changes for 2024: What This Means for Your Money</h2>
            <p className="text-[15px] text-gray-600 mb-4">
              Simple explanations of the new tax rules and how they might affect your paycheck, refund, and savings. No complicated jargon - just the facts you need to know.
            </p>
            
            <div className="flex gap-2 mb-6">
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Taxes Made Simple</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Your Money</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Government Changes</span>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                  <span className="text-[13px] font-medium">124</span>
                </button>
                <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900">
                  <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                  <span className="text-[13px] font-medium">18</span>
                </button>
                <div className="flex items-center gap-1.5 text-gray-500">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                  <span className="text-[13px] font-medium">5 min</span>
                </div>
              </div>
              <button onClick={() => toggleSave(1)} className={`text-gray-400 hover:text-[#287A7A] transition-colors ${savedArticles[1] ? 'text-[#287A7A]' : ''}`}>
                <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: savedArticles[1] ? "'FILL' 1" : "'FILL' 0" }}>bookmark</span>
              </button>
            </div>
          </div>
        </div>

        {/* Article 2 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center text-sm font-bold">
              MC
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-[14px] font-bold text-gray-900">Michael Chen</span>
                <span className="material-symbols-outlined text-[#10B981] text-[16px]">verified</span>
              </div>
              <div className="text-[12px] text-gray-500">Investment Advisor · 5 hours ago</div>
            </div>
          </div>
          
          <h2 className="text-[22px] font-bold text-gray-900 mb-2">Should You Invest When Interest Rates Go Up?</h2>
          <p className="text-[15px] text-gray-600 mb-4">
            When banks start paying more interest, should you change how you invest your money? Here's what rising rates mean for your savings and investments in plain English.
          </p>
          
          <div className="flex gap-2 mb-6">
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Investing Basics</span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Interest Rates</span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Your Savings</span>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900">
                <span className="material-symbols-outlined text-[20px]">favorite</span>
                <span className="text-[13px] font-medium">89</span>
              </button>
              <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900">
                <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                <span className="text-[13px] font-medium">12</span>
              </button>
              <div className="flex items-center gap-1.5 text-gray-500">
                <span className="material-symbols-outlined text-[20px]">schedule</span>
                <span className="text-[13px] font-medium">7 min</span>
              </div>
            </div>
            <button onClick={() => toggleSave(2)} className={`text-gray-400 hover:text-[#287A7A] transition-colors ${savedArticles[2] ? 'text-[#287A7A]' : ''}`}>
              <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: savedArticles[2] ? "'FILL' 1" : "'FILL' 0" }}>bookmark</span>
            </button>
          </div>
        </div>

        {/* Article 3 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center text-sm font-bold">
              DR
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-[14px] font-bold text-gray-900">David Rodriguez</span>
                <span className="material-symbols-outlined text-[#10B981] text-[16px]">verified</span>
              </div>
              <div className="text-[12px] text-gray-500">Real Estate Expert · 1 day ago</div>
            </div>
          </div>
          
          <h2 className="text-[22px] font-bold text-gray-900 mb-2">Real Estate Investing: A Complete Beginner's Guide</h2>
          <p className="text-[15px] text-gray-600 mb-4">
            Thinking about investing in real estate but don't know where to start? This guide breaks down everything from REITs to rental properties in simple terms.
          </p>
          
          <div className="flex gap-2 mb-6">
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Real Estate</span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Beginner Investing</span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Property</span>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900">
                <span className="material-symbols-outlined text-[20px]">favorite</span>
                <span className="text-[13px] font-medium">156</span>
              </button>
              <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900">
                <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                <span className="text-[13px] font-medium">24</span>
              </button>
              <div className="flex items-center gap-1.5 text-gray-500">
                <span className="material-symbols-outlined text-[20px]">schedule</span>
                <span className="text-[13px] font-medium">10 min</span>
              </div>
            </div>
            <button onClick={() => toggleSave(3)} className={`text-gray-400 hover:text-[#287A7A] transition-colors ${savedArticles[3] ? 'text-[#287A7A]' : ''}`}>
              <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: savedArticles[3] ? "'FILL' 1" : "'FILL' 0" }}>bookmark</span>
            </button>
          </div>
        </div>

        {/* Article 4 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center text-sm font-bold">
              EW
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-[14px] font-bold text-gray-900">Emily Watson</span>
                <span className="material-symbols-outlined text-[#10B981] text-[16px]">verified</span>
              </div>
              <div className="text-[12px] text-gray-500">Tax & Crypto Specialist · 2 days ago</div>
            </div>
          </div>
          
          <h2 className="text-[22px] font-bold text-gray-900 mb-2">How to Report Cryptocurrency on Your Taxes (Made Simple)</h2>
          <p className="text-[15px] text-gray-600 mb-4">
            Confused about crypto taxes? This guide walks you through everything step-by-step, from what you need to report to how to calculate your gains and losses.
          </p>
          
          <div className="flex gap-2 mb-6">
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Cryptocurrency</span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Tax Help</span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Step-by-Step Guide</span>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900">
                <span className="material-symbols-outlined text-[20px]">favorite</span>
                <span className="text-[13px] font-medium">203</span>
              </button>
              <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900">
                <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                <span className="text-[13px] font-medium">31</span>
              </button>
              <div className="flex items-center gap-1.5 text-gray-500">
                <span className="material-symbols-outlined text-[20px]">schedule</span>
                <span className="text-[13px] font-medium">8 min</span>
              </div>
            </div>
            <button onClick={() => toggleSave(4)} className={`text-gray-400 hover:text-[#287A7A] transition-colors ${savedArticles[4] ? 'text-[#287A7A]' : ''}`}>
              <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: savedArticles[4] ? "'FILL' 1" : "'FILL' 0" }}>bookmark</span>
            </button>
          </div>
        </div>

        {/* Article 5 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded bg-[#E6F2F1] text-[#287A7A] flex items-center justify-center text-sm font-bold">
              RK
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-[14px] font-bold text-gray-900">Robert Kim</span>
                <span className="material-symbols-outlined text-[#10B981] text-[16px]">verified</span>
              </div>
              <div className="text-[12px] text-gray-500">Small Business Advisor · 3 days ago</div>
            </div>
          </div>
          
          <h2 className="text-[22px] font-bold text-gray-900 mb-2">Small Business Money Management: Your First Year</h2>
          <p className="text-[15px] text-gray-600 mb-4">
            Just started a business? Here's how to handle your money, taxes, and financial planning without getting overwhelmed. Essential tips for new business owners.
          </p>
          
          <div className="flex gap-2 mb-6">
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Small Business</span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Money Management</span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-medium">Getting Started</span>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900">
                <span className="material-symbols-outlined text-[20px]">favorite</span>
                <span className="text-[13px] font-medium">98</span>
              </button>
              <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900">
                <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                <span className="text-[13px] font-medium">16</span>
              </button>
              <div className="flex items-center gap-1.5 text-gray-500">
                <span className="material-symbols-outlined text-[20px]">schedule</span>
                <span className="text-[13px] font-medium">12 min</span>
              </div>
            </div>
            <button onClick={() => toggleSave(5)} className={`text-gray-400 hover:text-[#287A7A] transition-colors ${savedArticles[5] ? 'text-[#287A7A]' : ''}`}>
              <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: savedArticles[5] ? "'FILL' 1" : "'FILL' 0" }}>bookmark</span>
            </button>
          </div>
        </div>
      </div>

      {/* Load More */}
      <div className="mt-10 flex justify-center">
        <button className="bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded text-[14px] font-medium hover:bg-gray-50">
          Show More Articles
        </button>
      </div>
    </div>
  );
}
