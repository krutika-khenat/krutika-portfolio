import { motion } from "framer-motion";

const skills = [
  "Python",
  "SQL",
  "Tableau",
  "Power BI",
  "Excel",
  "Machine Learning",
  "Deep Learning",
  "TensorFlow",
  "OpenCV",
  "Streamlit",
  "LangChain",
  "FAISS",
  "Gemini AI",
  "Claude AI",
  "Git",
  "GitHub",
  "React",
  "TypeScript",
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-black text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.4,
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="rounded-2xl bg-white/5 backdrop-blur-lg border border-purple-500/20 p-6 text-center hover:border-purple-500 transition cursor-pointer"
            >
              <h3 className="font-semibold text-lg">
                {skill}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;