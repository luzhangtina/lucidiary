// @ts-check
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
    site: import.meta.env.MODE === 'production' ? 'https://luzhangtina.github.io/lucidiary' : 'http://localhost:4321',
    base: import.meta.env.MODE === 'production' ? '/lucidiary/' : '/',
});

console.log(import.meta.env.BASE_URL);
