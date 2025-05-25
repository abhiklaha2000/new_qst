import { useForm } from "react-hook-form";
import Joi from "joi";
import { useRef, useState } from "react";
import Button from "./Button";
import emailjs from "emailjs-com";


function ContactUs({ setIsContactFormOpen }) {
    const [formErrors, setFormErrors] = useState({});
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    // Joi schema for validation
    const schema = Joi.object({
        name: Joi.string().min(2).max(50).required(),
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        phone: Joi.string().min(7).max(15).required(),
        message: Joi.string().min(5).max(500).required(),
    });


    const { register, handleSubmit } = useForm({
        shouldUseNativeValidation: true,
    })
    const onSubmit = async (data) => {
        console.log(data)
        setLoading(true)
        try {
            const response = await emailjs.sendForm(
                process.env.REACT_APP_EMAIL_SERVICE_ID,
                process.env.REACT_APP_EMAIL_TEMPLATE_ID,
                formRef.current,
                process.env.REACT_APP_EMAIL_API_KEY
            );
            alert("Email sent successfully!");
            setFormErrors({});
            setIsContactFormOpen(false); // Close modal on success
        } catch (error) {
            console.error("EmailJS Error:", error);
            alert("Failed to send message. Please try again later.");
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            {/* <Button className="hidden md:block md:text-lg" onClick={() => setIsContactFormOpen(true)}>
                Contact Us
            </Button> */}
            {/* <button href="#pricing" className="text-[0.875rem] sm:text-[1rem] p-2 sm:p-3 bg-red-600 rounded" onClick={() => setIsContactFormOpen(true)}>
                Contact Us
            </button> */}
            {/* Contact Form Modal */}
            
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <div className="relative bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-2xl shadow-2xl p-8 max-w-md w-full m-4 border-4 border-white/30">
                        {/* Modal Header */}
                        <button
                            onClick={() => setIsContactFormOpen(false)}
                            className="absolute top-4 right-4 text-gray-700 hover:text-red-500 text-2xl transition"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <h2 className="text-3xl font-extrabold font-roboto text-center text-blue-900 mb-6 drop-shadow">
                            Contact Us
                        </h2>
                        {/* Contact Form */}
                        <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                            <div className="space-y-5">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        {...register("name")}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                                        required
                                    />
                                    {formErrors.name && (
                                        <p className="text-red-600 text-xs mt-1">{formErrors.name}</p>
                                    )}
                                </div>
                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        {...register("email")}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                                        required
                                    />
                                    {formErrors.email && (
                                        <p className="text-red-600 text-xs mt-1">{formErrors.email}</p>
                                    )}
                                </div>
                                {/* Phone Field */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-1">
                                        Phone
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        {...register("phone")}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                                        required
                                    />
                                    {formErrors.phone && (
                                        <p className="text-red-600 text-xs mt-1">{formErrors.phone}</p>
                                    )}
                                </div>
                                {/* Message Field */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        {...register("message")}
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                                        required
                                    ></textarea>
                                    {formErrors.message && (
                                        <p className="text-red-600 text-xs mt-1">{formErrors.message}</p>
                                    )}
                                </div>
                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-bold text-lg shadow hover:bg-blue-700 transition flex items-center justify-center"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        
        </div>
    );
}

export default ContactUs;