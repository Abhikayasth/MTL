const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const path = require('path');

// Define your website's domain (without trailing slash)
const domain = 'https://www.gajananfinance.in/'; // Change this to your actual domain

// List of all your important pages (from your React app routes)
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },                 // Home
  { url: '/about-us', changefreq: 'monthly', priority: 0.7 },        // About Us
  { url: '/services', changefreq: 'monthly', priority: 0.8 },        // Services
  { url: '/testimonials', changefreq: 'monthly', priority: 0.7 },    // Testimonials
  { url: '/contact-us', changefreq: 'monthly', priority: 0.8 },      // Contact Us
  { url: '/contact-form', changefreq: 'monthly', priority: 0.8 },    // Contact Form
  { url: '/apply', changefreq: 'monthly', priority: 0.8 },           // Apply Page
  { url: '/faqs', changefreq: 'monthly', priority: 0.7 },            // FAQs
  { url: '/terms-of-service', changefreq: 'monthly', priority: 0.6 }, // Terms and Conditions
  { url: '/privacy-policy', changefreq: 'monthly', priority: 0.6 },   // Privacy Policy
];

// Define the path for the sitemap file
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');

// Create sitemap stream
const sitemap = new SitemapStream({ hostname: domain });

// Stream and write to sitemap.xml
streamToPromise(
  pages.reduce((stream, page) => stream.write(page), sitemap).end()
)
  .then((data) => {
    fs.writeFileSync(sitemapPath, data.toString());
    console.log('Sitemap generated successfully!');
  })
  .catch((err) => {
    console.error('Error generating sitemap:', err);
  });
