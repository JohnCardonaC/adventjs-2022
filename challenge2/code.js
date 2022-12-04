"use strict";

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"];

function countHours(year, holidays) {
  let extras = 0;
  for (const holiday of holidays) {
    const date = new Date(`${holiday}, ${year}`);
    const day = date.getDay();
    extras += day !== 0 && day !== 6 ? 1 : 0;
  }
  return extras * 2;
}
