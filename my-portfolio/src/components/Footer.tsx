const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side: Branding/Copyright */}
        <div className="mb-6 md:mb-0">
          <p className="text-gray-900 font-bold text-lg">Janna</p>
          <p className="text-gray-500 text-sm mt-1">
            © {new Date().getFullYear()} — Built with React & Tailwind
          </p>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex gap-8">
          <a href="https://github.com" target="_blank" className="text-gray-600 hover:text-blue-600 transition">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" className="text-gray-600 hover:text-blue-600 transition">
            LinkedIn
          </a>
          <a href="mailto:your@email.com" className="text-gray-600 hover:text-blue-600 transition">
            Email
          </a>
        </div>

      </div>
      
      {/* Optional: A very thin bottom bar for a "finished" look */}
      <div className="mt-8 text-center text-xs text-gray-400">
        Designed by me in Figma
      </div>
    </footer>
  );
};

export default Footer;