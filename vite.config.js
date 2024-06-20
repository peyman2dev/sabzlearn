import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { CKEditorTranslationsPlugin } from '@ckeditor/ckeditor5-dev-translations'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),

  new CKEditorTranslationsPlugin({
    language: 'fa',
    addMainLanguageTranslationsToAllAssets: true
  }),

  ],
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
})
