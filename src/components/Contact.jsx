import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID // User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Error while sending the email.");
        }
      );

    // Opcional: Limpar o formulário após o envio
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>
      <p className="text-lg text-center py-8">
        Feel free to contact me via email at{" "}
        <a
          href="mailto:ribeiro.tiago2001@gmail.com"
          className="text-blue-500 underline hover:text-blue-700"
        >
          ribeiro.tiago2001@gmail.com
        </a>
        , or simply fill out the form below. I’ll get back to you as soon as
        possible!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-2 rounded-lg p-3 flex border-gray-300"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border-2 rounded-lg p-3 flex border-gray-300"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-2 rounded-lg p-3 flex border-gray-300"
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border-2 rounded-lg p-3 flex border-gray-300"
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            rows="10"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border-2 rounded-lg p-3 border-gray-300"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
