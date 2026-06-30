import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026",
    title: "AI Customer Support Chatbot",
    company: "Personal AI Project",
    description:
      "Developed an AI-powered customer support chatbot using RAG architecture with FAISS, LangChain, Gemini AI, and Streamlit. Implemented PDF-based document retrieval with citation-supported responses.",
    skills: ["Python", "FAISS", "LangChain", "Gemini AI", "Streamlit"],
  },
  {
    year: "2026",
    title: "AI Resume Analyzer",
    company: "Personal AI Project",
    description:
      "Built an ATS Resume Analyzer that evaluates resumes against job descriptions, calculates compatibility scores, identifies missing keywords, and generates AI-powered improvement suggestions.",
    skills: ["Python", "Claude AI", "NLP", "TF-IDF", "Streamlit"],
  },
  {
    year: "2026",
    title: "Data Analytics Job Simulation",
    company: "Deloitte",
    description:
      "Completed Deloitte's Data Analytics Virtual Experience, gaining practical experience in data analysis, business insights, dashboard creation, and client-focused problem solving.",
    skills: ["Excel", "Data Analysis", "Visualization", "Business Insights"],
  },
  {
    year: "2025-2026",
    title: "B.Sc. Data Science",
    company: "Mumbai University",
    description:
      "Graduated with a specialization in Data Science while completing projects in analytics, machine learning, artificial intelligence, SQL, Python, and Tableau.",
    skills: ["Python", "SQL", "Machine Learning", "Tableau"],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-black text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-20"
        >
          Experience & Journey
        </motion.h2>

        <div className="relative border-l-2 border-purple-600 ml-6">

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-14 ml-10 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[52px] top-2 w-5 h-5 bg-purple-500 rounded-full border-4 border-black"></div>

              <span className="text-purple-400 font-semibold">
                {item.year}
              </span>

              <div className="mt-3 rounded-2xl bg-white/5 border border-purple-500/20 backdrop-blur-lg p-6 hover:border-purple-500 transition">

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-purple-400 mt-1">
                  {item.company}
                </p>

                <p className="text-gray-300 mt-4 leading-7">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;