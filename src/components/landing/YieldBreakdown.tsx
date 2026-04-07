// import React from 'react';
import { motion } from 'framer-motion';

export const YieldBreakdown = () => {
  const data = [
    { label: 'Users', percentage: 80, color: '#10B981', description: 'Distributed directly to smUSD holders' },
    { label: 'Protocol', percentage: 10, color: '#8B5CF6', description: 'Reinvested for protocol growth and development' },
    { label: 'Treasury', percentage: 10, color: '#6366F1', description: 'Allocated to insurance fund and operational reserves' },
  ];

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  
  let currentOffset = 0;
  const segments = data.map((item) => {
    const strokeLength = (item.percentage / 100) * circumference;
    const segment = {
      ...item,
      strokeDasharray: `${strokeLength} ${circumference - strokeLength}`,
      strokeDashoffset: -currentOffset,
    };
    currentOffset += strokeLength;
    return segment;
  });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Where your yield comes from
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Transparent, sustainable yield generation across multiple layers of DeFi.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          <div className="relative w-[300px] h-[300px] flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="transparent"
                stroke="#1E1E2E"
                strokeWidth="20"
              />
              {segments.map((segment, index) => (
                <motion.circle
                  key={segment.label}
                  cx="100"
                  cy="100"
                  r={radius}
                  fill="transparent"
                  stroke={segment.color}
                  strokeWidth="20"
                  strokeDasharray={segment.strokeDasharray}
                  initial={{ strokeDashoffset: circumference }}
                  whileInView={{ strokeDashoffset: segment.strokeDashoffset }}
                  transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  strokeLinecap="round"
                />
              ))}
            </svg>
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-5xl font-bold text-[#10B981]">80%</span>
              <span className="text-sm text-text-muted mt-1 uppercase tracking-wider font-semibold">to holders</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full max-w-md">
            {data.map((item) => (
              <div key={item.label} className="glass p-6 rounded-2xl flex items-start gap-4 hover:bg-surface-light transition-colors duration-300">
                <div 
                  className="w-4 h-4 rounded-full mt-1 shrink-0 shadow-lg"
                  style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}80` }}
                />
                <div>
                  <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                    {item.label}
                    <span className="text-sm font-mono bg-surface px-2 py-0.5 rounded text-text-secondary">
                      {item.percentage}%
                    </span>
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
