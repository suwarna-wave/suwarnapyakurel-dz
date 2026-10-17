"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Linkedin, Sparkles, X } from "lucide-react"
import profile from "@/content/profile.json"

export function AnaisPopup() {
  const [openPoster, setOpenPoster] = useState(false)
  const [showCard, setShowCard] = useState(false)
  const closeButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    let triggered = false
    const handleIntroDone = () => {
      if (triggered) return
      triggered = true
      // Display right as the intro finishes its lift/fade
      window.setTimeout(() => setShowCard(true), 250)
    }

    window.addEventListener("intro-done", handleIntroDone)

    // Fallback: guaranteed to trigger around 2200ms if event didn't fire
    const fallbackTimer = window.setTimeout(handleIntroDone, 2200)

    return () => {
      window.removeEventListener("intro-done", handleIntroDone)
      window.clearTimeout(fallbackTimer)
    }
  }, [])

  useEffect(() => {
    if (!showCard && !openPoster) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (openPoster) {
          setOpenPoster(false)
        } else {
          setShowCard(false)
        }
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [showCard, openPoster])

  const dismissCard = () => {
    setShowCard(false)
  }

  const closeFullPoster = () => {
    setOpenPoster(false)
  }

  return (
    <>
      {/* Centered Apply Here popup modal */}
      {showCard && !openPoster && (
        <div className="anais-card-overlay" onClick={dismissCard}>
          <aside
            className="anais-card"
            aria-label="ANAIS 2026 Announcement"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={dismissCard}
              aria-label="Dismiss ANAIS notice"
              className="anais-card-close"
            >
              <X className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => setOpenPoster(true)}
              aria-label="View full ANAIS announcement poster"
              className="anais-card-thumb"
              title="Click to view full poster"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.anais.poster}
                alt="ANAIS 2026 Student Ambassador"
                width={819}
                height={1024}
              />
            </button>

            <div className="min-w-0 flex-1">
              <span className="anais-card-kicker">
                <Sparkles className="h-3 w-3" /> Ambassador Notice
              </span>
              <p className="anais-card-title">Apply for ANAIS 2026</p>
              <p className="anais-card-copy">
                Time is racing out! Connect with me on LinkedIn for queries or visit to apply.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <a
                  href={profile.anais.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anais-card-apply"
                >
                  Apply here <ArrowUpRight className="h-3.5 w-3.5" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a
                  href={profile.anais.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anais-card-link"
                >
                  <Linkedin className="h-3.5 w-3.5 mr-1 inline" />
                  LinkedIn
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Expanded Full Poster View */}
      {openPoster && (
        <div className="anais-overlay" onClick={closeFullPoster}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="anais-title"
            className="anais-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButton}
              onClick={closeFullPoster}
              aria-label="Close poster view"
              className="anais-close"
            >
              <X className="h-4 w-4" />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.anais.poster}
              alt="I'm selected as Student Ambassador for ANAIS 2026 — Suwarna Pyakurel, IOE Purwanchal Campus"
              width={819}
              height={1024}
              className="anais-poster"
            />
            <div className="anais-body">
              <h2 id="anais-title" className="anais-title">
                Time to apply for ANAIS — it’s racing out!
              </h2>
              <p className="anais-copy">
                Connect with me on LinkedIn for any queries, or visit the official website to apply.
              </p>
              <div className="anais-actions">
                <a
                  href={profile.anais.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anais-primary"
                >
                  Visit anais.naamii.org.np <ArrowUpRight className="h-4 w-4" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a
                  href={profile.anais.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anais-secondary"
                >
                  <Linkedin className="h-4 w-4" /> Connect on LinkedIn
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
              <button onClick={closeFullPoster} className="anais-skip">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
