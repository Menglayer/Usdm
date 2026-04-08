import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, XCircle, Info as InfoIcon, X } from 'lucide-react'

export type ToastIntent = 'success' | 'error' | 'info'

export type ToastEntry = {
  id: string
  title?: string
  message: string
  intent?: ToastIntent
  duration?: number
}

const containerVariants = {
  initial: { opacity: 0, y: -8, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -8, scale: 0.98 },
}

function IconForIntent({ intent }: { intent?: ToastIntent }) {
  if (intent === 'success') return <CheckCircle className="text-green-400" size={18} />
  if (intent === 'error') return <XCircle className="text-rose-400" size={18} />
  return <InfoIcon className="text-sky-400" size={18} />
}

export default function ToastStack({
  toasts,
  onDismiss,
  position = 'top-right',
}: {
  toasts: ToastEntry[]
  onDismiss: (id: string) => void
  position?: 'top-right' | 'bottom-right'
}) {
  const containerPosition =
    position === 'top-right'
      ? 'top-6 right-6'
      : 'bottom-6 right-6'

  return (
    // small portal-like container at top-right
    <div className={`fixed ${containerPosition} z-50 flex flex-col gap-3 items-end max-w-sm`}>
      <AnimatePresence initial={false}>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            layout
            initial="initial"
            animate="animate"
            exit="exit"
            variants={containerVariants}
            transition={{ duration: 0.18 }}
            className="w-80"
          >
            <div
              className="glass-strong backdrop-blur-md bg-white/6 border border-white/10 rounded-2xl p-3 flex gap-3 items-start shadow-lg"
              style={{
                boxShadow: '0 8px 30px rgba(99,102,241,0.09)',
                borderImage: 'linear-gradient(90deg, rgba(124,58,237,0.18), rgba(99,102,241,0.08)) 1',
              }}
              role="status"
              aria-live="polite"
            >
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-white/3 to-white/6 border border-white/6">
                  <IconForIntent intent={t.intent} />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                {t.title && <div className="text-sm font-semibold text-text truncate">{t.title}</div>}
                <div className="text-sm text-text-muted mt-0.5 break-words">{t.message}</div>
              </div>

              <button
                onClick={() => onDismiss(t.id)}
                className="ml-3 p-1 rounded-md hover:bg-white/6 transition-colors text-text-muted"
                aria-label="Dismiss toast"
                title="Dismiss"
                type="button"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
