import { useState } from "react";

const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section id="contact" className="bg-black text-lightBlue py-16 px-10 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
      <div className="max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-lg font-semibold">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full mt-2 p-3 bg-darkBlue text-lightBlue border-2 border-lightBlue rounded-lg focus:outline-none"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-lg font-semibold">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 p-3 bg-darkBlue text-lightBlue border-2 border-lightBlue rounded-lg focus:outline-none"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-lg font-semibold">
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full mt-2 p-3 bg-darkBlue text-lightBlue border-2 border-lightBlue rounded-lg focus:outline-none"
              rows={6}
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-lightBlue text-black font-semibold text-lg rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
