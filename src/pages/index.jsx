/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

const Page = ({content}) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>{content.title}</h1>
    </div>
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