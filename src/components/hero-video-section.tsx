import { gql } from "../__generated__";

import Link from "next/link";
import {
  HeroVideo
} from "../__generated__/graphql";


type HeroVideoProps = {
    heroVideoUri: HeroVideo['heroVideoUri']
}


export default function HeroVideoSection( { heroVideoUri } : HeroVideoProps ) {
    return (
      <section className="video-section">
      <div class="video_inner_section pl-[60px] pr-[60px]">
         <video controls width="100%">
          <source src="https://nickelbronx1.wpenginepowered.com/video/homevideo.mp4" type="video/mp4" />
          <source src="https://example.com/video/homevideo.webm" type="video/webm" />
        </video>

        
</div>
      </section>
    );
  }

  HeroVideoSection.fragments = {
    heroVideoSectionFragments: gql(`
        fragment HeroVideo on HeroVideo {
            __typename
            heroVideoUri
          }
    `),
  }