import React from 'react';

export interface CalendarProps {
  fechaCompleta: Date | null;
}

export const CalendarContext: React.FC<CalendarProps> = () => {
  return (
    <>
      <h2>HOLA</h2>
    </>
  );
};
