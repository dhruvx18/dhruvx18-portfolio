
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <ul className="flex justify-center gap-6 py-4 font-medium text-gray-700">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#extras">Extras</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
