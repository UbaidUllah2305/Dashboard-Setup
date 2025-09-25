import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function useKeyboardShortcuts() {
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only trigger shortcuts if not in an input field
      const target = event.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true') {
        return
      }

      // Navigation shortcuts
      if (event.metaKey || event.ctrlKey) {
        switch (event.key) {
          case '1':
            event.preventDefault()
            router.push('/audience')
            break
          case '2':
            event.preventDefault()
            router.push('/security')
            break
          case '3':
            event.preventDefault()
            router.push('/engagement')
            break
          case '4':
            event.preventDefault()
            router.push('/analytics')
            break
          case 'h':
          case 'Home':
            event.preventDefault()
            router.push('/')
            break
        }
      }

      // Quick navigation without modifier keys
      switch (event.key) {
        case '?':
          event.preventDefault()
          // Could show keyboard shortcuts help modal
          console.log('Keyboard shortcuts: Cmd+1-4 for navigation, Cmd+H for home, Cmd+B for sidebar')
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [router])
}