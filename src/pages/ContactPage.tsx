import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { contactContent, siteConfig } from '../data/siteContent';
import PageHero from '../components/PageHero';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const { hero, formLabels, serviceOptions } = contactContent;
  const [status, setStatus] = useState<FormStatus>('idle');
  const [showContact, setShowContact] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${siteConfig.formspreeFormId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <PageHero headline={hero.headline} subheadline={hero.subheadline} compact />

      <section className="section-padding bg-white" aria-labelledby="contact-form-heading">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2
                id="contact-form-heading"
                className="text-3xl font-bold text-primary mb-6"
              >
                Let&rsquo;s Talk
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10">
                Whether you need a new website, IT support, or help with slow internet,
                we&rsquo;re here for you. Fill out the form and we&rsquo;ll get back to you
                within 24 hours.  *We utilize automated call screening to filter unsolicited                    calls. When calling, you may be asked to provide your name before the call is                   connected. Thank you for helping us keep our lines clear for our community!
              </p>

              <div className="space-y-6">
                <button
                  onClick={() => setShowContact(!showContact)}
                  className="flex items-center gap-3 px-6 py-3 bg-accent/10 hover:bg-accent/20 text-accent font-semibold rounded-xl transition-colors"
                  aria-expanded={showContact}
                >
                  {showContact ? (
                    <EyeOff className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <Eye className="w-5 h-5" aria-hidden="true" />
                  )}
                  {showContact ? 'Hide Phone Number & Email' : 'Show Phone Number & Email'}
                </button>

                {showContact && (
                  <div className="space-y-6 animate-[fadeIn_0.3s_ease-out]">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-accent" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary">Phone</p>
                        <a
                          href={`tel:${siteConfig.phone}`}
                          className="text-gray-600 hover:text-accent transition-colors"
                        >
                          {siteConfig.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-accent" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary">Email</p>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="text-gray-600 hover:text-accent transition-colors"
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Office</p>
                    <p className="text-gray-600">{siteConfig.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 rounded-2xl p-8 lg:p-10"
                noValidate
              >
                {status === 'success' && (
                  <div
                    className="mb-6 flex items-center gap-3 bg-green-50 text-green-700 p-4 rounded-xl"
                    role="alert"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                    <p>Thank you! Your message has been sent. We&rsquo;ll be in touch soon.</p>
                  </div>
                )}
                {status === 'error' && (
                  <div
                    className="mb-6 flex items-center gap-3 bg-red-50 text-red-700 p-4 rounded-xl"
                    role="alert"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                    <p>Something went wrong. Please try again or contact us directly.</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      {formLabels.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      {formLabels.email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                      {formLabels.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-primary mb-2"
                    >
                      {formLabels.service}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm bg-white"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    {formLabels.message} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm resize-y"
                    placeholder="Tell us about your project or problem..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      {formLabels.submit}
                      <Send className="w-4 h-4 ml-2" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
