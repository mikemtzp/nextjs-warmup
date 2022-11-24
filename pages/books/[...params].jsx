import React from 'react';
import { useRouter } from 'next/router';


const Page = () => {
  const router = useRouter();

  // using the [...params].jsx name in the file allows us to
  // access to all the further routes after the /books route
  // For instance /books/1/2/3/4...
  const { params } = router.query
  // params will return an array containing all the further values in the route
  console.log(params);

  return (
    <h1>
      Book
    </h1>
  )
}

// If you want to include the parent path in your catch-all route, you can use an optional catch-all route.
// VERY USEFUL when building a documentation site where the layout is pretty much the same
// docs/[[...param]].jsx
// See https://youtu.be/ZHn726VDoIY?t=605

export default Page;