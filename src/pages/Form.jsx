import React, { useState } from "react";
import { BackgroundBeams } from "../components/ui/background_beams";
import axios from "axios";

const Form = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        try {
            const response = await axios.post('http://localhost:8000/api/v1/form/submit', form);
            console.log('Form submitted successfully:', response.data);
            alert('Form submitted successfully!');
            // Optionally reset the form
            setForm({
                name: "",
                phone: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
        console.log(form);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#080a1a] relative">
            <BackgroundBeams />
            <form
                className="bg-black p-8 border border-teal-300 rounded shadow-md w-full max-w-md relative z-10"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-6 text-teal-300">AI Powered Contact Portal</h2>
                <div className="mb-4">
                    <label className="block text-teal-300 mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="w-full px-3 py-2 border text-teal-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-teal-300 mb-2" htmlFor="phone">
                        Phone No
                    </label>
                    <input
                        className="w-full px-3 py-2 border text-teal-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-teal-300 mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full px-3 py-2 text-teal-300 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-teal-300 mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="w-full px-3 py-2 text-teal-300 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        id="message"
                        name="message"
                        rows="4"
                        value={form.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-700 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Form;