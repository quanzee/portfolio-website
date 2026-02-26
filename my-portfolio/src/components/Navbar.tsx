const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 bg-white/80 backdrop-blur-md shadow-sm text-sm">
      <a href="#home" className="text-xl hover:text-gray-500 font-[600]">Janna's Portfolio</a>
      <ul className="flex gap-6">
        <li><a href="#about" className="hover:text-gray-500 font-[550] scroll-mt-20">About</a></li>
        <li><a href="#projects" className="hover:text-gray-500 font-[550] scroll-mt-20">Projects</a></li>
        <li><a href="#skills" className="hover:text-gray-500 font-[550] scroll-mt-20">Skills</a></li>
        <li><a href="#writing" className="hover:text-gray-500 font-[550] scroll-mt-20">Writing</a></li>
        <li><a href="#contact" className="hover:text-gray-500 font-[550] scroll-mt-20">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;