<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Ciclo de vida de una aplicación móvil'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    // Bloque 1/5: imagen-iconobloque-texto 4:8
    .row.mb-5
      .col-lg-8
        .bg-color-4.p-4.py-lg-5.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El ciclo de vida de una aplicación móvil abarca todas las etapas desde la concepción de la idea hasta su eventual retiro del mercado. Comprender este proceso es esencial para desarrollar aplicaciones exitosas y sostenibles.

        p(data-aos="fade-left").mb-4 A continuación, se detallan las fases principales:
      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")

    // Bloque 2/5: infografia-1
    .bg-full-width.bg-color-7.mb-0
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema4/infografia1.svg', alt='', style="max-width: 1106px;").mx-auto

              .bg-color-white.box-shadow.p-3(x="54%" y="60%" numero="+")
                h5 Ideación y análisis de requisitos
                p Esta fase inicial implica identificar una necesidad o problema que la aplicación buscará resolver. Se realiza un análisis de mercado, se definen los objetivos y se establecen los requisitos funcionales y no funcionales. Por ejemplo, al desarrollar una aplicación de seguimiento de hábitos, se determinarán funcionalidades como la creación de tareas, recordatorios y estadísticas de progreso.

              .bg-color-white.box-shadow.p-3(x="38%" y="68%" numero="+")
                h5 Diseño de la aplicación
                p En esta etapa, se conceptualiza la arquitectura de la aplicación, incluyendo la interfaz de usuario (UI) y la experiencia de usuario (UX). Se crean prototipos y wireframes utilizando herramientas como Figma o Adobe XD. El objetivo es asegurar una navegación intuitiva y una estética atractiva que faciliten la interacción del usuario con la aplicación.

              .bg-color-white.box-shadow.p-3(x="75.5%" y="32%" numero="+")
                h5 Desarrollo
                p Aquí se lleva a cabo la codificación de la aplicación, seleccionando el enfoque adecuado: nativo (Swift para iOS, Kotlin para Android) o multiplataforma (Flutter, React Native). Se implementan las funcionalidades definidas, se integran APIs y se configura la base de datos. Por ejemplo, una aplicación de comercio electrónico requerirá la integración de pasarelas de pago y sistemas de gestión de inventario.

              .bg-color-white.box-shadow.p-3(x="45%" y="20%" numero="+")
                h5 Pruebas y control de calidad
                p Antes del lanzamiento, se realizan pruebas exhaustivas para identificar y corregir errores. Estas incluyen pruebas unitarias, de integración y de aceptación del usuario. El objetivo es el de garantizar que la aplicación funcione correctamente en diferentes dispositivos y escenarios, ofreciendo una experiencia de usuario óptima.

              .bg-color-white.box-shadow.p-3(x="26%" y="44%" numero="+")
                h5 Despliegue y publicación
                p Una vez superadas las pruebas, la aplicación se publica en las tiendas correspondientes (App Store, Google Play). Este proceso implica cumplir con las políticas y requisitos de cada plataforma, como la presentación de capturas de pantalla, descripciones detalladas y la clasificación por edades. Además, se puede optar por un lanzamiento gradual para monitorear el rendimiento inicial y realizar ajustes si es necesario.

              .bg-color-white.box-shadow.p-3(x="40%" y="5%" numero="+")
                h5 Mantenimiento y actualizaciones
                p Después del lanzamiento, es crucial monitorear el rendimiento de la aplicación, recopilar comentarios de los usuarios y realizar actualizaciones periódicas. Esto incluye la corrección de errores, la mejora de funcionalidades existentes y la incorporación de nuevas características para mantener la relevancia y competitividad de la aplicación en el mercado.

              .bg-color-white.box-shadow.p-3(x="76%" y="50%" numero="+")
                h5 Retiro o reinvención
                p Finalmente, cuando la aplicación ya no cumple con los objetivos establecidos o ha sido reemplazada por soluciones más avanzadas, se considera su retiro del mercado. Alternativamente, se puede optar por una reinvención, adaptando la aplicación a nuevas necesidades o tecnologías emergentes.

    // Bloque 3/5: bg-full-icono-texto
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/3.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Comprender y gestionar adecuadamente cada una de estas etapas es fundamental para el éxito a largo plazo de una aplicación móvil. Este enfoque estructurado permite anticipar desafíos, optimizar recursos y ofrecer soluciones de alta calidad que satisfagan las expectativas de los usuarios.

    // Bloque 4/5: actividad
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad
          <Actividad :cuestionario="cuestionario"/>

    // Bloque 5/5: bloque-material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/49348" target="_blank" rel="noopener noreferrer") Robledo Sacristán, C. (2013). Programación en Android: ( ed.). Ministerio de Educación y Formación Profesional de España.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/107211" target="_blank" rel="noopener noreferrer") Cernuda Menéndez, J. (2015). Creación de juegos y aplicaciones para Android: ( ed.). RA-MA Editorial.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
// ===================================
// IMPORTS OBLIGATORIOS PARA ACTIVIDAD
// ===================================
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'Tema4',

  // ===================================
  // COMPONENT REGISTRATION
  // ===================================
  components: {
    Actividad,
  },

  // ===================================
  // DATA CON CUESTIONARIO
  // ===================================
  data() {
    return {
      cuestionario: cuestionarios.tema4,
    }
  },

  // ===================================
  // LIFECYCLE - AOS REFRESH OBLIGATORIO
  // ===================================
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #E6F4F7 !important
</style>
