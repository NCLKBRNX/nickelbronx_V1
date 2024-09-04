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
      <section className="bg-primary banner-section pt-[80px] pb-[320px] ">
      <div class="banner_inner_section">
                  <h1 class="font-bold text-[70px] text-center leading-tight" dangerouslySetInnerHTML={{ __html: heroTitle }} />

        <div class="hero_description font-normal text-[22px] text-center leading-[34px]">
         <p> {heroDescription}</p>
        </div>
        <div class="cta_btutton banner-button text-center flex justify-center">
          {heroCta && heroCta.ctaText && heroCta.ctaLink && (
            <a 
              href={heroCta.ctaLink.url} 
              target={heroCta.ctaLink.target} 
              title={heroCta.ctaLink.title} 
              className="home-btn banner-btn uppercase text-center pt-[10px] pb-[10px] pl-[25px] pr-[25px] text-[20px] font-extrabold leading-tight" 
            >
              {heroCta.ctaText}
            </a>
          )}        </div>
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