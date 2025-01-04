import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const [fromName, setFromName] = useState(""); // Added state for 'from_name'
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: fromName,  // Pass 'from_name' to the template
      user_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_h4b5x0h", // Service ID
        "template_a85ff4j", // Template ID
        templateParams,     // Parameters for the template
        "D-gR9oVYnjmX91dHx" // Public Key (User ID)
      )
      .then(
        (response) => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your email has been sent",
                showConfirmButton: false,
                timer: 1500
              });
        },
        (err) => {
          alert("");
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Failed to send email. Please try again later.</a>'
          });
        }
      );
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left side - Email Form */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <form onSubmit={sendEmail} className="space-y-6">
            <div>
              <label>Your Name</label>
              <input
                type="text"
                value={fromName}
                onChange={(e) => setFromName(e.target.value)}
                placeholder="Enter your name"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows="6"
                placeholder="Write your message here"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
            >
              Send Email
            </button>
          </form>
        </div>

        {/* Right side - Contact Information */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <div>
            <h3 className="text-xl font-semibold">My Location</h3>
            <p>Dhaka, Bangladesh</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <a
              href="mailto:shshaon99@gmail.com"
              className="text-blue-500 hover:underline"
            >
              shshaon99@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Phone</h3>
            <a
              href="tel:+8801788172639"
              className="text-blue-500 hover:underline"
            >
              +8801788172639
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold">WhatsApp</h3>
            <a
              href="https://wa.me/8801788172639"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              01788172639
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
