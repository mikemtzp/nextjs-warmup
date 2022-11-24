import nc from 'next-connect';
import notes from '../../../data/data';

const handler = nc()
  .post((req, res) => {
    const note = {
      ...req.body,
      id: Date.now()
    }
    notes.push(note)
    res.json({note: note})
  })
  .get((req, res) => {
    res.json({data: notes})
  })

export default handler
