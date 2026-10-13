export const SITE_URL = 'https://moneybee.yellowbytes.dev';
export const SITE_TITLE = 'MoneyBee — Expense Tracker & Budget Planner for Android';
export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=media.uqab.cartera';
export const SITE_DESCRIPTION = 'MoneyBee combines expense tracking, budgets, savings goals, loans, and shared finances in a notebook-style money manager for Android.';

export function absoluteUrl(path: string) {
  return new URL(path, `${SITE_URL}/`).toString();
}
