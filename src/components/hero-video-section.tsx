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
      <div className="video_inner_section">
<video autoPlay loop muted playsInline width="100%">
     <source src={heroVideoUri} type="video/mp4" />
     <source src="movie.ogg" type="video/ogg" />
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