import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/images/profile.jpeg";
import FloatingBadge from "../components/FloatingBadge";
import HeroButtons from "../components/HeroButtons";
import ParticlesBackground from "../components/ParticlesBackground";

function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-8 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left mt-16 lg:mt-0"
        >
          <p className="text-purple-400 text-xl mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Krutika
            <br />
            Khenat
          </h1>

          <div className="mt-6 min-h-[60px] text-2xl md:text-4xl font-bold text-purple-400">
            <TypeAnimation
              sequence={[
                "Data Analyst",
                2000,
                "AI Enthusiast",
                2000,
                "Python Developer",
                2000,
                "Data Science Graduate",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300 mx-auto lg:mx-0">
            Passionate about transforming raw data into meaningful insights
            using Python, SQL, Tableau, Machine Learning, and Artificial
            Intelligence. I love solving real-world problems through data.
          </p>

          <HeroButtons />
        </motion.div>
        <ParticlesBackground />

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center mb-12 lg:mb-0"
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">

            {/* Floating Badges */}
            <FloatingBadge
              text="🐍 Python"
              className="-top-4 left-8"
            />

            <FloatingBadge
              text="🗄 SQL"
              className="top-16 -right-10"
            />

            <FloatingBadge
              text="📊 Tableau"
              className="bottom-14 -left-12"
            />

            <FloatingBadge
              text="🤖 AI"
              className="-bottom-2 right-8"
            />

            {/* Animated Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 blur-3xl opacity-60 animate-pulse" />

            {/* Gradient Ring */}
            <div className="relative w-full h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-1 shadow-2xl">

              <div className="w-full h-full rounded-full overflow-hidden bg-black">

                <img
                  src={profile}
                  alt="Krutika Khenat"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;