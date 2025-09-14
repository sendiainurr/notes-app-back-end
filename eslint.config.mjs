import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import daStyle from 'eslint-config-dicodingacademy'; // ✅ Tambahin import ini

export default defineConfig([
  daStyle, // ✅ Tambahin ini supaya pakai style Dicoding
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node }, // ganti ke node sesuai proyek backend
  },
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs' },
  },
]);
