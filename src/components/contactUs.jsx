import {useState} from "react";
import Button from "./Button";


function ContactUs({isContactFormOpen, setIsContactFormOpen}){
    // const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    console.log("isContactFormOpen---",isContactFormOpen)

    return(
      <div>
          <Button className="hidden md:block md:text-lg" onClick={() => setIsContactFormOpen(true)}>
              Contact Us
          </Button>

          {/* Contact Form Modal */}
          {isContactFormOpen && (
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
                <form
                    onSubmit={e => {
                    e.preventDefault();
                    // Handle form submission here
                    setIsContactFormOpen(false);
                    }}
                >
                    <div className="space-y-5">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-1">
                        Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                        required
                        />
                    </div>
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-1">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                        required
                        />
                    </div>
                    {/* Phone Field */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-1">
                        Phone
                        </label>
                        <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                        required
                        />
                    </div>
                    {/* Message Field */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-1">
                        Message
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                        required
                        ></textarea>
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-bold text-lg shadow hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                    </div>
                </form>
                </div>
            </div>
            )}
      </div>
    );
}

export default ContactUs;