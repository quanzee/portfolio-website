import { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission

    if (!formData.email.includes('.')) {
    alert("Please enter a valid email with a domain (i.e. .com)");
    return; // This stops the function from continuing!
  }

    //send to Formspree
    const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
          setFormData({ name: '', email: '', message: '' });
    setShowSuccessModal(true);
    }

  };

  return (
    <section id="contact"className="py-24 px-6 bg-gray-50">
      <h2 className="text-4xl md:text-5xl mb-4">Get In Touch</h2>
      <p className="text-lg text-gray-600 mb-12">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

              <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl mb-6">Let's Connect</h3>
            <p className="text-gray-600 mb-8">
              Feel free to reach out via <b>email</b> or this <b>contact form</b>, as I am most responsive via email. You can also visit my social media profiles below.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:jannang201@gmail.com"
                className="inline-flex w-fit items-center gap-3 text-gray-700 hover:text-black transition-colors mb-4"
              >
                <Mail size={20} />
                jannang201@gmail.com
              </a>
              <a
                href="https://github.com/quanzee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-3 text-gray-700 hover:text-black transition-colors mb-4"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/janna-ng-quanzee/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-3 text-gray-700 hover:text-black transition-colors mb-4"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
          {showSuccessModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm">
              <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Thank you for reaching out.</h3>
                <p>Your message has been sent successfully.</p>
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="mt-4 px-4 py-2 bg-black text-white rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
    </section>

    
  );
}

export default Contact;