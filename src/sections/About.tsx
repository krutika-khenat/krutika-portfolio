import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-28 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.7 }}
          className="text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity:0, y:60 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          className="rounded-3xl border border-purple-600/30 bg-white/5 backdrop-blur-xl p-10"
        >

          <p className="text-lg leading-9 text-gray-300">

            I'm <span className="text-purple-400 font-semibold">
            Krutika Khenat
            </span>, a passionate Data Science graduate who enjoys turning
            data into meaningful insights.

            <br /><br />

            My expertise includes Python, SQL, Tableau, Machine Learning,
            Data Analysis and Artificial Intelligence.

            <br /><br />

            I have completed industry certifications from Deloitte,
            IBM and Kaggle while building real-world AI applications,
            analytics dashboards and intelligent solutions.

            <br /><br />

            Currently, I'm seeking opportunities as a
            Data Analyst, AI Engineer or Machine Learning Engineer
            where I can solve real business problems through data.

          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default About;