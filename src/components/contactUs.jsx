import {useState} from "react";
import Button from "./Button";


function ContactUs({isContactFormOpen, setIsContactFormOpen}){
    // const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    console.log("isContactFormOpen---",isContactFormOpen)

    return(
      <div>
          <Button className="hidden lg:flex !text-[15px]" onClick={() => setIsContactFormOpen(true)}>
              Contact Us
          </Button>

          {/* Contact Form Modal */}
          {isContactFormOpen && (
              <div className="fixed w-full h-[530px] inset-0 mr-[100px] mt-[150px] bg-opacity-50 flex items-center justify-center md:ml-[10px] md:mt-[150px] lg:ml-[40px] lg:mt-[100px] xl:ml-[50px] xl:mt-[100px]">
                  <div className="bg-yellow-400 rounded-lg p-8 max-w-md w-full h-[550px] m-4 ">
                      {/* Modal Header */}
                      <div className="flex justify-between items-center mb-6">
                          <h2 className="text-2xl font-medium font-roboto text-black text-center ml-15 xl:ml-[120px]">Contact Us</h2>
                          <button
                              onClick={() => setIsContactFormOpen(false)}
                              className="text-gray-500 hover:text-gray-900 text-xl"
                          >
                              ✕
                          </button>
                      </div>

                      {/* Contact Form */}
                      <form onSubmit={(e) => {
                          e.preventDefault();
                          // Handle form submission here
                          setIsContactFormOpen(false);
                      }}>
                          <div className="space-y-4">
                              {/* Name Field */}
                              <div>
                                  <label
                                      htmlFor="name"
                                      className="block text-sm font-bold text-gray-700 mb-1 "
                                  >
                                      Name
                                  </label>
                                  <input
                                      type="text"
                                      id="name"
                                      name="name"
                                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black"
                                      required
                                  />
                              </div>

                              {/* Email Field */}
                              <div>
                                  <label
                                      htmlFor="email"
                                      className="block text-sm font-bold text-gray-700 mb-1 "
                                  >
                                      Email
                                  </label>
                                  <input
                                      type="email"
                                      id="email"
                                      name="email"
                                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black"
                                      required
                                  />
                              </div>
                              {/* Phone Field */}
                              <div>
                                  <label
                                      htmlFor="phone"
                                      className="block text-sm font-bold text-gray-700 mb-1 "
                                  >
                                      Phone
                                  </label>
                                  <input
                                      type="text"
                                      id="phone"
                                      name="phone"
                                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black"
                                      required
                                  />
                              </div>

                              {/* Message Field */}
                              <div>
                                  <label
                                      htmlFor="message"
                                      className="block text-sm font-bold text-gray-700 mb-1"
                                  >
                                      Message
                                  </label>
                                  <textarea
                                      id="message"
                                      name="message"
                                      rows="4"
                                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black"
                                      required
                                  ></textarea>
                              </div>

                              {/* Submit Button */}
                              <button
                                  type="submit"
                                  className="w-full bg-blue-500 text-black py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
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