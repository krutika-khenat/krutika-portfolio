import Particles from "react-tsparticles";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: {
          color: "transparent",
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 45,
          },
          color: {
            value: ["#8b5cf6", "#3b82f6", "#ffffff"],
          },
          links: {
            enable: true,
            distance: 150,
            color: "#8b5cf6",
            opacity: 0.2,
          },
          move: {
            enable: true,
            speed: 1,
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 2,
          },
        },
      }}
    />
  );
}