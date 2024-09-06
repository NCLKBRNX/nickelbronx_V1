import { gql } from "../__generated__";

import Link from "next/link";
import {
  BlocksWhoWeAre
} from "../__generated__/graphql";


type WhoWeAreSectionProps = {
    subtitleWwa: BlocksWhoWeAre['subtitleWwa'],
    titleWwa: BlocksWhoWeAre['titleWwa'],
    descriptionWwa: BlocksWhoWeAre['descriptionWwa'],
    ctaWwa: BlocksWhoWeAre['ctaWwa']

}


export default function WhoWeAreSection( { subtitleWwa, titleWwa, descriptionWwa, ctaWwa } : WhoWeAreSectionProps ) {
    return (
      <section className="who_we_are_section">
      <div className="whoweare_inner_section">

<div className="inner-container">
             <div className="we-are-inner">
             <div className="title-part">
          <h2>{subtitleWwa}</h2>
          <h3 dangerouslySetInnerHTML={{ __html: titleWwa }} />

             </div>
             <div className="discription-part">
           <div className="description">{descriptionWwa}</div>
          <div className="whoweare-btn text-center">
          {ctaWwa && ctaWwa.ctaWwaTitle && ctaWwa.ctaWwaLink && (
            <a 
              href={ctaWwa.ctaWwaLink.url} 
              target={ctaWwa.ctaWwaLink.target} 
              title={ctaWwa.ctaWwaLink.title} 
              className="home-btn" 
            >
              {ctaWwa.ctaWwaTitle}
            </a>
          )}        </div>

             </div>

             </div>
</div>

        </div>
      </section>
    );
  }

  WhoWeAreSection.fragments = {
    whoWeAreSectionFragments: gql(`
        fragment BlocksWhoWeAre on BlocksWhoWeAre {
            __typename
            subtitleWwa
            titleWwa
            descriptionWwa
            ctaWwa {
            ctaWwaLink {
              target
              title
              url
            }
            ctaWwaTitle
          }
        }
    `),
  }