import { gql } from "../__generated__";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import { GetHomePageQuery } from "../__generated__/graphql";
import { FaustTemplate } from "@faustwp/core";
import HeroSection from "../components/hero-section";
import HeroVideoSection from "../components/hero-video-section";
import WhoWeAreSection from "../components/who-we-are-section";


const Component: FaustTemplate<GetHomePageQuery> = (props) => {
  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props?.data?.primaryMenuItems?.nodes ?? [];
  const brandLogo = props.data.nickelBronxHeader.config.brandLogo.node.sourceUrl;
  const ctaText   = props.data.nickelBronxHeader.config.ctaText;
  const ctaLink   = props.data.nickelBronxHeader.config.ctaLink;
  // @ts-ignore
  const currentEditorBlocks   = props?.data?.page?.editorBlocks;
  console.log(currentEditorBlocks);

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
        BrandLogo={brandLogo}
        CTAText={ctaText}
        CTALink={ctaLink}
      />
      
      {/* Content */}
      {/* {currentEditorBlocks.map((item, clientId ) => { item.__typename === 'AcfHeroSection' ?? <HeroSection heroTitle={item.__typen} />})} */}

      {currentEditorBlocks && (
currentEditorBlocks.map ( ( item ,index ) => (
<>
{ 
item.__typename === 'AcfHeroSection' && <HeroSection key={index} heroTitle={item.heroSectionBlocks.heroTitle} heroDescription={item.heroSectionBlocks.heroDescription} heroCta={item.heroSectionBlocks.heroCta}/>
}
{
  item.__typename === 'AcfHeroVideoSection' && <HeroVideoSection key={index} heroVideoUri={item.heroVideo.heroVideoUri}/>
}
{
  item.__typename === 'AcfWhoWeAreSection' && <WhoWeAreSection key={index} subtitleWwa={item.blocksWhoWeAre.subtitleWwa} titleWwa={item.blocksWhoWeAre.titleWwa} descriptionWwa={item.blocksWhoWeAre.descriptionWwa} ctaWwa={item.blocksWhoWeAre.ctaWwa}  />
}

</>
)
)
)

     }


      <Footer />
    </>
  );
};

Component.query = gql(`
query GetHomePage {
  generalSettings {
    title
    description
  }
  primaryMenuItems: menuItems(where: {location: PRIMARY}) {
    nodes {
      id
      uri
      path
      label
      parentId
      cssClasses
      menu {
        node {
          name
        }
      }
    }
  }
  nickelBronxHeader {
    config {
      ctaText
      ctaLink
      brandLogo {
        node {
          sourceUrl
        }
      }
    }
  }
  page(id: "cG9zdDoyMw==") {
    editorBlocks {
      ... on AcfHeroSection {
        heroSectionBlocks {
          heroCta {
            ctaLink {
              target
              title
              url
            }
            ctaText
          }
          heroDescription
          heroTitle
        }
        clientId
      }
     ... on AcfHeroVideoSection {  
         heroVideo {
          heroVideoUri
        }
        clientId
      }

       ... on AcfWhoWeAreSection {
        blocksWhoWeAre {
           ctaWwa {
            ctaWwaLink {
              target
              title
              url
            }
            ctaWwaTitle
          }
         subtitleWwa
            titleWwa
            descriptionWwa
        }
        clientId
      }

    }
  }
}
`);

export default Component;
