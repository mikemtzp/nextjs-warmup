/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
// We use <Link> to navigate between pages using client-side routing
// Excellent choice for SPA's fast navigation. FOr external links it's better an <a> to avoid re-rendering
import Link from 'next/link';

// By putting our component in the route pages/notes/index.jsx
// Next will automatically set the rouyte to be 'http://localhost:3000/notes'
const Page = () => {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Note: ${i}` }));

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>My notes</h1>

      {/* For dynamic routes navigation we pass to href the path of the page
        rather than an URL and we use the 'as' to pass an ID e.g. as={`notes/${id}`}*/}
      {/* <p>
        <Link href='notes/[id]' as={`notes/1`}>
          Note 1
        </Link>
      </p>

      <p>
        <Link href='notes/programmatic-routing'>
          Got to Programmatic Routing
        </Link>
      </p>

      <p>
        <Link href='/'>Got to Home</Link>
      </p> */}

      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {notes.map(note => (
            <div sx={{width: '33%', p: 2}} key={note.id}>
              <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`} sx={{textDecoration: 'none', cursor: 'pointer'}}>
                  <div sx={{variant: 'containers.card',}}>
                    <strong>{note.title}</strong>
                  </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page;

/* 
* getStaticProps example:

export function getStaticProps(context) {
  const res = await fetch('https://.../posts')
  const posts = await res.json()
  return { props: { posts } }
}

* Or write server-side code directly:

Take the following example. An API route is used to fetch some data from a CMS.
That API route is then called directly from getStaticProps. This produces an additional call,
reducing performance. Instead, the logic for fetching the data from the CMS can be shared by
using a lib/ directory. Then it can be shared with getStaticProps.

// lib/load-posts.js

The following function is shared with getStaticProps and API routes from a `lib/` directory

export async function loadPosts() {
  const res = await fetch('https://.../posts/')
  const data = await res.json()
  return data
}

// pages/blog.js
import { loadPosts } from '../lib/load-posts'

This function runs only on the server side

export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the samefunction directly in `getStaticProps`
  const posts = await loadPosts()

  // Props returned will be passed to the page component
  return { props: { posts } }
}

* getServerSideProps example:

export async function getServerSideProps() {
  const response = await fetch(`https://somedata.com`)
  const data = await response.json()
  return { props: { data } }
}

getStaticProps: is executed ONCE at build time. Use it when data comes from a headless CMS.
getsStaticPaths: use it if we have  a synamic url [id].jsx and we NEED the value of the  params'. Must be used with getStaticProps
getServerSideProps: is always executed per request. It's true SSR. Better for placing a dynamic user ID.
*/