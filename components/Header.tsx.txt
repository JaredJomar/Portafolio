import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-card-background shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary-color">JJJ Projects</div>
          <ul className="flex space-x-8">
            <li>
              <Link href="#projects" className="text-text-color hover:text-primary-color transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/JaredJomar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-color hover:text-primary-color transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

