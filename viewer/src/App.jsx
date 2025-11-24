import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, NavLink, useParams, Navigate } from 'react-router-dom';
import { Clipboard, FileText, ExternalLink, AlertTriangle, CheckCircle, Circle, Copy } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for class merging
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Helper to copy text
const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy:', err);
    return false;
  }
};

// Component for displaying a single response card
const ResponseCard = ({ response, responseKey }) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = async (e) => {
    e.stopPropagation();
    const success = await copyToClipboard(response.plainText);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const statusStyles = response.overLimit 
    ? 'text-red-700 bg-red-50 border-red-200' 
    : response.needsCompletion 
      ? 'text-amber-700 bg-amber-50 border-amber-200' 
      : 'text-primary-700 bg-primary-50 border-primary-200';
  
  const statusIcon = response.overLimit ? <AlertTriangle size={14} /> : 
                     response.needsCompletion ? <Circle size={14} /> : 
                     <CheckCircle size={14} />;

  const limitText = response.wordLimit 
    ? `${response.wordCount.toLocaleString()} / ${response.wordLimit.toLocaleString()} words`
    : response.charLimit 
      ? `${response.charCount.toLocaleString()} / ${response.charLimit.toLocaleString()} chars`
      : `${response.wordCount.toLocaleString()} words`;

  const percentage = response.wordLimit 
    ? response.wordPercentage 
    : response.charLimit 
      ? response.charPercentage 
      : 0;

  const progressBarColor = percentage > 100 ? 'bg-red-500' : percentage > 80 ? 'bg-amber-500' : 'bg-primary-500';

  return (
    <>
      <div 
        className={cn(
          "border rounded-xl p-5 hover:shadow-lg transition-all duration-200 cursor-pointer bg-white relative group border-secondary-200",
          response.overLimit && "border-l-4 border-l-red-500",
          response.needsCompletion && "border-l-4 border-l-amber-500",
          !response.overLimit && !response.needsCompletion && "border-l-4 border-l-primary-500"
        )}
        onClick={() => setExpanded(true)}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold text-secondary-900 pr-8 leading-tight">{response.title}</h3>
          <button 
            onClick={handleCopy}
            className={cn(
              "absolute top-4 right-4 p-2 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100",
              copied ? "bg-primary-100 text-primary-700" : "bg-secondary-100 text-secondary-600 hover:bg-secondary-200"
            )}
            title="Copy to clipboard"
          >
            {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
          </button>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-xs font-medium text-secondary-500 mb-1.5">
            <span>{limitText}</span>
            {percentage > 0 && <span>{percentage.toFixed(1)}%</span>}
          </div>
          {percentage > 0 && (
            <div className="h-1.5 w-full bg-secondary-100 rounded-full overflow-hidden">
              <div 
                className={`h-full ${progressBarColor} transition-all duration-500 rounded-full`} 
                style={{ width: `${Math.min(percentage, 100)}%` }}
              />
            </div>
          )}
        </div>

        <div className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border", statusStyles)}>
          {statusIcon}
          <span className="capitalize">{response.status.replace('_', ' ')}</span>
        </div>
      </div>

      {/* Modal for expanded view */}
      {expanded && (
        <div className="fixed inset-0 bg-secondary-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setExpanded(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-fade-in" onClick={e => e.stopPropagation()}>
            <div className="p-6 border-b border-secondary-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <h2 className="text-xl font-bold text-secondary-900">{response.title}</h2>
              <button onClick={() => setExpanded(false)} className="text-secondary-400 hover:text-secondary-600 p-2 rounded-full hover:bg-secondary-50 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto custom-scrollbar bg-secondary-50/50">
              {response.question && (
                <div className="bg-primary-50 border-l-4 border-primary-500 p-5 mb-6 rounded-r-lg shadow-sm">
                  <h4 className="font-bold text-primary-800 mb-2 uppercase text-xs tracking-wider">Question</h4>
                  <p className="text-primary-900 leading-relaxed">{response.question}</p>
                </div>
              )}

              <div className="flex items-center gap-4 mb-6 bg-white p-4 rounded-xl border border-secondary-200 shadow-sm">
                <div className="flex-1">
                  <div className="flex justify-between text-sm font-medium text-secondary-600 mb-2">
                    <span>{limitText}</span>
                    <span>{percentage.toFixed(1)}%</span>
                  </div>
                  {percentage > 0 && (
                    <div className="h-2 w-full bg-secondary-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${progressBarColor} rounded-full`} 
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      />
                    </div>
                  )}
                </div>
                <button 
                  onClick={handleCopy}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all shadow-sm active:scale-95",
                    copied 
                      ? "bg-green-600 text-white hover:bg-green-700" 
                      : "bg-primary-600 text-white hover:bg-primary-700"
                  )}
                >
                  {copied ? <CheckCircle size={18} /> : <Copy size={18} />}
                  {copied ? 'Copied!' : 'Copy Text'}
                </button>
              </div>

              <div className="prose prose-slate max-w-none bg-white p-8 rounded-xl border border-secondary-200 shadow-sm">
                <div className="whitespace-pre-wrap font-sans text-base text-secondary-800 leading-relaxed">{response.plainText}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Grant Detail View
const GrantDetail = ({ grantsData }) => {
  const { grantId } = useParams();
  const grant = grantsData[grantId];

  if (!grant) return (
    <div className="flex flex-col items-center justify-center h-96 text-secondary-400">
      <AlertTriangle size={48} className="mb-4 opacity-20" />
      <p className="text-lg font-medium">Grant not found</p>
    </div>
  );

  const config = grant.config;
  const meta = grant.metadata?.metadata || {};
  const links = grant.metadata?.links || {};
  const solicitationUrl = meta.solicitation_url || meta.portal_url || null;

  return (
    <div className="animate-fade-in pb-20">
      {/* Header Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-secondary-200 p-8 mb-8">
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-secondary-900 mb-3 tracking-tight">{config.name}</h1>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold border border-primary-100">
                {config.foundation}
              </span>
              <span className="text-secondary-300">•</span>
              <span className="text-secondary-600 font-medium">
                {config.program}
              </span>
            </div>
          </div>
          <div className="flex gap-3 self-start">
            {solicitationUrl && (
              <a 
                href={solicitationUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-secondary-300 text-secondary-700 rounded-lg hover:bg-secondary-50 hover:border-secondary-400 transition-all font-medium text-sm shadow-sm"
              >
                <FileText size={16} /> Solicitation
              </a>
            )}
            {links.repo && (
              <a 
                href={links.repo} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-900 text-white border border-transparent rounded-lg hover:bg-secondary-800 transition-all font-medium text-sm shadow-md hover:shadow-lg"
              >
                <ExternalLink size={16} /> Repository
              </a>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-6 border-t border-secondary-100">
          <div>
            <div className="text-xs font-bold text-secondary-400 uppercase tracking-wider mb-1">Requested</div>
            <div className="text-xl font-bold text-secondary-900">${config.amount_requested?.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-xs font-bold text-secondary-400 uppercase tracking-wider mb-1">Duration</div>
            <div className="text-xl font-bold text-secondary-900">{config.grant_duration_years} years</div>
          </div>
          <div>
            <div className="text-xs font-bold text-secondary-400 uppercase tracking-wider mb-1">Deadline</div>
            <div className="text-xl font-bold text-secondary-900">{config.deadline}</div>
          </div>
          <div>
            <div className="text-xs font-bold text-secondary-400 uppercase tracking-wider mb-1">Status</div>
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${
                config.status === 'submitted' || config.status === 'completed' ? 'bg-green-500' :
                config.status === 'active' ? 'bg-purple-500' :
                config.status === 'draft' ? 'bg-secondary-400' :
                'bg-amber-500'
              }`}></span>
              <span className="text-xl font-bold text-secondary-900 capitalize">{config.status.replace('_', ' ')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Application Sections */}
      {grant.responses && Object.keys(grant.responses).length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-bold text-secondary-800 mb-6 flex items-center gap-2">
            <div className="p-2 bg-primary-100 text-primary-600 rounded-lg">
              <FileText size={20} />
            </div>
            Application Responses
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {Object.entries(grant.responses).map(([key, response]) => (
              <ResponseCard key={key} responseKey={key} response={response} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main Layout
function App() {
  const [grantsData, setGrantsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/grants_data.json') // Fetch JSON directly
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setGrantsData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading grants data:", err);
        setError("Failed to load grants data. Please ensure grants_builder has run and data is in JSON format.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary-50">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-200 border-t-primary-600"></div>
          <p className="text-secondary-500 font-medium animate-pulse">Loading Grants...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary-50 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center border border-secondary-200">
          <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle size={32} />
          </div>
          <h3 className="text-xl font-bold text-secondary-900 mb-2">Unable to Load Data</h3>
          <p className="text-secondary-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-secondary-900 text-white rounded-lg font-medium hover:bg-secondary-800 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const grantIds = Object.keys(grantsData);
  // Prioritize NSF CSSI if available, otherwise first one
  const defaultGrant = grantIds.includes('nsf-cssi') ? 'nsf-cssi' : grantIds[0];

  return (
    <Router>
      <div className="min-h-screen bg-secondary-50 font-sans text-secondary-900 flex">
        {/* Sidebar */}
        <aside className="w-80 bg-white border-r border-secondary-200 h-screen fixed overflow-y-auto hidden md:flex flex-col z-20 shadow-sm">
          <div className="p-6 border-b border-secondary-100 sticky top-0 bg-white/95 backdrop-blur z-10">
            <div className="flex items-center gap-3 mb-1">
              <img src="/logo.svg" alt="PolicyEngine Logo" className="h-8 w-8" />
              <h1 className="text-xl font-bold text-secondary-900 tracking-tight">
                PolicyEngine
              </h1>
            </div>
            <p className="text-xs text-secondary-500 font-semibold tracking-wider uppercase ml-11">Grant Applications</p>
          </div>
          
          <nav className="p-4 space-y-1 flex-1">
            {Object.entries(grantsData).map(([id, grant]) => (
              <NavLink
                key={id}
                to={`/${id}`}
                className={({ isActive }) =>
                  cn(
                    "block px-4 py-3 rounded-xl text-sm transition-all duration-200 group border border-transparent",
                    isActive 
                      ? "bg-primary-50 text-primary-800 font-semibold shadow-sm border-primary-100" 
                      : "text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900"
                  )
                }
              >
                <div className="truncate leading-tight">{grant.config.name}</div>
                <div className={cn(
                  "text-xs mt-1 truncate transition-colors",
                  ({isActive}) => isActive ? "text-primary-600/80" : "text-secondary-400 group-hover:text-secondary-500"
                )}>
                  {grant.config.foundation}
                </div>
              </NavLink>
            ))}
          </nav>

          <div className="p-4 border-t border-secondary-100 bg-secondary-50/50">
            <div className="text-xs text-center text-secondary-400 font-medium">
              &copy; {new Date().getFullYear()} PolicyEngine
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-80 min-h-screen">
          <div className="max-w-7xl mx-auto p-6 md:p-10 lg:p-12">
            <Routes>
              <Route path="/" element={<Navigate to={`/${defaultGrant}`} replace />} />
              <Route path="/:grantId" element={<GrantDetail grantsData={grantsData} />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;