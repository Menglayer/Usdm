import { useCountUp } from 'react-countup'
import { useRef } from 'react'

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
  separator?: string
  className?: string
}

export function AnimatedCounter({
  end,
  duration = 2,
  prefix = '',
  suffix = '',
  decimals = 0,
  separator = ',',
  className = '',
}: AnimatedCounterProps) {
  const countUpRef = useRef<HTMLSpanElement>(null!)

  useCountUp({
    ref: countUpRef as React.RefObject<HTMLElement>,
    end,
    duration,
    prefix,
    suffix,
    decimals,
    separator,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  })

  return <span ref={countUpRef} className={className} />
}
