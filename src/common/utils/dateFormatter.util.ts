import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export function dateFormatter(inputDate: Date) {
  const dateOrigin = inputDate;
  const date = new Date(dateOrigin);
  const formattedDate = date.toLocaleString('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  return formattedDate;
}

export function oneDigitdateFormatter(inputDate: Date) {
  const dateOrigin = inputDate;
  const date = new Date(dateOrigin);
  const formattedDate = date.toLocaleString('id-ID', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
  return formattedDate;
}

export function timeFormatter(inputDate: Date) {
  const timeString = inputDate;
  const stringToDate = new Date(timeString);
  const hours = String(stringToDate.getUTCHours()).padStart(2, '0');
  const minutes = String(stringToDate.getUTCMinutes()).padStart(2, '0');
  const formattedTime = `${hours}:${minutes}`;
  return formattedTime;
}

export function timeStrictFormatter(inputTime: any) {
  //only time
  const time = inputTime;
  const formattedTime = time.substring(0, 5);
  return formattedTime;
}

export function dateStringFormatter(inputDate: Date) {
  const date = new Date(inputDate);
  const formattedDate = date.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return formattedDate;
}

export function dateISOFormatter(inputDate: Date) {
  const convertedDate = inputDate.toISOString();
  const zonedDate = dayjs(convertedDate).format('YYYY/MM/DD HH:mm:ss');
  return zonedDate;
}
export function timeISOFormatter(inputDate: Date) {
  const convertedDate = inputDate.toISOString();
  const zonedTime = dayjs(convertedDate).format('HH:mm');
  return zonedTime;
}
