import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

function About() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "img/banners/rfm.png"}) {
       childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 150, height: 150)
      }
    }
  }
`);
  return (
    <IndexLayout>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Wrapper css={PageTemplate}>
        <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav isHome={false} />
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <article className="post page" css={[PostFull, NoImage]}>
              <PostFullHeader className="post-full-header">
                <PostFullTitle className="post-full-title">>About</PostFullTitle>
              </PostFullHeader>

              <PostFullContent className="post-full-content">
                <div className="post-content">
                 <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <GatsbyImage
                    image={getImage(data.file)}
                    alt="Profile picture"
                    style={{ borderRadius: '50%', marginBottom: '1rem' }}
                    />
                </div>
                  <h5>
                        <a href="https://linkedin.com/in/raulfmoreno">Raul Felipe Moreno</a>
                  </h5>
                  <h2>Perfil Profesional</h2>
      <p>El Magister Raúl Felipe Moreno, es abogado panameño con número de idoneidad 25920, es graduado de la Universidad Interamericana de Panamá, realizó una maestría de la Universidad Aden en Derecho de Negocios.</p>
      <p>Es especialista en ámbitos de ciberdelitos con enfoque en ciberseguridad y Inteligencia de fuentes abiertas (OSINT), cuenta con un enfoque multidisciplinario, combinando conocimientos legales, técnicos y analíticos. Su experiencia abarca desde la asesoría legal en medidas preventivas de seguridad informática hasta la gestión de incidentes de ciberseguridad, incluyendo la recuperación de datos.</p>
      <h3>Logros Formativos</h3>
      <ul>
        <li>Inteligencia de Motores de Búsqueda Alternativos y Avanzados (AASEI) – Antisyphon Training</li>
        <li>Fundamentales de Inteligencia de Fuente Abierta – TCM Security</li>
        <li>Inteligencia de Fuente Abierta – Instituto de Gobernanza Basel</li>
        <li>Perspectivas sobre el Cibercrimen y la Evidencia Electrónica – Academia de Anti-corrupción Internacional</li>
        <li>Especialización de Ciberseguridad y Seguridad Nacional – Universidad de Colorado</li>
        <li>Detectando y defendiendo en contra de ciberamenazas – Universidad Charles Sturt</li>
        <li>Inteligencia de amenazas cibernéticas – Academia Backtrack</li>
        {/* ...other courses and diplomas... */}
      </ul>
      <p>Entre otros cursos y diplomados que realiza con frecuencia para mantenerse actualizado sobre una temática que se mantiene en constante desarrollo, de igual manera ha tenido el privilegio de participar en numerosas conferencias nacionales e internacionales como orador invitado para desarrollar temas relacionados a los fenómenos de ciberdelitos, la emergencia de crímenes tecnológicos, y ciberseguridad.</p>
                  
                </div>
              </PostFullContent>
            </article>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
}

export default About;
