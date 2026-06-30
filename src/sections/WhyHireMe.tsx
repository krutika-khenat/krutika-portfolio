import { motion } from "framer-motion";

const reasons = [
  {
    icon: "🎓",
    title: "Academic Excellence",
    description:
      "Graduated with a 9.85 CGPA and secured College Rank 1 in B.Sc. Data Science.",
  },
  {
    icon: "🤖",
    title: "Practical AI Experience",
    description:
      "Built AI-powered applications including Resume Analyzer, Customer Support Chatbot, AgriscanGuru, and Business Analytics dashboards.",
  },
  {
    icon: "📊",
    title: "Strong Analytics Skills",
    description:
      "Hands-on experience with Python, SQL, Tableau, Power BI, Excel, Machine Learning, and Data Visualization.",
  },
  {
    icon: "👩‍💼",
    title: "Leadership",
    description:
      "Served as a Student Council Member, developing communication, teamwork, event coordination, and leadership skills.",
  },
  {
    icon: "📜",
    title: "Industry Certifications",
    description:
      "Completed certifications from Deloitte, IBM, and Kaggle to strengthen practical industry knowledge.",
  },
  {
    icon: "🚀",
    title: "Fast Learner",
    description:
      "Continuously learning Generative AI, LangChain, RAG, React, TypeScript, and modern cloud technologies.",
  },
];

export default function WhyHireMe() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          className="text-5xl font-bold text-center mb-6"
        >
          Why Hire Me?
        </motion.h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          I combine academic excellence, practical AI projects,
          leadership experience, and a passion for continuous learning
          to create impactful, real-world solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reasons.map((item)=>(
            <motion.div
              key={item.title}
              whileHover={{scale:1.03,y:-8}}
              className="rounded-3xl bg-white/5 border border-purple-500/20 p-8 backdrop-blur-lg hover:border-purple-500 transition"
            >
              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-8">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}