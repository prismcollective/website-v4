import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-white text-center dark:bg-neutral-900">
      <div className="flex gap-4">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-16 w-16" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-semibold text-neutral-900 dark:text-neutral-100">
        Vite + React + Tailwind
      </h1>
      <button
        type="button"
        className="rounded-lg bg-neutral-900 px-4 py-2 font-medium text-white transition hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
      <p className="text-neutral-500 dark:text-neutral-400">
        Edit <code className="rounded bg-neutral-100 px-1.5 py-0.5 dark:bg-neutral-800">src/App.jsx</code> and save to test HMR
      </p>
    </div>
  )
}

export default App
