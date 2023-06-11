import styles from './index.module.css';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';

const Chart = dynamic(() => import('../components/Chart'), { ssr: false });

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  const [startTime, setStartTime] = useState<Dayjs | null>(
    dayjs().startOf('day')
  );
  const [endTime, setEndTime] = useState<Dayjs | null>(dayjs().endOf('day'));
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar></Navbar>
        <div>
          <div className="flex justify-evenly">
            <div>
              <p>Start Time</p>
              <DateTimePicker
                value={startTime}
                onChange={(value) => setStartTime(value)}
              />
            </div>
            <div>
              <p>End Time</p>
              <DateTimePicker
                value={endTime}
                onChange={(value) => setEndTime(value)}
              />
            </div>
          </div>
        </div>

        <Chart />
      </LocalizationProvider>
    </div>
  );
}

export default Index;
