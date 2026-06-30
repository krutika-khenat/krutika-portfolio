import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Krutika.dev
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-300">
          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-purple-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-purple-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-5 text-2xl text-gray-300">

          <a
            href="https://github.com/krutika-khenat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/krutika-khenat-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:krutikakhenat9@gmail.com"
            className="hover:text-purple-400 transition duration-300"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>
    </header>
  );
}

export default Navbar;