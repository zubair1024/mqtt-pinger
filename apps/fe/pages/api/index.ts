import { connectDB } from '@mqtt-pinger/database-models';
export default async function handler(req, res) {
  await connectDB();
  res.status(200).json({ name: 'John Doe' });
}
