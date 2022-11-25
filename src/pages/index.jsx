/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import dynamic from 'next/dynamic';
// With this import we'll get an error because 'document' doesn't exist on the server side
// import SponsoredAdd from '../components/SponsoredAdd'

/* With dynamic import the component won't be visible in the source code
because it wasn't rendered on the server by using the { ssr: false },
it's injected in execution time.
This is ideal while working with third party libraries that use browser specific stuff */
const SponsoredAdd = dynamic(
  () => import('../components/SponsoredAdd'),
  { ssr: false }
)

const Page = ({content}) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>{content.title}</h1>
    </div>
    {/* <h1>This will be prerendered</h1> */}
    {/* this won't because of dynamic import*/}
    <SponsoredAdd />
  </div>
)

export default Page;

export function getServerSideProps() {
  // get data from CMS
  return {
    props: {
      content: {
        title: 'This is a really nice taking notes app'
      }
    }
  }
}