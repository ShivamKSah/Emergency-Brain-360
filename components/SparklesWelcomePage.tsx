import React from 'react';
import { SparklesCore } from '@/components/ui/sparkles';

interface SparklesWelcomePageProps {
  onStart: () => void;
}

const SparklesWelcomePage: React.FC<SparklesWelcomePageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-500/10 rounded-full mb-6 backdrop-blur-sm border border-blue-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20.5c.5-5.5 5.5-7.5 5.5-12.5" transform="rotate(90 12 12)" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 3.5c-.5 5.5-5.5 7.5-5.5 12.5" transform="rotate(90 12 12)" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Emergency <span className="text-blue-400">Brain</span> 360
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto backdrop-blur-sm bg-black/30 p-4 rounded-xl border border-slate-700/50">
            AI-Powered Triage & Diagnosis System for Clinical Decision Making
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Triage</h3>
            <p className="text-slate-300">Intelligent patient prioritization using advanced machine learning algorithms</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Real-time Analytics</h3>
            <p className="text-slate-300">Live dashboards with vital signs monitoring and symptom trend analysis</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Patient Management</h3>
            <p className="text-slate-300">Comprehensive patient intake, tracking, and discharge workflows</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-12">
          <button
            onClick={onStart}
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20 flex items-center justify-center mx-auto backdrop-blur-sm border border-blue-500/30"
          >
            Enter Emergency Dashboard
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Footer */}
        <div className="text-slate-400 text-sm backdrop-blur-sm bg-black/30 p-4 rounded-xl border border-slate-700/50 inline-block">
          <p>Advanced Clinical Decision Support System</p>
        </div>
      </div>
    </div>
  );
};

export default SparklesWelcomePage;