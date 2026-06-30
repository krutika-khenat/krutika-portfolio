import { motion } from "framer-motion";

const learning = [
  "Advanced React & TypeScript",
  "Generative AI",
  "RAG Applications",
  "LangChain",
  "Vector Databases",
  "Cloud Deployment",
];

export default function CurrentLearning() {
  return (
    <section className="bg-black py-24 text-white">

      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          className="text-5xl font-bold text-center mb-16"
        >
          Currently Learning
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {learning.map((item)=>(
            <motion.div
              key={item}
              whileHover={{scale:1.05}}
              className="rounded-3xl bg-white/5 border border-purple-500/20 p-8 text-center"
            >
              🚀

              <h3 className="mt-5 text-xl">

                {item}

              </h3>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}