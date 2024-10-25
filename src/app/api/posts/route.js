// src/app/api/posts/route.js
import dbConnect from '../../../utils/dbConnect';
import Post from '../../../models/Post';

export async function POST(req) {
  await dbConnect();

  const body = await req.json();
  
  try {
    const post = await Post.create(body);
    return new Response(JSON.stringify({ success: true, data: post }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 400,
    });
  }
}
