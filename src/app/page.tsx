import Image from 'next/image'
import Projects from '../components/projects'

import dynamic from 'next/dynamic';

const PdfViewer = dynamic(
  () => import('../components/pdfviewer'),
  { ssr: false }
);

import '../styles/font.css'

export default function Home() {
  return (
    <main>
      <header className="bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="hidden sm:flex sm:flex-1 text-2xl font-semibold">
          Eric Zhou
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:justify-end space-x-6">
          <a href="#projects" className="text-lg font-medium leading-6 text-gray-900 hover:text-indigo-500">
            Projects
          </a>
          <a href="#contact" className="text-lg font-medium leading-6 text-gray-900 hover:text-indigo-500">
            Contact
          </a>
          <a href="#resume" className="text-lg font-medium leading-6 text-gray-900 hover:text-indigo-500">
            Resume
          </a>
        </div>
      </nav>
      <section className="mx-auto max-w-6xl py-12 px-4 lg:px-8" id="about">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="rounded-full bg-gradient-to-tl from-emerald-500 via-sky-400 to-indigo-500 shadow-lg p-[3px] ring-[5px] ring-sky-500/10">
            <div className="w-64 h-64 p-px rounded-full overflow-hidden">
              <Image src="/images/headshot.jpg" alt="Eric's big ass head" width={256} height={256} className="rounded-full" />
            </div>
          </div>
          <div className="lg:w-2/3 mt-6 lg:mt-0 mt-8">
            <h2 className="text-5xl font-bold" style={{ fontFamily: 'Sfizia Italic' }}>Hi, I&apos;m Eric.</h2>
            <p className="mt-4 text-gray-600">
              I&apos;m a junior studying Computer Science at UCLA who loves building things and solving problems with code. <br></br><br></br>
              
              Through the classes I&apos;ve taken, I&apos;ve gained a solid foundation in various computer science domains including algorithms, networking, machine learning, computer architecture, and software construction. 
              I also worked as a Software Engineer Intern at Scripps Research where my role spanned the whole tech stack, from creating interactive webpages with React.js, to stamping out bugs and 
              adding new features to our backend API with Node.js, to making the build process more efficient and flexible with Docker. <br></br><br></br>

              I&apos;m currently looking for a new role as a Software Engineer Intern. <span className="font-semibold">Hire me?</span> <br></br>
            </p>

            <div className="flex items-center space-x-6 mt-6">
              <a
                href="https://www.instagram.com/ericzhou81/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkInstagram flex items-center"
              >
                <Image
                  src="/images/instagram.svg"
                  alt="Instagram Logo"
                  width={16}
                  height={16}
                />
                <span className="ml-1">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/eric-zhouu/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkLinkedIn flex items-center"
              >
                <Image
                  src="/images/linkedin.svg"
                  alt="LinkedIn Logo"
                  width={16}
                  height={16}
                />
                <span className="ml-1">LinkedIn</span>
              </a>
              <a
                href="https://www.linkedin.com/in/eric-zhouu/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkGithub flex items-center hover:text-indigo-500"
              >
                <Image
                  src="/images/github.svg"
                  alt="Github Logo"
                  width={16}
                  height={16}
                />
                <span className="ml-1">Github</span>
              </a>

              <a
                href="/ResumeEricZhou.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="linkGithub flex items-center hover:text-indigo-500"
              >
                <Image
                  src="/images/resume.svg"
                  alt="File Icon"
                  width={16}
                  height={16}
                />
                <span className="ml-1">Resume</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="resume" className="mx-auto max-w-6xl py-8 px-4 lg:px-8">
        <h2 className="text-3xl font-semibold mb-4">
          Resume
        </h2>
        <PdfViewer url="./ResumeEricZhou.pdf" />
        <a href="/ResumeEricZhou.pdf" className="hover:text-indigo-500 hover:underline">
          Download PDF
        </a>
      </section>

      <section id="contact" className="mx-auto max-w-6xl py-8 px-4 lg:px-8">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="text-gray-600">Feel free to email me at <a href="mailto:ezhou23@ucla.edu" className="hover:text-indigo-500">ezhou23@ucla.edu</a> or check out my profiles with the buttons at the bottom of this page.</p>
      </section>

      <footer className="mx-auto max-w-6xl p-8 mt-8">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-lg">&copy; Eric Zhou</p>
          <div className="flex items-center space-x-6">
            <a href="https://www.instagram.com/ericzhou81" target="_blank" rel="noopener noreferrer" className="linkInstagram flex items-center">
              <Image src="/images/instagram.svg" alt="Instagram Logo" width={32} height={32} />
            </a>
            <a href="https://www.linkedin.com/in/eric-zhouu" target="_blank" rel="noopener noreferrer" className="linkLinkedIn flex items-center">
              <Image src="/images/linkedin.svg" alt="LinkedIn Logo" width={32} height={32} />
            </a>
            <a href="https://github.com/ericz1803" target="_blank" rel="noopener noreferrer" className="linkGithub flex items-center">
              <Image src="/images/github.svg" alt="GitHub Logo" width={32} height={32} />
            </a>
          </div>
        </div>
      </footer>
      </header>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
    </main>
  )
}
