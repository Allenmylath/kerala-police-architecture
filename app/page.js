'use client';

import { useState } from 'react';

// Reusable Components
const Arrow = ({ label }) => (
  <div style={{ textAlign: 'center', padding: '12px 0' }}>
    <div style={{
      width: '3px',
      height: '40px',
      background: '#9E9E9E',
      margin: '0 auto',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        bottom: '-8px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '0',
        height: '0',
        borderLeft: '8px solid transparent',
        borderRight: '8px solid transparent',
        borderTop: '12px solid #9E9E9E'
      }} />
    </div>
    {label && <div style={{
      fontSize: '0.85rem',
      color: '#666',
      fontStyle: 'italic',
      marginTop: '8px'
    }}>{label}</div>}
  </div>
);

const SplitArrow = ({ leftLabel, rightLabel }) => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: '200px', padding: '12px 0', flexWrap: 'wrap' }}>
    {[leftLabel, rightLabel].map((label, idx) => (
      <div key={idx}>
        <div style={{
          width: '3px',
          height: '40px',
          background: '#9E9E9E',
          margin: '0 auto',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '0',
            height: '0',
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderTop: '12px solid #9E9E9E'
          }} />
        </div>
        {label && <div style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' }}>{label}</div>}
      </div>
    ))}
  </div>
);

const Component = ({ title, subtitle, className, children }) => {
  const colors = {
    frontend: { bg: '#E3F2FD', border: '#1976D2', text: '#1976D2' },
    mcp: { bg: '#FFF3E0', border: '#F57C00', text: '#F57C00' },
    'vector-db': { bg: '#E8F5E9', border: '#2E7D32', text: '#2E7D32' },
    llm: { bg: '#F3E5F5', border: '#6A1B9A', text: '#6A1B9A' },
    pipeline: { bg: '#FCE4EC', border: '#C2185B', text: '#C2185B' },
    blue: { bg: '#E3F2FD', border: '#1976D2', text: '#1976D2' },
    orange: { bg: '#FFF3E0', border: '#F57C00', text: '#F57C00' },
    green: { bg: '#E8F5E9', border: '#2E7D32', text: '#2E7D32' },
    pink: { bg: '#FCE4EC', border: '#C2185B', text: '#C2185B' },
    purple: { bg: '#F3E5F5', border: '#6A1B9A', text: '#6A1B9A' }
  };
  
  const colorScheme = colors[className] || colors.blue;
  
  return (
    <div style={{
      borderRadius: '12px',
      padding: '24px',
      textAlign: 'center',
      border: `3px solid ${colorScheme.border}`,
      background: colorScheme.bg,
      color: colorScheme.text,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease'
    }}>
      <div style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>{title}</div>
      {subtitle && <div style={{ fontSize: '0.95rem', opacity: 0.85 }}>{subtitle}</div>}
      {children}
    </div>
  );
};

const StatCard = ({ number, label, icon }) => (
  <div style={{
    background: 'white',
    borderRadius: '12px',
    padding: '24px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    border: '2px solid #E0E0E0',
    transition: 'transform 0.3s ease'
  }}>
    {icon && <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{icon}</div>}
    <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1976D2', marginBottom: '8px' }}>{number}</div>
    <div style={{ fontSize: '1rem', color: '#666' }}>{label}</div>
  </div>
);

// Architecture Tab Components
const SystemArchitecture = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', maxWidth: '900px', margin: '0 auto' }}>
    <Component 
      className="frontend"
      title="TypeScript Web Application"
      subtitle="User Interface • Voice I/O • Query Handler"
    />
    
    <Arrow label="User Query" />
    
    <Component 
      className="mcp"
      title="MCP Server (Orchestration Layer)"
      subtitle="Query routing, validation, and response management"
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', marginTop: '20px' }}>
        {['Query\nRouter', 'Guardrails\nEngine', 'Response\nGenerator'].map((text, idx) => (
          <div key={idx} style={{ background: 'white', borderRadius: '8px', padding: '16px', border: '2px solid #F57C00', fontSize: '0.9rem', fontWeight: 600, whiteSpace: 'pre-line' }}>
            {text}
          </div>
        ))}
      </div>
    </Component>
    
    <SplitArrow leftLabel="Data Retrieval" rightLabel="AI Processing" />
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', width: '100%' }}>
      <Component 
        className="vector-db"
        title="Vector Database"
        subtitle="Semantic Search & Retrieval"
      />
      <Component 
        className="llm"
        title="LLM Provider"
        subtitle="AI Response Generation"
      />
    </div>
    
    <Arrow label="Data Feed" />
    
    <Component 
      className="pipeline"
      title="Data Ingestion Pipeline"
      subtitle="Web Scraper • PDF Processor • Text Chunking • Vectorization"
    />
  </div>
);

const DataIngestion = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <Component className="blue" title="Kerala Police Website" subtitle="keralapolice.gov.in" />
    </div>
    
    <Arrow />
    
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <Component className="orange" title="URL Discovery & Crawling" subtitle="Sitemap parsing + Spider crawling" />
    </div>
    
    <div style={{ textAlign: 'center', marginBottom: '8px', fontSize: '0.85rem', color: '#666', fontStyle: 'italic' }}>
      Content Type Detection
    </div>
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', width: '100%' }}>
      {[
        { title: 'Web Processor', volume: '~1,000 Pages', details: 'HTML Parse • Extract • Clean', color: '#2E7D32', bg: '#E8F5E9' },
        { title: 'PDF Processor', volume: '5,000+ Documents', details: 'OCR • Tables • Forms • Malayalam', color: '#C2185B', bg: '#FCE4EC' }
      ].map((proc, idx) => (
        <div key={idx} style={{
          borderRadius: '12px',
          padding: '24px 20px',
          textAlign: 'center',
          border: `3px solid ${proc.color}`,
          background: proc.bg,
          color: proc.color
        }}>
          <div style={{ fontSize: '1.3rem', fontWeight: 700 }}>{proc.title}</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, margin: '8px 0' }}>{proc.volume}</div>
          <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>{proc.details}</div>
        </div>
      ))}
    </div>
    
    <Arrow />
    
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <Component className="blue" title="Text Chunking" subtitle="Semantic segmentation" />
    </div>
    
    <Arrow />
    
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <Component className="purple" title="Embedding Model" subtitle="Vector generation" />
    </div>
    
    <Arrow />
    
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <Component className="green" title="Vector Database" subtitle="Indexed storage" />
    </div>
  </div>
);

const QueryFlow = () => {
  const steps = [
    { title: "User Query", className: "blue" },
    { title: "Frontend Validation", className: "blue" },
    { title: "MCP: Query Router", className: "orange" },
    { title: "Vector DB Search", className: "green" },
    { title: "MCP: Guardrails", className: "orange" },
    { title: "LLM Generation", className: "purple" },
    { title: "Response Display", className: "blue" }
  ];
  
  const mechanisms = [
    { title: "Semantic Search", desc: "Meaning-based retrieval instead of keyword matching" },
    { title: "Source Attribution", desc: "Every answer includes citations to official documents" },
    { title: "Guardrail Validation", desc: "Multi-stage quality checks ensure responses stay within scope" },
    { title: "Confidence Scoring", desc: "Transparency through reliability scores" },
    { title: "Hallucination Prevention", desc: "Responses limited to retrieved context only" },
    { title: "Error Handling", desc: "Graceful failure with alternative suggestions" }
  ];
  
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {steps.map((step, index) => (
          <div key={index}>
            <Component className={step.className} title={step.title} />
            {index < steps.length - 1 && <Arrow />}
          </div>
        ))}
      </div>
      
      <div style={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        borderRadius: '12px',
        padding: '30px',
        border: '3px solid #1976D2'
      }}>
        <h2 style={{ color: '#1976D2', fontSize: '1.8rem', marginBottom: '24px', textAlign: 'center', margin: '0 0 24px 0' }}>
          Quality Mechanisms
        </h2>
        {mechanisms.map((mech, index) => (
          <div key={index} style={{
            marginBottom: '20px',
            padding: '16px',
            background: 'white',
            borderRadius: '8px',
            borderLeft: '4px solid #1976D2'
          }}>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1976D2', marginBottom: '6px' }}>
              {mech.title}
            </div>
            <div style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.5 }}>
              {mech.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('architecture');
  
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '16px', margin: '0 0 16px 0', fontWeight: 800 }}>
          🏛️ Kerala Police AI-Powered Information Assistant
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', opacity: 0.95, margin: '0 0 8px 0', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          Comprehensive Technical Documentation
        </p>
        <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: 0 }}>December 12, 2025</p>
      </div>

      {/* Current Challenges Section */}
      <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#1F4E78', marginBottom: '40px', textAlign: 'center', margin: '0 0 40px 0' }}>
          📊 Current Challenges
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          <StatCard number="137K" label="Monthly Traffic" icon="👥" />
          <StatCard number="48K" label="PCC Queries" icon="❓" />
          <StatCard number="6,000+" label="Total URLs" icon="🔗" />
          <StatCard number="83%" label="PDF Content" icon="📄" />
        </div>

        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '40px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{ fontSize: '1.5rem', color: '#C2185B', marginBottom: '24px', margin: '0 0 24px 0' }}>Key Challenges</h3>
          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              'Information scattered across 6,000+ URLs making it difficult to find answers',
              '83% PDF content (5,000+ documents) not easily searchable',
              'No intelligent assistant to guide users through procedures',
              'High bounce rates due to poor information accessibility'
            ].map((challenge, idx) => (
              <div key={idx} style={{
                padding: '20px',
                background: '#FCE4EC',
                borderRadius: '8px',
                borderLeft: '4px solid #C2185B',
                fontSize: '1rem',
                color: '#333',
                lineHeight: 1.6
              }}>
                {challenge}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Landscape Section */}
      <div style={{ background: 'white', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#1F4E78', marginBottom: '40px', textAlign: 'center', margin: '0 0 40px 0' }}>
            🗂️ Data Landscape
          </h2>
          
          <div style={{
            background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
            borderRadius: '16px',
            padding: '40px',
            border: '3px solid #2E7D32'
          }}>
            <h3 style={{ fontSize: '1.8rem', color: '#2E7D32', marginBottom: '30px', textAlign: 'center', margin: '0 0 30px 0' }}>
              Processing Requirements
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              {[
                { icon: '📄', title: 'PDF Extraction', desc: 'OCR capabilities for scanned documents' },
                { icon: '📋', title: 'Metadata Extraction', desc: 'Titles, dates, and categories' },
                { icon: '📊', title: 'Table & Form Recognition', desc: 'Structured data extraction' },
                { icon: '🔤', title: 'Malayalam Support', desc: 'Local language content processing' },
                { icon: '🌐', title: 'Web Scraping', desc: 'HTML pages extraction and parsing' }
              ].map((req, idx) => (
                <div key={idx} style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{req.icon}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2E7D32', marginBottom: '8px' }}>{req.title}</div>
                  <div style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.5 }}>{req.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Section with Tabs */}
      <div style={{ maxWidth: '1400px', margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#1F4E78', marginBottom: '30px', textAlign: 'center', margin: '0 0 30px 0' }}>
          🏗️ System Architecture
        </h2>
        
        <div style={{
          background: 'white',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '12px 12px 0 0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          overflow: 'auto'
        }}>
          {[
            { id: 'architecture', label: '🏗️ System Architecture' },
            { id: 'ingestion', label: '📊 Data Ingestion' },
            { id: 'query', label: '🔄 Query Flow' }
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '18px 30px',
                background: 'white',
                border: 'none',
                borderBottom: activeTab === tab.id ? '3px solid #1976D2' : '3px solid transparent',
                cursor: 'pointer',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                fontWeight: 600,
                color: activeTab === tab.id ? '#1976D2' : '#666',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div style={{
          background: 'white',
          borderRadius: '0 0 16px 16px',
          padding: 'clamp(20px, 5vw, 40px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          {activeTab === 'architecture' && <SystemArchitecture />}
          {activeTab === 'ingestion' && <DataIngestion />}
          {activeTab === 'query' && <QueryFlow />}
        </div>
      </div>

      {/* Technical Stack Section */}
      <div style={{ background: '#F3E5F5', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#1F4E78', marginBottom: '40px', textAlign: 'center', margin: '0 0 40px 0' }}>
            💻 Technical Stack
          </h2>
          
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              {['PyPDF2', 'pdfplumber', 'Tesseract OCR', 'Beautiful Soup', 'Scrapy', 'Sentence Transformers'].map((tech, idx) => (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '16px 28px',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Guardrails & Safety Section */}
      <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#1F4E78', marginBottom: '40px', textAlign: 'center', margin: '0 0 40px 0' }}>
          🛡️ Guardrails & Safety
        </h2>
        
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '40px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { icon: '✅', title: 'Scope Validation', desc: 'Only Kerala Police domain queries allowed' },
              { icon: '🚫', title: 'Content Filtering', desc: 'Block harmful or inappropriate content' },
              { icon: '📌', title: 'Source Verification', desc: 'Responses tied to official documents only' },
              { icon: '⚠️', title: 'Confidence Thresholds', desc: 'Low-confidence responses flagged or rejected' },
              { icon: '🔒', title: 'Privacy Protection', desc: 'No personal data storage or sharing' },
              { icon: '📝', title: 'Audit Logging', desc: 'All queries and responses tracked for quality' }
            ].map((guard, idx) => (
              <div key={idx} style={{
                background: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)',
                borderRadius: '12px',
                padding: '24px',
                border: '2px solid #F57C00',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{guard.icon}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F57C00', marginBottom: '8px' }}>{guard.title}</div>
                <div style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.5 }}>{guard.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance & Scalability Section */}
      <div style={{ background: 'white', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#1F4E78', marginBottom: '40px', textAlign: 'center', margin: '0 0 40px 0' }}>
            ⚡ Performance & Scalability
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)',
              borderRadius: '16px',
              padding: '40px',
              border: '3px solid #1976D2'
            }}>
              <h3 style={{ fontSize: '1.5rem', color: '#1976D2', marginBottom: '24px', textAlign: 'center', margin: '0 0 24px 0' }}>
                Optimization Strategies
              </h3>
              {[
                'Indexed vectors for sub-second search',
                'Result caching for frequent queries',
                'Streaming responses for reduced latency',
                'Horizontal scaling for MCP',
                'Load balancing across resources'
              ].map((strategy, idx) => (
                <div key={idx} style={{
                  background: 'white',
                  padding: '16px',
                  borderRadius: '8px',
                  marginBottom: '12px',
                  borderLeft: '4px solid #1976D2',
                  fontSize: '0.95rem',
                  color: '#333'
                }}>
                  {strategy}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <StatCard number="<3s" label="Response Time" icon="⚡" />
              <StatCard number="99.5%" label="Uptime Target" icon="✅" />
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Roadmap Section */}
      <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#1F4E78', marginBottom: '40px', textAlign: 'center', margin: '0 0 40px 0' }}>
          🗓️ Implementation Roadmap (56 Days)
        </h2>
        
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '40px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{ fontSize: '1.5rem', color: '#2E7D32', marginBottom: '24px', textAlign: 'center', margin: '0 0 24px 0' }}>
            Success Metrics
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { metric: '>90%', label: 'Response Accuracy' },
              { metric: '>85%', label: 'User Satisfaction' },
              { metric: '<3s', label: 'Response Time' },
              { metric: '>99.5%', label: 'System Uptime' }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
                borderRadius: '12px',
                padding: '24px',
                textAlign: 'center',
                border: '2px solid #2E7D32'
              }}>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#2E7D32', marginBottom: '8px' }}>{item.metric}</div>
                <div style={{ fontSize: '0.95rem', color: '#666' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits & Conclusion Section */}
      <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '60px 20px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '40px', textAlign: 'center', margin: '0 0 40px 0' }}>
            ✨ Benefits & Conclusion
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '32px',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', margin: '0 0 20px 0' }}>Key Benefits</h3>
              {['24/7 availability for citizens', 'Reduced response times', 'Improved information accessibility', 'Enhanced public trust'].map((benefit, idx) => (
                <div key={idx} style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.2)', fontSize: '0.95rem' }}>
                  ✓ {benefit}
                </div>
              ))}
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '32px',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', margin: '0 0 20px 0' }}>Technical Strengths</h3>
              {['Specialized PDF processing (83%)', 'Comprehensive guardrails', 'Modern microservices architecture', 'Scalable infrastructure'].map((strength, idx) => (
                <div key={idx} style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.2)', fontSize: '0.95rem' }}>
                  ⚡ {strength}
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '40px',
            textAlign: 'center',
            border: '3px solid rgba(255, 255, 255, 0.4)'
          }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', margin: '0 0 16px 0' }}>🎯 Ready for Implementation</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
              Comprehensive solution positioned for long-term success with proven technical architecture, 
              robust safety mechanisms, and clear implementation path.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: '#1F4E78', color: 'white', padding: '30px 20px', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '0.95rem' }}>
          Kerala Police AI-Powered Information Assistant • December 2025
        </p>
      </div>
    </div>
  );
}
