import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
  FaPhoneAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-400 text-lg text-center max-w-3xl mx-auto leading-8"
        >
          I'm actively looking for opportunities in
          <span className="text-purple-400 font-semibold">
            {" "}Data Analytics, Data Science, Artificial Intelligence,
            and Machine Learning.
          </span>

          <br /><br />

          Whether you have an internship, full-time opportunity,
          freelance project, or simply want to connect,
          I'd love to hear from you!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {/* Phone */}

          <motion.a
            whileHover={{ y: -8, scale: 1.03 }}
            href="tel:+919920435307"
            className="rounded-3xl bg-white/5 border border-purple-500/20 backdrop-blur-lg p-8 hover:border-purple-500 transition"
          >
            <FaPhoneAlt className="text-4xl mx-auto text-green-400" />

            <h3 className="text-2xl font-bold mt-5 text-center">
              Phone
            </h3>

            <p className="text-gray-400 mt-2 text-center">
              +91 9920435307
            </p>

          </motion.a>

          {/* Email */}

          <motion.a
            whileHover={{ y: -8, scale: 1.03 }}
            href="mailto:krutikakhenat9@gmail.com"
            className="rounded-3xl bg-white/5 border border-purple-500/20 backdrop-blur-lg p-8 hover:border-purple-500 transition"
          >
            <FaEnvelope className="text-4xl mx-auto text-purple-400" />

            <h3 className="text-2xl font-bold mt-5 text-center">
              Email
            </h3>

            <p className="text-gray-400 mt-2 text-center break-all">
              krutikakhenat9@gmail.com
            </p>

          </motion.a>

          {/* LinkedIn */}

          <motion.a
            whileHover={{ y: -8, scale: 1.03 }}
            href="https://linkedin.com/in/krutika-khenat-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl bg-white/5 border border-purple-500/20 backdrop-blur-lg p-8 hover:border-purple-500 transition"
          >
            <FaLinkedin className="text-4xl mx-auto text-blue-400" />

            <h3 className="text-2xl font-bold mt-5 text-center">
              LinkedIn
            </h3>

            <p className="text-gray-400 mt-2 text-center">
              linkedin.com/in/krutika-khenat-ai
            </p>

          </motion.a>

          {/* GitHub */}

          <motion.a
            whileHover={{ y: -8, scale: 1.03 }}
            href="https://github.com/krutika-khenat"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl bg-white/5 border border-purple-500/20 backdrop-blur-lg p-8 hover:border-purple-500 transition"
          >
            <FaGithub className="text-4xl mx-auto" />

            <h3 className="text-2xl font-bold mt-5 text-center">
              GitHub
            </h3>

            <p className="text-gray-400 mt-2 text-center">
              github.com/krutika-khenat
            </p>

          </motion.a>

        </div>

        {/* Resume Button */}

        <div className="flex justify-center mt-14">

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/KRUTIKAKHENAT_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-purple-500/40 transition"
          >
            <FaFileDownload />
            Download Resume
          </motion.a>

        </div>

      </div>
    </section>
  );
}

export default Contact;