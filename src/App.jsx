import { motion } from 'framer-motion';
import { ExternalLink, Diamond, Code2, Activity } from 'lucide-react';
import AIOptimizer from './components/AIOptimizer';
import ImageSEOGallery from './components/ImageSEOGallery';
import config from './data/portfolioConfig.json';
import './index.css';

export default function App() {
  const { profile, projects, timeline, skills } = config;

  return (
    <>
      <AIOptimizer />
      
      {/* Liquid Blobs Background (Light Mode) */}
      <div className="liquid-bg-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="app-container">
        {/* HERO SECTION */}
        <motion.div 
          className="glass-panel"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <img 
            src={profile.image} 
            alt="Sarfaraz Ahamed Shovon - Best UTA from East West University" 
            style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%', border: '5px solid #fff', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', marginBottom: '1.5rem' }}
          />
          <h1 className="hero-title text-gradient-neon">
            {profile.name}
          </h1>
          <h2 className="hero-subtitle text-gradient">
            {profile.title} | {profile.institution}
          </h2>
          
          <div className="role-tags-container">
            {profile.roles.map((role, idx) => (
              <span key={idx} className="tag tag-role">
                {role}
              </span>
            ))}
          </div>

          <p className="hero-bio">
            {profile.bio}
          </p>
        </motion.div>

        {/* ELITE TECH STACK */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <h2 className="section-title text-gradient">
            <Code2 color="#2563eb" size={28} style={{ flexShrink: 0 }} /> Core Technical Arsenal
          </h2>
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <motion.div 
                key={idx} 
                className="skill-badge"
                whileHover={{ y: -5 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* MASSIVE PROJECT SHOWCASE */}
        <motion.h2 
          className="section-title text-gradient" 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          style={{ marginBottom: '1.5rem' }}
        >
          <Diamond color="#db2777" size={28} style={{ flexShrink: 0 }} /> Elite Project Portfolio
        </motion.h2>

        <div className="project-grid">
          {projects.map((proj, idx) => (
            <motion.div 
              className="glass-panel" 
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
            >
              <h3 className="project-title text-gradient-neon">{proj.name}</h3>
              <p className="project-desc">
                {proj.description}
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                {proj.tags.map((t, i) => (
                  <span key={i} className="tag">{t}</span>
                ))}
              </div>

              <a 
                href={proj.link} 
                target="_blank" 
                rel="noreferrer"
                className="repo-link"
              >
                View Repository <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* GOOGLE IMAGE SEO GALLERY */}
        <ImageSEOGallery />

        {/* GITHUB ANALYTICS & TIMELINE */}
        <div className="stats-timeline-grid">
          
          <motion.div className="glass-panel" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title text-gradient" style={{ marginBottom: '2rem' }}>
              <Activity color="#2563eb" size={28} style={{ flexShrink: 0 }} /> GitHub Live Stats
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', width: '100%' }}>
              <a href="https://github.com/Shovon021" target="_blank" rel="noreferrer" style={{ width: '100%', maxWidth: '350px' }}>
                <img src="https://github-readme-stats.vercel.app/api?username=Shovon021&show_icons=true&theme=default&hide_border=true&bg_color=ffffff00" alt="Stats" style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.05))' }} />
              </a>
              <a href="https://github.com/Shovon021" target="_blank" rel="noreferrer" style={{ width: '100%', maxWidth: '350px' }}>
                <img src="https://github-readme-streak-stats.herokuapp.com/?user=Shovon021&theme=default&hide_border=true&background=ffffff00" alt="Streak" style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.05))' }} />
              </a>
            </div>
          </motion.div>

          <motion.div className="glass-panel" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title text-gradient" style={{ marginBottom: '2rem' }}>Milestones</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {timeline.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="timeline-year">
                    {item.year}
                  </div>
                  <div style={{ paddingBottom: '1.5rem', borderBottom: timeline.length - 1 !== idx ? '1px solid rgba(0,0,0,0.05)' : 'none', flexGrow: 1, color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* FOOTER */}
        <footer style={{ textAlign: 'center', marginTop: '5rem', padding: '2rem', opacity: 0.8, fontSize: '0.85rem' }}>
          <p>© {new Date().getFullYear()} Sarfaraz Ahamed Shovon.</p>
          <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <p>East West University • Software Engineer • UTA</p>
          </div>
        </footer>
      </div>
    </>
  );
}
