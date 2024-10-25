// models/Story.js
import mongoose from 'mongoose';

const storySchema = new mongoose.Schema({
  user: { type: String, required: true },
  content: String,
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, default: () => Date.now() + 24 * 60 * 60 * 1000 }
});

export default mongoose.models.Story || mongoose.model('Story', storySchema);
