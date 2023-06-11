import { Ping, connectDB } from '@mqtt-pinger/database-models';
import dayjs from 'dayjs';
import { IncomingMessage, ServerResponse } from 'http';
export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  //@ts-expect-error ignore
  const { startDate: startDateString, endDate: endDateString } = req.query;
  if (req.method === 'GET') {
    console.log(startDateString);
    console.log(endDateString);

    const startTime = dayjs(startDateString).toDate();
    const endTime = dayjs(endDateString).toDate();

    await connectDB();
    const data = await Ping.aggregate([
      {
        $match: {
          eventTime: {
            $gte: startTime,
            $lte: endTime,
          },
        },
      },
      {
        $project: {
          timestamp: '$eventTime',
        },
      },
      {
        $group: {
          _id: {
            $dateToString: {
              format: '%Y-%m-%d %H:%M:%S',
              date: {
                $dateFromParts: {
                  year: { $year: '$timestamp' },
                  month: { $month: '$timestamp' },
                  day: { $dayOfMonth: '$timestamp' },
                  hour: { $hour: '$timestamp' },
                  minute: { $minute: '$timestamp' },
                  second: { $second: '$timestamp' },
                },
              },
              timezone: 'Europe/Berlin', // Replace with your desired timezone
            },
          },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);
    //@ts-expect-error ignore
    return res.status(200).json({ data });
  }
  //@ts-expect-error ignore
  return res.status(404).send({});
}
