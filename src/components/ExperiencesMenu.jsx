import experince_icon from '../icons/experince_icon.png';


export default function ExperienceMenu() {
    return(
        <>
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                <div className="flex justify-center">
                    <img src={experince_icon} alt="Laptop Illustration" className="w-80"/>
                </div>

                <div>
                    <h2 className="text-4xl font-extrabold text-white mb-10 text-center md:text-left">Experiences</h2>

                    <div className="space-y-8">
                    <div className="text-center rounded-2xl border border-blue-700 p-6 bg-gradient-to-br from-purple-500 via-indigo-800 to-blue shadow-lg">
                        <p className="text-green-400 text-sm mb-2">(Jun 2024 - Present)</p>
                        <h3 className="text-xl font-bold text-white">Senior Java Developer</h3>
                        <p className="text-gray-300">JSMN International Inc. </p>
                    </div>

                    <div className="text-center rounded-2xl border border-blue-700 p-6 bg-gradient-to-br from-purple-500 via-indigo-800 to-blue shadow-lg">
                        <p className="text-green-400 text-sm mb-2">(Apr 2020 - August 2022)</p>
                        <h3 className="text-xl font-bold text-white"> Backend  Enginner </h3>
                        <p className="text-gray-300">Netenrich, Inc.</p>
                    </div>

                    <div className="text-center rounded-2xl border border-blue-700 p-6 bg-gradient-to-br from-purple-500 via-indigo-800 to-blue shadow-lg">
                        <p className="text-green-400 text-sm mb-2">(Aug 2019 - Jan 2020)</p>
                        <h3 className="text-xl font-bold text-white">Software Engineer</h3>
                        <p className="text-gray-300">SHRIS INFOTECH SERVICES PVT LTD </p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )    
}