import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Contact from "./components/Contact"
import FloatingNav from "./components/floating-nav"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Dynamic background */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900" />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/30 to-transparent dark:via-blue-700/30 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-200/30 to-transparent dark:via-purple-700/30 animate-pulse delay-700" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 dark:opacity-20" />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-50 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl opacity-50 animate-float animation-delay-2000" />

        {/* Subtle particles */}
        <div className="absolute inset-0 bg-[url('/particles.svg')] bg-repeat opacity-20 animate-move-bg" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <FloatingNav />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </div>
    </main>
  )
}

