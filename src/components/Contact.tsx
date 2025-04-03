import { useState } from "react";
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = 'ayush.acharya2027@gmail.com';
    const subject = 'Portfolio Inquiry';
    const body = 'Hi Ayush,\n\nI came across your portfolio and wanted to connect regarding ';
    
    // Create the mailto URL
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the email client
    window.location.href = mailtoUrl;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      const response = await fetch("https://formspree.io/f/xdkewzqk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2">Get in Touch</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-tertiary p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <EnvelopeIcon className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="#"
                    onClick={handleEmailClick}
                    className="text-textPrimary hover:text-secondary transition-colors"
                  >
                    ayush.acharya2027@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <PhoneIcon className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a
                    href="tel:+916284798653"
                    className="text-textSecondary hover:text-secondary transition-colors"
                  >
                    +91 6284798653
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPinIcon className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-textSecondary">
                    Chennai, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-tertiary p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form 
              className="space-y-4" 
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-primary border border-textSecondary/20 rounded-lg focus:outline-none focus:border-secondary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-primary border border-textSecondary/20 rounded-lg focus:outline-none focus:border-secondary"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>  
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-primary border border-textSecondary/20 rounded-lg focus:outline-none focus:border-secondary"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              {/* Honeypot field to prevent spam */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} />
              
              {submitStatus === "success" && (
                <div className="p-3 bg-green-500/20 text-green-500 rounded-lg">
                  Message sent successfully! Thank you for reaching out.
                </div>
              )}
              
              {submitStatus === "error" && (
                <div className="p-3 bg-red-500/20 text-red-500 rounded-lg">
                  Failed to send message. Please try again or use the email link above.
                </div>
              )}
              
              <button 
                type="submit" 
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 