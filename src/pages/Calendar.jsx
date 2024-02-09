import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useState } from 'react';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers';


export default function StaticDatePickerLandscape() {
  

  return (
    <div className="w-full flex mb-4 items-center justify-between">
      <div class="calendar">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            orientation="portrait"
           
          />
        </LocalizationProvider>
      </div>

    </div>
  );
}