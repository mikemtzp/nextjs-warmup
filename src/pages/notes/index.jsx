import React from 'react';
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
    <div>
      <h1>Notes Page</h1>

      {/* For dynamic routes navigation we pass to href the path of the page
        rather than an URL and we use the 'as' to pass an ID e.g. as={`notes/${id}`}*/}
      <p>
        <Link href='notes/[id]' as={`notes/1`}>
          Note 1
        </Link>
      </p>

      <p>
        <Link
          href='notes/[programmatic-routing]'
          as={`notes/programmatic-routing`}
        >
          Got to Programmatic Routing
        </Link>
      </p>

      <p>
        <Link href='/'>Got to Home</Link>
      </p>

      {notes.map((note) => (
        <div key={note.id}>
          <Link key={note.id} href='/notes/[id]' as={`/notes/${note.id}`}>
            <strong>{note.title}</strong>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
