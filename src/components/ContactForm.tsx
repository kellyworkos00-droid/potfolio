'use client';

import { FormEvent, useState } from 'react';

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
      e.currentTarget.reset();
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Form error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Zachary"
          required
          disabled={isLoading}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your@email.com"
          required
          disabled={isLoading}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Project Details</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell me about your project..."
          rows={5}
          required
          disabled={isLoading}
        />
      </div>

      <div className="contact-actions">
        <button type="submit" className="btn-primary" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>

        <a
          href="https://wa.me/254798293831?text=Hi%20Zachary,%20I%20have%20a%20web%20project%20inquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          WhatsApp Direct
        </a>
      </div>

      {isSubmitted && (
        <div className="form-success">
          ✓ Message sent! I&apos;ll get back to you soon.
        </div>
      )}
    </form>
  );
}
