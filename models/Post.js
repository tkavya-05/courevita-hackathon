// models/Post.js
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  content: String,
  createdAt: { type: Date, default: Date.now },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Like' }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

export default mongoose.models.Post || mongoose.model('Post', postSchema);
