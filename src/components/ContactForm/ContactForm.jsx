import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted: ", formData);
        setSuccess(true);
        setFormData({ name: "", phone: "", email: "", message: "" });
    };

    return (


        <div className="w-full p-4 flex flex-col md:flex-row bg-gradient-to-b from-green-200 to-slate-200 mb-8 shadow-lg ">

            <div className="w-full md:w-1/2 flex justify-center items-center" data-aos="fade-up">
                <img src="/src/assets/images/contactPerson.webp" alt="" className="size-112" />

            </div>
            <div className="w-full md:w-1/2 max-w-md mx-auto  p-6 bg-white shadow-lg rounded-lg" data-aos="fade-up">
                <h2 className="text-2xl font-bold text-center text-green-400 mb-4 font-poppins">
                    Contact Us
                </h2>
                {success && (
                    <p className="text-green-600 text-center font-semibold mb-4">
                        Message sent successfully!
                    </p>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="font-semibold text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="font-semibold text-gray-700">
                            Phone          </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone Number"
                            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-semibold text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="font-semibold text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message"
                            rows="4"
                            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>

    );
};

export default ContactForm;
