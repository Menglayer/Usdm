import CountUp from 'react-countup'

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
  return (
    <CountUp
      end={end}
      duration={duration}
      prefix={prefix}
      suffix={suffix}
      decimals={decimals}
      separator={separator}
      enableScrollSpy
      scrollSpyOnce
    >
      {({ countUpRef }) => <span ref={countUpRef} className={className} />}
    </CountUp>
  )
}
