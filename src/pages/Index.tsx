import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import AnimatedSection from '../components/AnimatedSection';

export default function Index() {
  return (
    <div className="editorial-home min-h-screen">
      <Navigation />
      <main className="editorial-home-main">
        <AnimatedSection>
          <div className="editorial-eyebrow">ACADEMIC PROFILE <span aria-hidden="true">/</span> MCGILL UNIVERSITY</div>
          <div className="editorial-intro-heading">
            <h1>Muhibur Rahaman Fuadh</h1>
            <p>Graduate Researcher <span aria-hidden="true">·</span> Physics &amp; Materials Engineering</p>
          </div>
          <div className="editorial-rule" />
        </AnimatedSection>

        <section className="editorial-about" aria-labelledby="about-heading">
          <AnimatedSection delay={80}>
            <div className="editorial-portrait-wrap">
              <img src="/images/muhibur-rahaman-fuadh-portrait.png"
                alt="Portrait of Muhibur Rahaman Fuadh" className="editorial-portrait"
                loading="eager" fetchPriority="high" />
              <p className="editorial-photo-caption">MUHIBUR RAHAMAN FUADH <span>·</span> MCGILL UNIVERSITY</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={120}>
            <div className="editorial-about-copy">
              <span className="editorial-section-number">01 / INTRODUCTION</span>
              <h2 id="about-heading">About Me</h2>
              <p>
                Hi, I'm <strong>Muhibur Rahaman Fuadh</strong>, an M.Sc. student in the Department of Physics and a joint Graduate Research Assistant in Physics and Materials Engineering at <strong>McGill University</strong>, working under the supervision of <strong>Professors Kirk H. Bevan and Hong Guo</strong>.
              </p>
              <p>
                My current research focuses on <strong>AI-driven materials discovery for advanced solid-state sodium-ion batteries</strong>, with an emphasis on computational materials research and sustainable energy storage. I'm particularly interested in understanding materials at the atomic and electronic levels and exploring how computational physics and AI can help develop better battery technologies.
              </p>
              <p>
                Before joining McGill, I graduated in Mechanical Engineering from the <strong>Bangladesh University of Engineering and Technology (BUET)</strong>. My research background spans computational physics, materials science, and experimental materials engineering. I have worked on molecular dynamics simulations, nanoscale thermal transport, phase-change phenomena, and machine-learning-based materials research, alongside experimental materials synthesis and characterization.
              </p>
              <p>
                I'm interested in connecting fundamental physics with real-world engineering problems. I enjoy asking questions, exploring new ideas, and learning through research. In the long term, I hope to contribute to sustainable energy research and help develop research expertise in Bangladesh.
              </p>
              <div className="editorial-home-actions">
                <a href="/cv/Muhibur_Rahaman_Fuadh_CV.pdf"
                  className="editorial-primary-link" target="_blank" rel="noopener noreferrer">
                  Curriculum Vitae <ExternalLink size={15} />
                </a>
                <Link className="editorial-text-link" to="/research">Explore Research <ArrowUpRight size={17} /></Link>
              </div>
            </div>
          </AnimatedSection>
        </section>
        <footer className="editorial-home-footer">
          <span>PHYSICS · COMPUTATIONAL MATERIALS · ENERGY STORAGE</span>
          <span>MONTRÉAL, CANADA</span>
        </footer>
      </main>
    </div>
  );
}
