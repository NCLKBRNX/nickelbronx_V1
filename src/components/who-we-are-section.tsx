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
      <section className="who_we_are_section pt-[86px] pb-[120px]">
      <div class="whoweare_inner_section">

<div class="inner-container p-8">
             <div class="we-are-inner flex items-center">
             <div class="title-part">
          <h2 class="leading-[24px] text-[16px] font-light mb-[6px] tracking-[6.4px]">{subtitleWwa}</h2>
          <h3 class="tracking-[4px] leading-[43px] font-bold text-[35px]" dangerouslySetInnerHTML={{ __html: titleWwa }} />

             </div>
             <div class="discription-part">
           <div class="description leading-[31px] font-normal text-[20px] mb-[40px]">{descriptionWwa}</div>
       <div class="cta_btutton whoweare-btn text-center">
          {ctaWwa && ctaWwa.ctaWwaTitle && ctaWwa.ctaWwaLink && (
            <a 
              href={ctaWwa.ctaWwaLink.url} 
              target={ctaWwa.ctaWwaLink.target} 
              title={ctaWwa.ctaWwaLink.title} 
              className="home-btn uppercase text-center pt-[10px] pb-[10px] pl-[25px] pr-[25px] text-[20px] font-extrabold leading-tight" 
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