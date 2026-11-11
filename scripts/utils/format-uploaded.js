import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import relativeTime from "https://unpkg.com/dayjs@1.11.13/esm/plugin/relativeTime/index.js";

dayjs.extend(relativeTime);

export function formatUploaded(date) {
    return dayjs(date).fromNow()
};