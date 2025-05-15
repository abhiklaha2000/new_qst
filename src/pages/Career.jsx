import React, { useState } from 'react';
import Section from '../components/Section';
import Marquee from 'react-fast-marquee';

const jobData = {
    title: "SAP Business One Functional Consultant",
    experience: "2 to 3 Years",
    positions: 1,
    details: {
        keyAccountabilities: [
            "Candidates should have good experience in Add-on development, B1 integration framework, .NET, VB.NET, C#, SQL, HANA.",
            "Defining and documenting requirements for software customizations and custom reports.",
            "Developing software customizations using SAPs software development kit and supported development platform Providing ongoing customer maintenance and support.",
            "Working knowledge and experience of reporting tool like Crystal report",
            "Experience in Web Services & API development."
        ],
        qualifications: [
            "Bachelor's degree in Computer Science, Information Technology, Engineering, or a related field.",
            "2-3 years of experience as an SAP B1 Consultant with a proven track record of successful SAP B1 implementations and support.",
            "Strong knowledge of SAP B1 functionalities, including inbound and outbound processes, inventory management, and warehouse processes.",
            "Experience with SAP S/4HANA and integration with other SAP modules is preferred",
            "Experience in a similar role within a global organization.",
            "Excellent problem-solving skills and the ability to analyze complex business requirements.",
            "Strong communication and interpersonal skills, with the ability to interact effectively with clients and team members.",
            "Proven experience in delivering training and support to end-users.",
            "Ability to work independently as well as part of a team in a fast-paced environment."
        ]
    }
};

const Career = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [showApplicationForm, setShowApplicationForm] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        jobTitle: jobData.title,
        coverLetter: '',
        resume: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            resume: e.target.files[0]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        // For now, we'll just console.log it
        console.log(formData);
        // You can add email sending logic here
    };

    return (
        <Section className="pt-20 pb-16 flex items-center">
            <div className="container mx-auto px-4">
                {/* <h1 className="text-4xl mb-[35px] font-bold !text-center text-blue-900 mb-2 inline-block after:content-[''] after:block after:w-full after:h-1 after:bg-gradient-to-r after:from-red-500 after:to-transparent after:mt-2 mt-6">Career Opportunities at QuantumBrix</h1>

                <div className="bg-white rounded-lg shadow-lg p-6 mb-8 ">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-bold text-black">{jobData.title}</h2>
                            <p className="text-gray-600">Experience: {jobData.experience}</p>
                            <p className="text-gray-600">Positions: {jobData.positions}</p>
                        </div>
                        <div className="space-x-4">
                            <button
                                onClick={() => setShowDetails(!showDetails)}
                                className="bg-blue-500 text-white px-[10px] py-2 h-15 ml-4 rounded hover:bg-blue-600 md:px-[11px] mb-[4px] lg:w-auto lg:h-[35px]"
                            >
                                View Details
                            </button>
                            <button
                                onClick={() => setShowApplicationForm(true)}
                                className="bg-green-500 text-white px-4 py-2 h-15 rounded hover:bg-green-600 lg:w-auto lg:h-[35px] lg:pb-[4px]"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>

                    {showDetails && (
                        <div className="mt-6 text-black">
                            <div className="mb-6 ">
                                <h3 className="text-lg font-semibold mb-3">Key Accountabilities:</h3>
                                <ul className="list-disc pl-6">
                                    {jobData.details.keyAccountabilities.map((item, index) => (
                                        <li key={index} className="mb-2">{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-3">Qualifications / Experience / Skills (Preferred):</h3>
                                <ul className="list-disc pl-6">
                                    {jobData.details.qualifications.map((item, index) => (
                                        <li key={index} className="mb-2">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                {showApplicationForm && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <h2 className="text-2xl font-bold mb-6">Application Form</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-gray-600">
                                        <label className="block mb-1">First Name*</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            required
                                            className="w-full border rounded p-2 bg-gray-100"
                                            placeholder="John"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="text-gray-600">
                                        <label className="block mb-1">Last Name*</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Lourens"
                                            required
                                            className="w-full border rounded p-2 bg-gray-100"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div  className="text-gray-600">
                                        <label className="block mb-1">Email ID*</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="john452@gmail.com"
                                            className="w-full border rounded p-2 bg-gray-100"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="text-gray-600">
                                        <label className="block mb-1">Phone Number*</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="9876543210"
                                            required
                                            className="w-full border rounded p-2 bg-gray-100"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div  className="text-gray-600">
                                    <label className="block mb-1">Applied for</label>
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        className="w-full border rounded p-2 bg-gray-100"
                                        value={formData.jobTitle}
                                        readOnly
                                    />
                                </div>
                                <div  className="text-gray-600">
                                    <label className="block mb-1">Cover Letter</label>
                                    <textarea
                                        name="coverLetter"
                                        className="w-full border rounded p-2 bg-gray-100"
                                        rows="4"
                                        value={formData.coverLetter}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div  className="text-gray-600">
                                    <label className="block mb-1">Resume*</label>
                                    <input
                                        type="file"
                                        name="resume"
                                        required
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        className="w-full"
                                    />
                                </div>
                                <div className="flex justify-end space-x-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowApplicationForm(false)}
                                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )} */}

                <marquee className='text-blue-900 mt-24 text-3xl xl:text-3xl'>Coming Soon...</marquee>
            </div>
        </Section>
    );
};

export default Career;