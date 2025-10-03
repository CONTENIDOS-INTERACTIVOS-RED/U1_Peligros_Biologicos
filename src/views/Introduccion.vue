<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    // Bloque 1/2: imagen-iconobloque-texto
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La comprensión y evaluación de los peligros y riesgos biológicos en entornos de trabajo es fundamental para garantizar la protección de la salud de los empleados y prevenir la propagación de enfermedades infecciosas. Conocer los conceptos básicos relacionados con los riesgos biológicos permite establecer un marco de actuación preventivo que fortalezca las medidas de seguridad y contribuya a mantener ambientes laborales seguros y saludables. La incorporación de metodologías específicas en la identificación y control de agentes biológicos ayuda a anticipar posibles incidentes, reduciendo la incidencia de infecciones y complicaciones relacionadas.

        p(data-aos="fade-left").mb-4 El estudio de los diferentes agentes causales, como bacterias, virus, protozoarios, hongos y parásitos, proporciona las herramientas necesarias para reconocer las fuentes potenciales de riesgo en las actividades diarias. Además, es importante considerar otros factores de exposición, como las picaduras y mordeduras de animales o insectos, así como la presencia de fluidos corporales o excrementos, que pueden ser portadores de agentes infecciosos. La aplicación de técnicas de inspección, listas de verificación y evaluación de riesgos permite detectar condiciones inseguras y manejar las situaciones de exposición de manera efectiva, priorizando acciones preventivas y de control.

    // Bloque 2/2: texto-imagen
    .row.mb-0
      .col-lg-7
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          p(data-aos="fade-left") La evaluación de riesgos biológicos, tanto cualitativa como cuantitativa, permite comprender en profundidad la peligrosidad de los agentes presentes y el nivel de exposición de los trabajadores. Herramientas como las matrices de riesgo ayudan a clasificar y priorizar las situaciones de peligro, facilitando decisiones informadas para implementar medidas de protección adecuadas. La utilización de modelos estadísticos y análisis probabilísticos aporta una visión más precisa de la probabilidad de contagio o infección, permitiendo diseñar estrategias de control sostenibles y efectivas.
      .col-lg-5.d-none.d-sm-block
        figure
          img(src="@/assets/curso/intro/3.png", data-aos="zoom-in").mb-4.mb-lg-0



</template>

<script>
export default {
  name: 'Introduccion',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.lista-ul--color.color-dark li > i:first-of-type
  color: #453179 !important
</style>
