import React from 'react';
import { useRouter } from 'next/router';
// use { withRouter } when working with class components

// By putting our component in the route pages/notes/[id].jsx
// Next will automatically set the route to be 'http://localhost:3000/notes/:id'

const Page = () => {
  // With useRouter we are able to use the query paramas
  const router = useRouter();

  // router.query is gonna be an object with any associated params on there
  // We are destructuring { id } because that's the name we gave to the [id].jsx file
  const { id } = router.query

  // The next snippet is going to display the id that we pass to the route in the 'h1' title
  return (
    <h1>
      Note {id}
    </h1>
  )
}

export default Page;
