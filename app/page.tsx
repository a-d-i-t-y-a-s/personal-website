import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-12">
      <div className="flex z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex box-border border m-4 border-1 border-black p-4 rounded-md">
        <div className="flex h-6 w-full items-end justify-between ">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0"
            href="https://github.com/a-d-i-t-y-a-s"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <Image
              src="/github-mark.svg"
              alt="Github Logo"
              className="dark:invert"
              width={25}
              height={6}
              priority
            /> Github
          </a>

          <a
            className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0"
            href="https://www.linkedin.com/in/aditya-shah-2bb408250/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <Image
              src="/linkedin.svg"
              alt="Linkedin Logo"
              className="dark:invert"
              width={25}
              height={6}
              priority
            /> LinkedIn
          </a>

          <a
            className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0"
            href="https://www.instagram.com/aditya.shahh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <Image
              src="/instagram.svg"
              alt="instagram Logo"
              className="dark:invert"
              width={25}
              height={6}
              priority
            /> Instagram
          </a>

          <a
            className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0"
          >
            {' '}
            <Image
              src="/gmail.svg"
              alt="gmail Logo"
              className="dark:invert"
              width={25}
              height={6}
              priority
            /> adityakeshary@gmail.com
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      </div>

      <div className='flex items-center justify-center mb-40'>
      <p className='text-4xl'>
          Aditya Shah's Portfolio
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
      
      <Link href="/projects">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            Projects <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            This page will have an overview of all my projects.
          </p>
        </div>
      </Link>

      <Link href="/about">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            About <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Who I am and my interests. 
          </p>
        </div>
      </Link>

    </div>
    </main>
  )
}
