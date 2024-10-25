// pages/api/stories.js
import cron from 'node-cron';
import Story from '../../models/Story';

cron.schedule('0 * * * *', async () => {
  await Story.deleteMany({ expiresAt: { $lt: new Date() } });
});
