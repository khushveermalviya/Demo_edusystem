import React from 'react';
import { Brain, ChartBar, LineChart, FileSpreadsheet, FileText, Settings, Users, CreditCard, Download, Sparkles } from 'lucide-react';

const AiFeatureSection = () => {
  return (
    <div className="bg-gradient-to-br from-purple-100 via-white to-purple-50 py-20">
      {/* AI System Image Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
            Powered by AI Intelligence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Advanced analytics and intelligent insights with comprehensive fee management and reporting tools
          </p>
        </div>
        
        <div className="relative rounded-xl overflow-hidden shadow-2xl mb-16 transform hover:scale-[1.02] transition-transform duration-300">
          <img
            src="/dashboard-image.png"
            alt="AI Dashboard"
            className="w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/80 to-transparent p-6 text-white">
            <p className="text-lg font-semibold">Comprehensive Management Dashboard</p>
            <p className="text-sm opacity-90">Unified platform for analytics, fee management, and reporting</p>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <CreditCard className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-xl font-semibold">Smart Fee Management</h3>
            </div>
            <p className="text-gray-600">Automated fee collection, customizable fee structures, payment tracking, and instant receipt generation with multiple payment gateway integrations.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FileSpreadsheet className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-xl font-semibold">Advanced Reporting</h3>
            </div>
            <p className="text-gray-600">One-click generation of custom reports in PDF and Excel formats, including financial statements, attendance records, and performance analytics.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-xl font-semibold">AI Insights</h3>
            </div>
            <p className="text-gray-600">Predictive analytics for fee collection, defaulter prediction, and resource optimization using advanced machine learning algorithms.</p>
          </div>
        </div>

        {/* Detailed Features Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Fee Management Panel */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-purple-900">Fee Management System</h3>
              <Settings className="h-8 w-8 text-purple-600" />
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Customizable Fee Structure</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Multiple fee types (Tuition, Transport, Library, etc.)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Class-wise and category-wise fee configuration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Flexible payment schedules and installments
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Automatic late fee calculation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Report Generation Panel */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-purple-900">Smart Reporting Tools</h3>
              <Download className="h-8 w-8 text-purple-600" />
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">One-Click Reports</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Fee collection reports (Daily/Monthly/Yearly)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Student performance analytics
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Customizable report templates
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Bulk export in multiple formats
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced AI Features */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-purple-900">Advanced AI Capabilities</h3>
            <Sparkles className="h-8 w-8 text-purple-600" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-3">Intelligent Analytics</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  Predictive fee collection patterns
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  Early warning system for fee defaults
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  Resource utilization optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  Automated performance tracking
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Customization Options</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  School-specific report templates
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  Configurable dashboard widgets
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  Custom fee structure creation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  Flexible notification system
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiFeatureSection;