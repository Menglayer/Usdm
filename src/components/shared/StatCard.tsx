import { cn } from '@/lib/utils'
import { AnimatedCounter } from './AnimatedCounter'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { itemVariants } from '@/components/ui/animations'

interface StatCardProps {
  title: string
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  subtitle?: string
  icon?: ReactNode
  borderColor?: string
  className?: string
}

export function StatCard({
  title,
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  subtitle,
  icon,
  borderColor = 'border-l-primary',
  className,
}: StatCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'glass-strong rounded-xl p-5 border-l-[3px] transition-all duration-300 hover:glow-primary cursor-pointer',
        borderColor,
        className,
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-text-muted">{title}</span>
        {icon && <span className="text-text-muted">{icon}</span>}
      </div>
      <AnimatedCounter
        end={value}
        prefix={prefix}
        suffix={suffix}
        decimals={decimals}
        className="text-2xl font-bold font-mono tabular-nums text-text"
      />
      {subtitle && (
        <p className="text-xs text-text-muted mt-1">{subtitle}</p>
      )}
    </motion.div>
  )
}
