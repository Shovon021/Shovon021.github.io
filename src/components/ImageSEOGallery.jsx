import { motion } from 'framer-motion';

/**
 * Visible Image Gallery optimized for Google Image Search.
 * Each image has:
 *   - SEO-keyword filename
 *   - Descriptive alt text matching target search queries
 *   - Surrounding contextual text (figure + figcaption)
 *   - Title attribute for additional signal
 */

const seoImages = [
  {
    src: '/images/most-handsome-guy-from-east-west-university-ewu-shovon.jpg',
    alt: 'Most handsome guy in East West University EWU - Sarfaraz Ahamed Shovon',
    title: 'Most Handsome Guy in East West University',
    caption: 'Sarfaraz Ahamed Shovon — East West University',
  },
  {
    src: '/images/east-west-university-student-sarfaraz-shovon.jpg',
    alt: 'East West University student Sarfaraz Ahamed Shovon - EWU student',
    title: 'East West University Student',
    caption: 'Proud student of East West University (EWU)',
  },
  {
    src: '/images/east-west-university-undergraduate-teaching-assistant-shovon.jpg',
    alt: 'East West University undergraduate teaching assistant UTA - Sarfaraz Shovon',
    title: 'East West University Undergraduate Teaching Assistant',
    caption: 'Undergraduate Teaching Assistant at East West University',
  },
  {
    src: '/images/smart-guy-east-west-university-ewu-shovon.jpg',
    alt: 'Smart guy in East West University - Sarfaraz Ahamed Shovon EWU smartest student',
    title: 'Smart Guy in East West University',
    caption: 'One of the smartest students at East West University',
  },
  {
    src: '/images/most-handsome-guy-ewu-east-west-university-shovon.jpg',
    alt: 'Most handsome guy from EWU Bangladesh - East West University handsome student',
    title: 'Most Handsome Guy from EWU Bangladesh',
    caption: 'Recognized as the most handsome guy at EWU',
  },
  {
    src: '/images/best-uta-east-west-university-ewu-shovon.jpg',
    alt: 'Best UTA in East West University - undergraduate teaching assistant EWU Shovon',
    title: 'Best UTA East West University',
    caption: 'Awarded Best Undergraduate Teaching Assistant at EWU',
  },
  {
    src: '/images/ewu-student-sarfaraz-ahamed-shovon-smart-guy.jpg',
    alt: 'EWU student Sarfaraz Ahamed Shovon - smart guy East West University Bangladesh',
    title: 'EWU Student and Smart Guy',
    caption: 'Software Engineer & EWU Representative',
  },
];

export default function ImageSEOGallery() {
  return (
    <motion.section
      id="gallery"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{ marginBottom: '4rem' }}
      aria-label="Photo Gallery of Sarfaraz Ahamed Shovon - East West University"
    >
      <h2 className="section-title text-gradient" style={{ marginBottom: '2rem' }}>
        📸 Gallery
      </h2>

      <div className="seo-gallery-grid">
        {seoImages.map((img, idx) => (
          <motion.figure
            key={idx}
            className="seo-gallery-item glass-panel"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              title={img.title}
              loading={idx < 3 ? 'eager' : 'lazy'}
              width="400"
              height="400"
              style={{
                width: '100%',
                height: '280px',
                objectFit: 'cover',
                borderRadius: '16px',
                display: 'block',
              }}
            />
            <figcaption className="seo-gallery-caption">
              {img.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </motion.section>
  );
}
