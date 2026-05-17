import { Link } from 'react-router-dom';
import { Monitor, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { siteConfig, navLinks } from '../data/siteContent';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white" role="contentinfo">
      <div className="container-custom mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <Monitor className="w-7 h-7 text-accent" aria-hidden="true" />
              <span>{siteConfig.businessName}</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {siteConfig.tagline}. Affordable web design and technology solutions for small businesses.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {['Custom Website Design', 'Announcement Website', 'IT Consulting', 'Internet Solutions'].map(
                (service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-white/60 hover:text-accent transition-colors text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <Link
              to="/contact"
              className="text-white/60 hover:text-accent transition-colors text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} {siteConfig.businessName}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/terms" className="text-white/40 hover:text-white/60 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-white/40 hover:text-white/60 text-sm transition-colors">
              Privacy Notice
            </Link>
            <Link to="/consumer-health-data" className="text-white/40 hover:text-white/60 text-sm transition-colors">
              Consumer Health Data Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
