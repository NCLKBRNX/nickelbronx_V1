import { gql } from "../__generated__";

import Link from "next/link";
import {
  HeroSectionBlocks
} from "../__generated__/graphql";


type HeroSectionProps = {
    heroCta: HeroSectionBlocks['heroCta'],
    heroTitle: HeroSectionBlocks['heroTitle'],
    heroDescription: HeroSectionBlocks['heroDescription']
}

// Function to strip out all HTML tags and keep only the text content
function stripHtmlTags(html: string) {
  return html.replace(/<[^>]*>?/gm, ''); // This removes all HTML tags
}
export default function HeroSection( { heroTitle, heroDescription, heroCta } : HeroSectionProps ) {
    return (
      <section className="bg-primary banner-section">
      <div className="banner_inner_section">
<div className="container">
                  <h1 dangerouslySetInnerHTML={{ __html: heroTitle }} />

        <div className="hero_description">
         <p> {heroDescription}</p>
        </div>
        <div className="cta_btutton banner-button">
          {heroCta && heroCta.ctaText && heroCta.ctaLink && (
            <a 
              href={heroCta.ctaLink.url} 
              target={heroCta.ctaLink.target} 
              title={heroCta.ctaLink.title} 
              className="home-btn banner-btn" 
            >
              {heroCta.ctaText}
            </a>
          )}        </div>

          </div>
        </div>
      </section>
    );
  }

  HeroSection.fragments = {
    heroSectionFragments: gql(`
        fragment HeroSectionBlocks on HeroSectionBlocks {
            __typename
            heroDescription
            heroTitle
            heroCta {
            ctaLink {
              target
              title
              url
            }
            ctaText
          }
        }
    `),
  }