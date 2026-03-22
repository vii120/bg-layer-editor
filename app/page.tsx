'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { CssEditor } from './CssEditor'
import { PreviewCanvas } from './_components/PreviewCanvas'
import { EXAMPLES } from '@/lib/examples'
import { useCssStore } from '@/lib/store'
import { parseCssInput } from '@/lib/parseCss'

export default function Home() {
  const { css, setCss } = useCssStore()
  const hasInput = css.trim().length > 0
  const router = useRouter()

  function handleAnalyse() {
    const layers = parseCssInput(css)
    if (!layers) {
      toast.error('No background properties found in the input.')
      return
    }
    router.push('/edit')
  }

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink">
      <main className="flex-1 max-w-5xl w-full mx-auto px-8 py-16 space-y-16">
        {/* Intro */}
        <div className="text-center flex flex-col items-center gap-4">
          <h1 className="text-3xl md:text-[2.5rem] font-semibold tracking-tight leading-relaxed relative">
            Break down
            <br />
            CSS backgrounds,
            <br />
            <span className="relative z-1 px-2  before:absolute before:inset-0 before:rounded-sm before:bg-linear-[80deg,var(--color-blue-300),var(--color-blue-100)_5%_30%,var(--color-blue-200)_50%_95%,var(--color-blue-400)] before:-skew-1 before:-z-1">
              layer by layer
            </span>
            {/* Deco */}
            <div className="absolute -top-5 right-9/10 w-10 aspect-square bg-conic-[from_270deg_at_bottom_2px_right_2px,transparent_25%,var(--color-amber-400)_0] bg-size-[15px_15px] bg-center -rotate-15 opacity-75 transform-[translateZ(0)]"></div>
            <div className="absolute top-1/3 left-full ml-6 w-10 aspect-square bg-radial-[circle,var(--color-lime-500)_30%,transparent_0] bg-size-[15px_15px] bg-center rotate-15 opacity-75 transform-[translateZ(0)]"></div>
            <div className="absolute bottom-0 right-full w-[45px] aspect-square bg-conic-[var(--color-red-400)_25%,transparent_25%_50%,var(--color-red-400)_50%_75%,transparent_75%] bg-size-[30px_30px] -rotate-20 opacity-75 transform-[translateZ(0)]"></div>
          </h1>
          <p className="text-lg leading-relaxed text-ink-muted">
            Split, visualize, and edit every CSS background layer with ease.
          </p>
        </div>

        {/* Editor */}
        <div>
          <div className="grid md:grid-cols-2 gap-5 mb-4">
            {/* Input */}
            <div className="flex flex-col gap-2">
              <span className="font-semibold uppercase tracking-wider text-ink-muted">
                CSS input
              </span>
              <CssEditor
                value={css}
                onChange={setCss}
                placeholder={`background: linear-gradient(...),\n  radial-gradient(...);\nbackground-size: 100px 100px;`}
                className="h-64 rounded-md overflow-hidden bg-surface border border-line text-ink"
              />
            </div>

            {/* Preview */}
            <div className="flex flex-col gap-2">
              <span className="font-semibold uppercase tracking-wider text-ink-muted">
                Preview
              </span>
              <div className="h-64 rounded-md overflow-hidden relative border border-line">
                {hasInput ? (
                  <PreviewCanvas
                    css={css}
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-sm select-none text-ink-muted">
                    Preview appears here
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            disabled={!hasInput}
            onClick={handleAnalyse}
            className="block mx-auto md:mx-0 px-5 py-2.5 rounded-full text-sm font-medium transition-colors border bg-surface text-ink-muted border-line cursor-not-allowed enabled:bg-indigo-400 enabled:text-white enabled:border-transparent enabled:cursor-pointer"
          >
            Analyse layers →
          </button>
        </div>

        {/* Examples */}
        <section id="examples">
          <p className="font-semibold uppercase tracking-wider text-ink-muted mb-5">
            Try an example
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {EXAMPLES.map((ex) => (
              <button
                key={ex.id}
                onClick={() => setCss(ex.css)}
                className="text-left overflow-hidden transition-colors group border border-line rounded-md cursor-pointer"
              >
                <div className="w-full aspect-video relative overflow-hidden">
                  <PreviewCanvas
                    css={ex.css}
                    className="absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-103"
                  />
                </div>
                <div className="px-3.5 py-3 transition-colors border-t border-line bg-canvas">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="text-sm font-medium">{ex.label}</p>
                    {ex.note && (
                      <span className="text-xs text-ink-muted shrink-0">
                        {ex.note}
                      </span>
                    )}
                  </div>
                  <a
                    href={ex.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs text-ink-muted underline underline-offset-2 hover:text-ink transition-colors"
                  >
                    via {ex.source.name}
                  </a>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>

      <footer className="max-w-5xl w-full mx-auto px-8 py-6 mt-auto border-t border-line text-ink-muted flex items-center justify-end text-sm">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/vii120/css-bg-layers"
            target="_blank"
            className="underline underline-offset-2 hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <span>
            Created by{' '}
            <a
              href="https://www.vivitseng.com/"
              target="_blank"
              className="underline underline-offset-2 hover:text-ink transition-colors"
            >
              Vivi Tseng
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}
