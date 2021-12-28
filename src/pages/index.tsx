//#region > Imports
import {Box} from '@chakra-ui/react'
import {fields} from '@snek-at/jaen-pages'
import {graphql} from 'gatsby'

import NewsSection from '../components/organisms/sections/NewsSection'
import HeroSection from '../components/organisms/sections/HeroSection'
import ReviewSection from '../components/organisms/sections/ReviewSection'
import ProductsSection from '../components/organisms/sections/ProductsSection/2'
import AboutSection from '../components/organisms/sections/AboutSection'
import FAQSection from '../components/organisms/sections/FAQSection/2'
//#endregion

//#region > Functions
const IndexPage = ({data}) => {
  return (
    <Box>
      <HeroSection />
      <NewsSection />
      <ProductsSection
        products={[
          {
            isNew: true,
            name: 'Weapon',
            caliber: 'Kal.9×19',
            price: 11.33,
            reducedprice: 12,
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
            ]
          },
          {
            isNew: true,
            name: 'Weapon',
            caliber: 'Kal.9×19',
            price: 11.33,
            reducedprice: 12,
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
            ]
          },
          {
            isNew: true,
            name: 'Weapon',
            caliber: 'Kal.9×19',
            price: 11.33,
            reducedprice: 12,
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
            ]
          },
          {
            isNew: true,
            name: 'Weapon',
            caliber: 'Kal.9×19',
            price: 11.33,
            reducedprice: 12,
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
            ]
          },
          {
            isNew: true,
            name: 'Weapon',
            caliber: 'Kal.9×19',
            price: 11.33,
            reducedprice: 12,
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
            ]
          },
          {
            isNew: true,
            name: 'Weapon',
            caliber: 'Kal.9×19',
            price: 11.33,
            reducedprice: 12,
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
            ]
          },
          {
            isNew: true,
            name: 'Weapon',
            caliber: 'Kal.9×19',
            price: 11.33,
            reducedprice: 12,
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
            ]
          },
          {
            isNew: true,
            name: 'Weapon',
            caliber: 'Kal.9×19',
            price: 11.33,
            reducedprice: 12,
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
            ]
          }
        ]}
      />
      <FAQSection
        heading={
          <fields.TextField
            fieldName="license-heading"
            initValue="<p>I'm a heading</p>"
            rtf={false}
          />
        }
      />
      <ReviewSection
        heading={
          <fields.TextField
            fieldName="review-heading"
            initValue="<p>I'm a heading.</p>"
            rtf={false}
          />
        }
        teaser={
          <fields.TextField
            fieldName="review-teaser"
            initValue="<p>I'm a teaser</p>"
            rtf={false}
          />
        }
        data={data.allGoogleReview.nodes}
      />
      <AboutSection
        heading={
          <fields.TextField
            fieldName="about-heading"
            initValue="<p>I'm a heading</p>"
            rtf={false}
          />
        }
        teaser={
          <fields.TextField
            fieldName="about-teaser"
            initValue="<p>I'm a teaser</p>"
            rtf={false}
          />
        }
        text={
          <fields.TextField
            fieldName="about-text"
            initValue="<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>"
            rtf={false}
          />
        }
        backgroundimage={
          <fields.ImageField
            fieldName="about-image"
            initValue={{
              src: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg',
              alt: 'about-image'
            }}
            className="backgroundimage"
          />
        }
      />
    </Box>
  )
}
//#endregion

//#region > Exports
export const query = graphql`
  query {
    allGoogleReview {
      nodes {
        id
        rating
        body
        sourceImage
        source
      }
    }
  }
`

export default IndexPage
//#endregion
