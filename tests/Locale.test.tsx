import { describe, expect, it } from 'vitest';
import id from '../src/locales/id/locale.json';
import en from '../src/locales/en/locale.json';

// Make sure every key in the locale matches
describe('Locale', () => {
  it('All locale keys match', () => {
    const en_keys = Object.keys(en).sort();
    const id_keys = Object.keys(id).sort();
    expect(en_keys).toEqual(id_keys);
  });
});
