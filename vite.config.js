import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",

  build: {
    rollupOptions: {
      input: {
        // Esta es la entrada principal (index.html)
        main: resolve(__dirname, "index.html"),

        /* 
           PARA AÑADIR MÁS PÁGINAS:

              nombre_interno: resolve(__dirname, 'nombre_del_archivo.html'),
        */

        // Ejemplo para añadir tu página de ubicación:
        //location: resolve(__dirname, 'location.html'),

        // Ejemplo si en el futuro añades una página de contacto:
        // contacto: resolve(__dirname, 'contacto.html'),
      },
    },
  },
});
