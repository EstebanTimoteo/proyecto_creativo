import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",

  build: {
    rollupOptions: {
      input: {
        // Esta es la entrada principal (index.html)
        index: resolve(__dirname, "index.html"),
        whoarewe: resolve(__dirname, "whoarewe.html"),
        aviso_legal: resolve(__dirname, "aviso_legal.html"),
        contacto: resolve(__dirname, "contacto.html"),

        cursos: resolve(__dirname, "cursos.html"),
        cursos: resolve(__dirname, "./cursos/ciberseguridad.html"),
        cursos: resolve(__dirname, "./cursos/desarrollo_blockchain.html"),
        cursos: resolve(__dirname, "./cursos/desarrollo_web.html"),
        cursos: resolve(__dirname, "./cursos/inteligencia_artificial.html"),

        login: resolve(__dirname, "login.html"),

        noticias: resolve(__dirname, "noticias.html"),
        noticias: resolve(__dirname, "./noticias/algoritmo.html"),
        noticias: resolve(__dirname, "./noticias/diagrama_flujo.html"),
        noticias: resolve(__dirname, "./noticias/lenguaje_natural.html"),

        registro: resolve(__dirname, "registro.html"),

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
