import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope , FaLinkedin } from 'react-icons/fa';

const ContactMenu = () => {
  return (
    <section className="max-w-6xl mx-auto p-4 md:p-12">
      <div className="shadow-lg rounded-lg overflow-hidden md:flex">
        
        {/* Left Info Panel */}
        <div className=" w-full md:w-1/2 p-8">
          <h3 className="text-2xl font-semibold mb-4">Let's get connected! </h3>
          <p className="mb-6"> I’m a passionate Software Engineer with a strong background in building scalable web applications and user-friendly digital experiences.
            I enjoy solving complex problems and turning ideas into reliable, elegant code.
            My toolkit includes technologies like React, Node.js, TypeScript, and Tailwind CSS — but I’m always eager to learn and adapt to new tools that help deliver better results.</p>

          <div className="space-y-5 text-sm">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1 text-green-600" />
            <span>14184 Monterey Pines Dr, Tampa, FL, 33613</span>
        </div>

        <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-green-600" />
            <span>+1 813-290-1018</span>
        </div>

        <div className="flex items-center gap-3">
            <FaEnvelope className="text-green-600" />
            <a
            href="mailto:layaaluri22@gmail.com"
            className="hover:underline text-black-800 dark:text-white-200"
            >
            layaaluri22@gmail.com
            </a>
        </div>

        <div className="flex items-center gap-3">
            <FaLinkedin className="text-green-600" />
            <a
                href="https://www.linkedin.com/in/laya-aluri-790575183"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
            >
                Laya Aluri
            </a>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMenu;
