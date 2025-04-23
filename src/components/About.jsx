import profileImg from '../assets/Laya_Aluri_Profile_Image.jpg'

function AboutMenu() {
    return(
        <>
            <section className="flex flex-col md:flex-row items-center justify-center px-6 py-12
              text-center md:text-left gap-10">
                <div className="flex-shrink-0">
                    <img
                    src={profileImg}
                    alt="Profile"
                    className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg"
                    />
                </div>
                <div className="max-w-xl">
                    <h4 className="">Software Enginner</h4>
                    <h1 className="text-3xl font-bold">Laya Aluri</h1>
                    <p className="mt-4 leading-relaxed">
                        I’m a passionate Software Engineer with a strong background in building scalable web applications and user-friendly digital experiences.
                        I enjoy solving complex problems and turning ideas into reliable, elegant code.
                        My toolkit includes technologies like React, Node.js, TypeScript, and Tailwind CSS — but I’m always eager to learn and adapt to new tools that help deliver better results.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-start">
                    <a
                        href="/Laya_Aluri_Resume.pdf"
                        download
                        className="px-6 py-2 rounded-full border-1 border-gray-300 hover:bg-gray-100 transition"
                    >
                        Download Resume
                    </a>
                    <a
                        href="/contact"
                        className="px-6 py-2 rounded-full border-1 border-gray-300 hover:bg-gray-100 transition"
                    >
                        Contact
                    </a>
                    </div>
                </div>
            </section >
            
        </>
    );
}

export default AboutMenu;