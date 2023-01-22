import React, { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const SidebarPortal = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  return mounted
    ? createPortal(children,
      document.querySelector("#navbar") as HTMLElement)
    : null
}

export default SidebarPortal
