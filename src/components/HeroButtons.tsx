function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-5">
      <a
        href="#projects"
        className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-300"
      >
        View Projects
      </a>

      <a
        href="/KRUTIKAKHENAT_RESUME.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 rounded-full border border-purple-500 hover:bg-purple-500/20 transition duration-300"
      >
        Download Resume
      </a>
    </div>
  );
}

export default HeroButtons;