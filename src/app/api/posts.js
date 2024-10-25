// pages/api/posts.js
import dbConnect from '../../utils/dbConnect';
import Post from '../../models/Post';

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const { content } = req.body; // expecting 'content' in the request body
        if (!content) {
          return res.status(400).json({ success: false, message: "Content is required" });
        }
        const post = await Post.create({ content });
        res.status(201).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
