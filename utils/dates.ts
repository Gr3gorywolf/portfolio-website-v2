import { DateTime } from "luxon";
export const humanReadableDate = (date: string): string => {
    const dt = DateTime.fromISO(date);
    return dt.toLocaleString(DateTime.DATETIME_MED, { locale: "en-US" });
}