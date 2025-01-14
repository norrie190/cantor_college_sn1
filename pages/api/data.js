import { getAllData } from '../../lib/database';

export default function handler(req, res) {
  if (req.method === 'GET') {
    getAllData((data) => {
      res.status(200).json(data);
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
