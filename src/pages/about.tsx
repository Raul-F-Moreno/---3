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
                  <p>
                    Soy un abogado especializado en derecho empresarial y hacking ético legal con una sólida formación analítica y una dedicación a las decisiones basadas en datos. 
                    Con solida experiencia en el campo legal y de ciberseguridad, incluyendo una participación activa en la comunidad de ciberseguridad en Panamá y la participación en diversas conferencias tanto nacionales como internacionales como ponente, 
                    estoy bien preparado para brindar asesoramiento experto a los clientes.
                  </p>
                  <p>
                    Como asesor de desarrollo empresarial, he utilizado mis habilidades en automatización e implementación de políticas de ciberseguridad para simplificar procesos y mejorar la seguridad operativa. 
                    Mi experiencia en investigación y análisis de mercado también me ha permitido brindar información valiosa a los clientes sobre el comportamiento de sus competidores.
                    Me mantengo al día con los últimos desarrollos en mi campo. Mi pasión por la ciberseguridad se refleja en mi serie de artículos, "Criminalidad 4.0", que busca explicar nuevas formas de delitos de manera sencilla.
                  </p>
                  <p>Estoy dedicado a brindar un excelente servicio a mis clientes y siempre estoy dispuesto a ir más allá para lograr sus objetivos.
                  </p>
                
                  
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
