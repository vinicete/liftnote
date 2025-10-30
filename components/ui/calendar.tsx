'use client';

import * as React from 'react';
import { DayPicker } from 'react-day-picker';

type CalendarProps = {
  selected?: Date;
  onSelect?: (date?: Date) => void;
  className?: string;
};

export function Calendar({ selected, onSelect, className }: CalendarProps) {
  return (
    <div className={className}>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={onSelect}
        showOutsideDays
        classNames={{
          caption: 'flex justify-center py-2 mb-2 relative items-center',
          nav: 'flex items-center',
          nav_button: 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
          table: 'w-full border-collapse',
          head_row: 'flex',
          head_cell: 'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
          row: 'flex w-full mt-2',
          cell: 'text-center text-sm p-0 relative [&:has([aria-selected])]:bg-muted first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
          day: 'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
          day_selected: 'bg-black text-white hover:bg-black/90 hover:text-white focus:bg-black focus:text-white',
          day_today: 'bg-muted text-foreground',
          day_outside: 'text-muted-foreground opacity-50',
          day_disabled: 'text-muted-foreground opacity-50',
          day_range_middle: 'aria-selected:bg-muted',
          day_hidden: 'invisible',
        }}
      />
    </div>
  );
}


