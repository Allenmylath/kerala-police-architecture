'use client';

import { useState } from 'react';

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
  <div style={{ display: 'flex', justifyContent: 'center', gap: '200px', padding: '12px 0' }}>
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '20px' }}>
        {['Query\nRouter', 'Guardrails\nEngine', 'Response\nGenerator'].map((text, idx) => (
          <div key={idx} style={{ background: 'white', borderRadius: '8px', padding: '16px', border: '2px solid #F57C00', fontSize: '0.9rem', fontWeight: 600, whiteSpace: 'pre-line' }}>
            {text}
          </div>
        ))}
      </div>
    </Component>
    
    <SplitArrow leftLabel="Data Retrieval" rightLabel="AI Processing" />
    
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', width: '100%' }}>
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
    
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', width: '100%' }}>
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
    <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
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
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '30px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px', margin: '0 0 8px 0' }}>🏛️ Kerala Police AI Architecture</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.95, margin: 0 }}>Interactive Technical Diagrams</p>
      </div>
      
      <div style={{
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 100
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
              fontSize: '1rem',
              fontWeight: 600,
              color: activeTab === tab.id ? '#1976D2' : '#666',
              transition: 'all 0.3s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div style={{ maxWidth: '1400px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '40px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          {activeTab === 'architecture' && (
            <>
              <h2 style={{ fontSize: '2rem', color: '#1F4E78', marginBottom: '30px', textAlign: 'center', margin: '0 0 30px 0' }}>
                System Architecture
              </h2>
              <SystemArchitecture />
            </>
          )}
          
          {activeTab === 'ingestion' && (
            <>
              <h2 style={{ fontSize: '2rem', color: '#1F4E78', marginBottom: '30px', textAlign: 'center', margin: '0 0 30px 0' }}>
                Data Ingestion Pipeline
              </h2>
              <DataIngestion />
            </>
          )}
          
          {activeTab === 'query' && (
            <>
              <h2 style={{ fontSize: '2rem', color: '#1F4E78', marginBottom: '30px', textAlign: 'center', margin: '0 0 30px 0' }}>
                Query Processing Flow
              </h2>
              <QueryFlow />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
