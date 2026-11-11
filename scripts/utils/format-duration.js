export function formatIsoDuration(duration) {
  const regex = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/i;
  const matches = duration.match(regex);

  if (!matches) return "00:00";

  const hours = matches[1] ? matches[1].padStart(2, '0') + ':' : '';
  const minutes = (matches[2] || '0').padStart(2, '0');
  const seconds = (matches[3] || '0').padStart(2, '0');

  return `${hours}${minutes}:${seconds}`;
}