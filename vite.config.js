// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ajuste o base path para o nome do seu repositório:
  base: '/react-cpf-validator/', 
})