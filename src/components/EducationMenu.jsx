
export default function EducationMenu() {
    return(
        <>
            <section className="py-16 px-4">
                <div className="max-w-3xl mx-auto">

                <h2 className="text-4xl font-extrabold text-center mb-12 text-white">Education</h2>

                <div className="space-y-8 mb-16">
                    <div className="border-l-4 border-indigo-800 bg-blue-100/90 text-white-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-2xl font-semibold mb-1">🎓 University of Tampa</h3>
                    <p className="text-gray-700">Master’s in Information Technology and Management</p>
                    <p className="text-sm text-gray-600 mt-1">Graduated: May 2024</p>
                    </div>

                    <div className="border-l-4 border-indigo-800 bg-blue-100/90 text-white-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-2xl font-semibold mb-1">🎓 Rajiv Gandhi University of Knowledge Technologies</h3>
                    <p className="text-gray-700">Bachelor of Engineering – CSE, Computer Science Engineering</p>
                    <p className="text-sm text-gray-600 mt-1">Graduated: May 2020</p>
                    </div>
                </div>

                <h2 className="text-4xl font-extrabold text-center mb-12 text-white">Certifications</h2>

                <div className="space-y-8">
                    <div className="border-l-4 border-indigo-400 bg-blue-100/90 text-gray-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-2xl font-semibold mb-1">📜 AWS Certified Developer – Associate</h3>
                    <p className="text-gray-700">Issued by Amazon Web Services</p>
                    <p className="text-sm text-gray-600 mt-1">Issued: January 2025 | Credential ID: 8ee04766-51a9-45c6-b1f8-e99818e4f01f</p>
                    <a href="https://www.credly.com/badges/8ee04766-51a9-45c6-b1f8-e99818e4f01f"  target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-700 hover:underline mt-2 inline-block">View Credential</a>
                    </div>

                </div>

                </div>
            </section>
        </>
    )    
}