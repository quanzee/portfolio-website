const Footer = () => {
  return (
        <footer className="py-8 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Janna. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;