import nc from 'next-connect';

const handler = nc()
  .get((req, res) => {
    res.json({message: 'ok'})
  })
  .post((req, res) => {
    res.json({message: 'posted'})
  })

// It's important to ALWAYS EXPORT to make the api work correctly
export default handler;

// Doing a simple api with a message 'Hello'
// export default (req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'application/json')
//   res.end(JSON.stringify({ message: 'hello' }))
// }