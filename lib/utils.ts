import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatFromMMMYYYY(dateStr: string): Date {
  return new Date(dateStr);
}

export function formatWorkPeriod(
  startDate?: Date,
  endDate?: Date
): string {
  if (!startDate) return "";

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : "Present";

  return `${start} - ${end}`;
}
