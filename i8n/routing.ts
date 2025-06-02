import {defineRouting} from 'next-intl/routing';
 
import { LocalePrefix } from 'next-intl/routing'; // Import LocalePrefix type for strict typing

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ro'],

  // Used when no locale matches
  defaultLocale: 'en',

  // This is the key property: 'as-needed'
  localePrefix: 'as-needed' as LocalePrefix // Explicitly cast to LocalePrefix for strict typing
});