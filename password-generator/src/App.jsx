import { useState, useCallback, useEffect, useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import './App.css'

function App() {
  const [passwordLength, setPasswordLength] = useState(12)
  const [isNumbersAllowed, setIsNumbersAllowed] = useState(true)
  const [isSpecialCharactersAllowed, setIsSpecialCharactersAllowed] = useState(true)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (isNumbersAllowed) str += "0123456789"
    if (isSpecialCharactersAllowed) str += "!@#$%^&*()_+"

    for (let i = 0; i < passwordLength; i++) {
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [passwordLength, isNumbersAllowed, isSpecialCharactersAllowed])

  const copyPasswordToClipboard = () => {
    if (password) {
      window.navigator.clipboard.writeText(password)
      passwordRef.current?.select()
      toast.success('Copied!', {
        position: "top-center",
        duration: 2000,
      })
    }
  }

  useEffect(() => {
    generatePassword()
  }, [passwordLength, isNumbersAllowed, isSpecialCharactersAllowed])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4">
      <Toaster /> {/* Toast Container */}
      <div className="w-full max-w-md bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-gray-700 text-orange-300">
        <h1 className="text-2xl font-bold text-center text-white mb-6">🔐 Password Generator</h1>

        <div className="flex items-center bg-white/10 rounded-lg overflow-hidden mb-5">
          <input
            type="text"
            value={password}
            className="w-full px-4 py-2 bg-transparent text-white placeholder-gray-400 outline-none"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition"
          >
            Copy
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Password Length: <strong>{passwordLength}</strong></label>
          <input
            type="range"
            min={6}
            max={64}
            value={passwordLength}
            onChange={(e) => setPasswordLength(parseInt(e.target.value))}
            className="w-full accent-orange-500"
          />
        </div>

        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={isNumbersAllowed}
              onChange={() => setIsNumbersAllowed((prev) => !prev)}
              className="accent-orange-500"
            />
            Include Numbers
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={isSpecialCharactersAllowed}
              onChange={() => setIsSpecialCharactersAllowed((prev) => !prev)}
              className="accent-orange-500"
            />
            Include Special Characters
          </label>
        </div>
      </div>
    </div>
  )
}

export default App
