"use client";
import Link from "next/link"
import { useTheme } from "../contexts/ThemeContext"

export default function AboutMe() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 max-w-6xl mx-auto`}>
      <Link href="/" className={`${theme.primary} hover:underline mb-4 sm:mb-6 md:mb-8 inline-block text-sm sm:text-base`}>
        ← Back to Home
      </Link>
      <h1 className={`text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8 ${theme.primary}`}>About Me</h1>
      
      <section className={`mb-6 sm:mb-8 md:mb-10 ${theme.foreground}`}>
        <h2 className={`text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 md:mb-6 ${theme.primary}`}>Who I Am</h2>
        <p className="mb-3 sm:mb-4 text-sm sm:text-base">
          With a passion for creating remarkable web solutions, I possess extensive experience in developing cutting-edge applications with robust functionality. I can bring fresh ideas and stay updated with the latest trends
        </p>
        <p className="mb-3 sm:mb-4 text-sm sm:text-base">
          When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
        </p>
      </section>
      
      <section className={`mb-6 sm:mb-8 md:mb-10 ${theme.foreground}`}>
        <h2 className={`text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 md:mb-6 ${theme.primary}`}>Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <h3 className={`text-lg sm:text-xl mb-2 sm:mb-3 ${theme.primary}`}>Backend</h3>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 text-sm sm:text-base">
              <li>Node.js & Express.js</li>
              <li>Python & Django</li>
              <li>NestJS</li>
              <li>Laravel</li>
              <li>Spring Boot</li>
              <li>Ruby on Rail</li>
            </ul>
          </div>
           <div>
            <h3 className={`text-lg sm:text-xl mb-2 sm:mb-3 ${theme.primary}`}>Database</h3>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 text-sm sm:text-base">
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>SQLite</li>
              <li>Oracle Database</li>
            </ul>
          </div>
          <div>
            <h3 className={`text-lg sm:text-xl mb-2 sm:mb-3 ${theme.primary}`}>Frontend</h3>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 text-sm sm:text-base">
              <li>React & Next.js</li>
              <li>Angualr</li>
              <li>Vue & Nuxt.js</li>
              <li>Inertia.js</li>
            </ul>
          </div>
          <div>
            <h3 className={`text-lg sm:text-xl mb-2 sm:mb-3 ${theme.primary}`}>UI</h3>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 text-sm sm:text-base">
              <li>BootStrap</li>
              <li>Tailwind CSS</li>
              <li>MUI</li>
              <li>Ant Design</li>
              <li>Styled Component</li>
              <li>Emotion CSS</li>
            </ul>
          </div>
          <div>
            <h3 className={`text-lg sm:text-xl mb-2 sm:mb-3 ${theme.primary}`}>Test Library</h3>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 text-sm sm:text-base">
              <li>Jest</li>
              <li>Cypress</li>
              <li>Testing Library</li>
              <li>Chai</li>
            </ul>
          </div>
          <div>
            <h3 className={`text-lg sm:text-xl mb-2 sm:mb-3 ${theme.primary}`}>CI/CD Tools</h3>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 text-sm sm:text-base">
              <li>CircleCI</li>
              <li>Docker</li>
              <li>Jenkins</li>
              <li>Azure DevOps</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className={`mb-6 sm:mb-8 md:mb-10 ${theme.foreground}`}>
        <h2 className={`text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 md:mb-6 ${theme.primary}`}>Education & Certifications</h2>
        <div className="space-y-3 sm:space-y-4">
          <div>
            <h3 className={`text-lg sm:text-xl ${theme.primary}`}>Bachelor of Engineering - BE, Computer Science</h3>
            <p className="text-xs sm:text-sm opacity-80">Ladoke Akintola University of Technology, 2012-2026</p>
          </div>
          <div>
            <h3 className={`text-lg sm:text-xl ${theme.primary}`}>Master of Engineering - MEng, Computer Science</h3>
            <p className="text-xs sm:text-sm opacity-80">Ladoke Akintola University of Technology, 2016-2021</p>
          </div>
          <div>
            <h3 className={`text-lg sm:text-xl ${theme.primary}`}>AWS Certified Solutions Architect</h3>
            <p className="text-xs sm:text-sm opacity-80">Amazon Web Services, 2023</p>
          </div>
                    <div>
            <h3 className={`text-lg sm:text-xl ${theme.primary}`}>Frontend Developer(React)</h3>
            <a href="https://www.hackerrank.com/certificates/019e68ace521" className="text-xs sm:text-sm opacity-80">HackerRank, 2024</a>
          </div>
        </div>
      </section>
      
      <section className={`${theme.foreground}`}>
        <h2 className={`text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 md:mb-6 ${theme.primary}`}>Get In Touch</h2>
        <p className="mb-4 text-sm sm:text-base">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the platforms below.
        </p>
        <div className="flex space-x-4">
          <a href="https://github.com/guesmia1228" target="_blank" rel="noopener noreferrer" className={`${theme.primary} text-sm sm:text-base hover:underline`}>GitHub</a>
          <a href="https://www.linkedin.com/in/guesmia-abdelmadjid-6a0103302/" target="_blank" rel="noopener noreferrer" className={`${theme.primary} text-sm sm:text-base hover:underline`}>LinkedIn</a>
          <a href="https://www.upwork.com/freelancers/guesmiaabdelmadjid1228?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~014a199918fcee1c1f%2Fprofile" className={`${theme.primary} text-sm sm:text-base hover:underline`}>Upwork</a>
          <a href="mailto:guesmia.tech@gmail.com" className={`${theme.primary} text-sm sm:text-base hover:underline`}>Email</a>
        </div>
      </section>
    </div>
  )
} 