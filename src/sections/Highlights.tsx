import { motion } from "framer-motion";

const highlights = [
  {
    emoji: "🥇",
    value: "Rank 1",
    title: "College Topper",
  },
  {
    emoji: "🎓",
    value: "9.85",
    title: "CGPA",
  },
  {
    emoji: "🤖",
    value: "4+",
    title: "AI Projects",
  },
  {
    emoji: "📜",
    value: "8+",
    title: "Certifications",
  },
];

function Highlights() {
  return (
    <section className="bg-black py-20 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">

        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            className="rounded-3xl bg-white/5 border border-purple-500/20 backdrop-blur-lg p-8 text-center hover:border-purple-500 transition"
          >
            <div className="text-5xl">
              {item.emoji}
            </div>

            <h2 className="text-4xl font-bold mt-5 text-purple-400">
              {item.value}
            </h2>

            <p className="mt-3 text-gray-300">
              {item.title}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Highlights;