'use client';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

const Page = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow w-min"
    />
  );
};

export default Page;
