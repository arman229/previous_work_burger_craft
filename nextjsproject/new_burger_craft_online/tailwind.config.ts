import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

    },
  },
  plugins: [

    require('flowbite/plugin'),
  ],
}
export default config
