const projects = [
  {
    title: "AI Customer Support Chatbot",
    image: "/projects/chatbot.png",
    description:
      "AI-powered customer support chatbot with Retrieval-Augmented Generation (RAG), PDF upload, FAISS semantic search, and citation-based responses.",
    features: [
      "PDF Upload",
      "FAISS Retrieval",
      "Gemini AI",
      "Citation Responses",
      "Chat History",
    ],
    tech: "Python • Streamlit • FAISS • Gemini AI • LangChain",
    live: "https://ai-customer-support-chatbot-vminabvgmamkuu8wwa2mwn.streamlit.app/",
    github: "https://github.com/krutika-khenat/ai-customer-support-chatbot",
  },

  {
    title: "AI Resume Analyzer",
    image: "/projects/resume.png",
    description:
      "Resume Analyzer that compares resumes with job descriptions and provides ATS score, missing keywords, improvement suggestions and interview questions.",
    features: [
      "ATS Score",
      "Keyword Gap",
      "Resume Upload",
      "AI Suggestions",
      "Interview Questions",
    ],
    tech: "Python • Streamlit • Claude AI • TF-IDF • NLP",
    live: "https://ai-resume-analyzer-j8q9jxcgzcky5lgfp7govp.streamlit.app/",
    github: "https://github.com/krutika-khenat/ai-resume-analyzer",
  },

  {
    title: "AgriscanGuru",
    image: "/projects/agri.png",
    description:
      "AI-based crop disease prediction platform that detects plant diseases from uploaded images and provides treatment recommendations.",
    features: [
      "Image Upload",
      "Disease Prediction",
      "Confidence Score",
      "Dashboard",
      "Treatment Guide",
    ],
    tech: "Python • TensorFlow • Streamlit • OpenCV",
    live: "#",
    github: "https://github.com/krutika-khenat/Agriscanguru",
  },

  {
    title: "ASOS Fashion Brand Analysis",
    image: "/projects/asos.png",
    description:
      "Interactive business intelligence dashboard analyzing ASOS fashion sales, stockouts, revenue loss and brand performance.",
    features: [
      "Executive Dashboard",
      "Revenue Analysis",
      "Stockout Charts",
      "Brand Comparison",
      "KPIs",
    ],
    tech: "Power BI • Excel • SQL",
    live: "https://asos-stockout-analysis-vnudu7gpydjsnoxfmh2zeh.streamlit.app/",
    github: "https://github.com/krutika-khenat/asos-stockout-analysis",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-14 text-center">
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-purple-500/20 transition duration-500"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {project.description}
                </p>

                <div className="mt-6">
                  <h4 className="font-semibold text-purple-400 mb-2">
                    ⭐ Key Features
                  </h4>

                  <ul className="list-disc ml-5 text-gray-300 space-y-1">
                    {project.features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <span className="text-purple-400 font-semibold">
                    🛠 Tech Stack
                  </span>

                  <p className="text-gray-300 mt-2">
                    {project.tech}
                  </p>
                </div>

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.live}
                    className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    className="border border-purple-500 px-6 py-3 rounded-full hover:bg-purple-500/20"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}