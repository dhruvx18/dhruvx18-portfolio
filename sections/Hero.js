
export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">Dhruv Solanki</h1>
      <p className="text-gray-600 max-w-xl">
        Final-year Computer Science student with a passion for building clean, scalable, and purposeful digital systems. I enjoy solving real-world problems using automation, code, and creativity.
      </p>
      <a href="/resume.pdf" download className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">Download Resume</a>
    </section>
  )
}
