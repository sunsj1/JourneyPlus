import { motion } from 'framer-motion';
import { Fuel, Clock, IndianRupee, CloudRain, AlertTriangle } from 'lucide-react';
import { slideInRight } from '../../lib/animations';

export function PhoneMockup() {
  return (
    <motion.div
      variants={slideInRight}
      initial="hidden"
      animate="visible"
      className="relative mx-auto w-full max-w-[280px] lg:max-w-[300px]"
    >
      {/* Decorative route line */}
      <svg
        className="pointer-events-none absolute -left-16 -top-8 h-full w-[200%] opacity-[0.06]"
        viewBox="0 0 400 600"
        fill="none"
        aria-hidden
      >
        <path
          d="M20 500 Q100 400 150 350 T280 200 T360 80"
          stroke="#1B5E20"
          strokeWidth="3"
          strokeDasharray="8 8"
        />
      </svg>

      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.5rem] border-[6px] border-text-primary bg-text-primary shadow-elevated">
        <div className="absolute left-1/2 top-3 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-text-primary" />

        <div className="flex h-full flex-col bg-background">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-10 pb-2">
            <span className="text-[10px] font-semibold text-text-primary">9:41</span>
            <span className="text-[10px] font-bold text-primary">Trip</span>
            <div className="flex gap-1">
              <div className="h-2 w-3 rounded-sm bg-text-primary" />
              <div className="h-2 w-4 rounded-sm bg-text-primary" />
            </div>
          </div>

          {/* Alert banner */}
          <div className="mx-3 mt-2 flex items-center gap-2 rounded-xl bg-warning-surface px-3 py-2">
            <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-warning" strokeWidth={1.5} />
            <p className="text-[9px] font-semibold leading-tight text-text-primary">
              Last trusted pump for next 68 km
            </p>
          </div>

          {/* Stat cards grid */}
          <div className="grid grid-cols-2 gap-2 p-3">
            <StatCard icon={Clock} label="ETA" value="4h 12m" />
            <StatCard icon={IndianRupee} label="Tolls" value="₹420" />
            <StatCard icon={Fuel} label="Fuel" value="2 stops" />
            <StatCard icon={CloudRain} label="Weather" value="Clear" />
          </div>

          {/* Route preview */}
          <div className="mx-3 flex-1 overflow-hidden rounded-xl bg-primary-surface">
            <div className="p-3">
              <p className="text-[9px] font-semibold uppercase tracking-wider text-text-tertiary">
                Mumbai → Pune
              </p>
              <p className="mt-1 text-[11px] font-bold text-text-primary">
                148 km · Light traffic
              </p>
            </div>
            <svg className="w-full" viewBox="0 0 200 80" aria-hidden>
              <path
                d="M10 60 Q60 20 100 40 T190 15"
                stroke="#1B5E20"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="10" cy="60" r="4" fill="#1B5E20" />
              <circle cx="190" cy="15" r="4" fill="#00897B" />
            </svg>
          </div>

          {/* Bottom nav hint */}
          <div className="flex justify-around border-t border-border-light bg-surface px-2 py-3">
            {['Plan', 'Discover', 'Trip', 'Profile'].map((tab, i) => (
              <span
                key={tab}
                className={`text-[8px] font-semibold ${
                  i === 2 ? 'text-primary' : 'text-text-tertiary'
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-surface p-2.5 shadow-card">
      <Icon className="h-3.5 w-3.5 text-primary" strokeWidth={1.5} />
      <p className="mt-1 text-[8px] font-medium text-text-tertiary">{label}</p>
      <p className="text-[11px] font-bold text-text-primary">{value}</p>
    </div>
  );
}
