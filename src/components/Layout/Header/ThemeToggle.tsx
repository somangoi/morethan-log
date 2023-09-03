import { CONFIG } from "@/site.config"
import { ThemeType } from "@/src/types"
import { getTheme } from "@hooks/useThemeEffect"
import React, { useEffect, useState } from "react"
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"

type Props = {}

const ThemeToggle: React.FC<Props> = () => {
  const [theme, setTheme] = useState<ThemeType>()

  useEffect(() => {
    if (typeof window === "object") {
      setTheme(getTheme())
    }
  }, [])

  const handleClick = () => {
    const changedTheme = getTheme() !== "dark" ? "dark" : "light"
    localStorage.setItem("theme", changedTheme)
    setTheme(changedTheme)
    changedTheme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark")
  }

  if (CONFIG.blog.theme !== "auto") return null
  return (
    <div
      className={`cursor-pointer dark:text-gray-50 flex align-middle justify-center`}
      onClick={handleClick}
    >
      <Classic duration={750} toggled={theme === "dark"} />
    </div>
  )
}

export default ThemeToggle
