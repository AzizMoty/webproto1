import React from 'react';

const footerLinks = {
  'Get to Know Us': [
    { label: 'Careers', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Sustainability', href: '#' },
    { label: 'Press Center', href: '#' },
    { label: 'Investor Relations', href: '#' },
  ],
  'Make Money with Us': [
    { label: 'Sell Products', href: '#' },
    { label: 'Become an Affiliate', href: '#' },
    { label: 'Advertise Your Products', href: '#' },
    { label: 'Self-Publish', href: '#' },
    { label: 'Become a Partner', href: '#' },
  ],
  'Payment Products': [
    { label: 'Shop with Points', href: '#' },
    { label: 'Reload Your Balance', href: '#' },
    { label: 'Currency Converter', href: '#' },
    { label: 'Gift Cards', href: '#' },
    { label: 'Secured Shopping', href: '#' },
  ],
  'Let Us Help You': [
    { label: 'Your Account', href: '#' },
    { label: 'Your Orders', href: '#' },
    { label: 'Shipping Rates', href: '#' },
    { label: 'Returns', href: '#' },
    { label: 'Help Center', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#232f3e] text-white mt-8">
      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-full bg-[#37475a] hover:bg-[#485769] py-4 text-center text-sm"
      >
        Back to top
      </button>

      {/* Main footer content */}
      <div className="max-w-[1500px] mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-700 mt-8">
        <div className="max-w-[1500px] mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
              <a href="#" className="hover:text-white hover:underline">Conditions of Use</a>
              <a href="#" className="hover:text-white hover:underline">Privacy Notice</a>
              <a href="#" className="hover:text-white hover:underline">Interest-Based Ads</a>
            </div>
            <div>
              © {new Date().getFullYear()} DealFinder. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}