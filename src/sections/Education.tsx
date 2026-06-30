import { motion } from "framer-motion";

const education = [
  {
    title: "B.Sc. Data Science",
    organization: "Mumbai University",
    year: "2023 - 2026",
    icon: "🎓",
    description:
      "Graduated with a specialization in Data Science, focusing on Python, SQL, Machine Learning, AI, Data Visualization, and Analytics.",
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    organization: "Forage",
    year: "2025",
    icon: "🏅",
    description:
      "Completed Deloitte's virtual job simulation, gaining experience in data analysis, business insights, dashboard creation, and client-focused problem solving.",
  },
  {
    title: "IBM Data Science Courses",
    organization: "IBM Skills Network",
    year: "2025",
    icon: "📘",
    description:
      "Completed foundational Data Science learning covering Python, data analysis, visualization, and machine learning concepts.",
  },
  {
    title: "Kaggle Certifications",
    organization: "Kaggle",
    year: "2025",
    icon: "🐍",
    description:
      "Completed Python and Pandas courses, strengthening practical data analysis and programming skills.",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="bg-black text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Education & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-3xl bg-white/5 backdrop-blur-lg border border-purple-500/20 p-8 hover:border-purple-500 transition"
            >
              <div className="text-5xl mb-5">{item.icon}</div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-purple-400 mt-2">
                {item.organization}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                {item.year}
              </p>

              <p className="mt-5 text-gray-300 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Education;