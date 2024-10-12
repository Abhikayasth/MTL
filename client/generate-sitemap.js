const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const path = require('path');

// Define your website's domain (without trailing slash)
const domain = 'https://www.gajananfinance.in/'; // Change this to your actual domain

// List of all your important pages (from your React app routes)
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about-us', changefreq: 'monthly', priority: 0.7 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/testimonials', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact-form', changefreq: 'monthly', priority: 0.8 },
  { url: '/apply', changefreq: 'monthly', priority: 0.8 },
  { url: '/faqs', changefreq: 'monthly', priority: 0.7 },
  { url: '/terms-of-service', changefreq: 'monthly', priority: 0.6 },
  { url: '/privacy-policy', changefreq: 'monthly', priority: 0.6 },
];

// Define the path for the sitemap file
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');

// Create a write stream for the sitemap file
const sitemap = new SitemapStream({ hostname: domain });

// Create a stream to write to the sitemap.xml file
const writeStream = fs.createWriteStream(sitemapPath);

// Pipe the sitemap data to the file stream
sitemap.pipe(writeStream);

// Loop through each page and write to the sitemap
pages.forEach(page => {
  sitemap.write(page);
});

// Close the stream when done
sitemap.end();

// Ensure that the stream is converted to a promise and handle completion
streamToPromise(sitemap).then(() => {
  console.log('Sitemap generated successfully!');
}).catch((err) => {
  console.error('Error generating sitemap:', err);
});
