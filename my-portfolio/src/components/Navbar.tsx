import {HashLink} from 'react-router-hash-link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 bg-white/80 backdrop-blur-md shadow-sm text-sm">
      <a href="/#home" className="text-xl hover:text-gray-500 font-[600]">Janna's Portfolio</a>
      <ul className="flex gap-6">
        <li><HashLink smooth to="/#about" className="hover:text-gray-500 font-[550] scroll-mt-20">About</HashLink></li>
        <li><HashLink smooth to="/#projects" className="hover:text-gray-500 font-[550] scroll-mt-20">Projects</HashLink></li>
        <li><HashLink smooth to="/#skills" className="hover:text-gray-500 font-[550] scroll-mt-20">Skills</HashLink></li>
        <li><HashLink smooth to="/#writing" className="hover:text-gray-500 font-[550] scroll-mt-20">Writing</HashLink></li>
        <li><HashLink smooth to="/#contact" className="hover:text-gray-500 font-[550] scroll-mt-20">Contact</HashLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;