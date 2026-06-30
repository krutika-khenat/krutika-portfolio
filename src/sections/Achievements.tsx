import { motion } from "framer-motion";

const achievements = [
  {
    icon: "🥇",
    title: "College Rank 1",
    description: "Graduated as the top-ranked student in the B.Sc. Data Science program.",
  },
  {
    icon: "🎯",
    title: "9.85 CGPA",
    description: "Maintained excellent academic performance throughout the degree.",
  },
  {
    icon: "👩‍💼",
    title: "Student Council Secretary",
    description: "Represented students, coordinated college events, and collaborated with faculty to improve student engagement.",
  },
  {
    icon: "🏅",
    title: "Industry Certifications",
    description: "Completed certifications from Deloitte, IBM, Kaggle, and other platforms while building practical AI and analytics projects.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-black text-white py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white/5 border border-purple-500/20 backdrop-blur-lg p-8 hover:border-purple-500 transition"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="text-2xl font-bold mt-4">
                {item.title}
              </h3>

              <p className="text-gray-300 mt-4 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}