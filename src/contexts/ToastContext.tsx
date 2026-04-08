import { createContext, useContext, useState, useCallback, useMemo } from 'react'
import ToastStack, { type ToastEntry, type ToastIntent } from '@/components/ui/Toast'

type ToastAdd = (entry: { title?: string; message: string; intent?: ToastIntent; duration?: number }) => string

interface ToastAPI {
  success: (message: string, title?: string, duration?: number) => void
  error: (message: string, title?: string, duration?: number) => void
  info: (message: string, title?: string, duration?: number) => void
  // internal use (rarely needed)
  _add?: ToastAdd
  _remove?: (id: string) => void
}

const ToastContext = createContext<ToastAPI | null>(null)

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}

export const ToastProvider: React.FC<{ children: React.ReactNode; position?: 'top-right' | 'bottom-right' }> = ({
  children,
  position = 'top-right',
}) => {
  const [toasts, setToasts] = useState<ToastEntry[]>([])

  const remove = useCallback((id: string) => {
    setToasts((s) => s.filter((t) => t.id !== id))
  }, [])

  const add: ToastAdd = useCallback(({ title, message, intent = 'info', duration = 4500 }) => {
    const id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
    const entry: ToastEntry = { id, title, message, intent, duration }
    setToasts((s) => [entry, ...s]) // newest on top
    // schedule removal
    if (duration > 0) {
      setTimeout(() => remove(id), duration)
    }
    return id
  }, [remove])

  const api = useMemo<ToastAPI>(() => ({
    success: (message, title, duration) => add({ title, message, intent: 'success', duration }),
    error: (message, title, duration) => add({ title, message, intent: 'error', duration }),
    info: (message, title, duration)  => add({ title, message, intent: 'info', duration }),
    _add: add,
    _remove: remove,
  }), [add, remove])

  return (
    <ToastContext.Provider value={api}>
      {children}
      <ToastStack toasts={toasts} onDismiss={remove} position={position} />
    </ToastContext.Provider>
  )
}