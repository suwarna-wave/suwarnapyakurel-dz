"use client"

import { useEffect, useState } from "react"

/** A brief, quiet intro shown on every load: types "hello, world" and ends with a smile. */
export function IntroScreen() {
  const [visible, setVisible] = useState(true)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const leaveDelay = reduced ? 100 : 1900
    const removeDelay = reduced ? 300 : 2500

    const leave = window.setTimeout(() => {
      setLeaving(true)
      // Notify listeners (like ANAIS popup) that intro is done and exiting
      window.dispatchEvent(new CustomEvent("intro-done"))
    }, leaveDelay)

    const remove = window.setTimeout(() => setVisible(false), removeDelay)
    return () => {
      window.clearTimeout(leave)
      window.clearTimeout(remove)
    }
  }, [])

  if (!visible) return null

  return (
    <div className={leaving ? "intro intro-out" : "intro"} role="status" aria-label="Loading Suwarna Pyakurel’s portfolio">
      <div className="intro-inner">
        <span className="intro-mark" aria-hidden="true">sp.</span>
        <p className="intro-line" aria-hidden="true">
          <span className="intro-typed">hello, world</span>
          <span className="intro-smile">:)</span>
        </p>
      </div>
    </div>
  )
}
