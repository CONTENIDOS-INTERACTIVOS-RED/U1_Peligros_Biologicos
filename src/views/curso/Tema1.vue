<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Plataformas de desarrollo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


    p(data-aos="fade-left").mb-3 Los riesgos de origen biológico están vinculados a la presencia y frecuencia de ciertos microorganismos en los entornos laborales. Al ingresar al organismo humano, estos microorganismos pueden ocasionar enfermedades infecciosas, reacciones alérgicas e intoxicaciones. El riesgo biológico surge de la exposición a agentes biológicos, y puede manifestarse de forma directa o indirecta:


    .bg-full-width.bg-gradiente-7
      .p-4.p-md-5

        .row.justify-content-center.align-items-stretch.mb-0
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/1.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Directa
                p.mb-0 Manipulación directa de agentes biológicos mediante técnicas específicas. Común en hospitales y centros de investigación biomédica.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/2.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Indirecta
                p.mb-0 Contacto accidental a través del ambiente o por eliminación inadecuada de residuos contaminados.


    p(data-aos="fade-left").mb-5 Los profesionales de la salud enfrentan riesgos elevados tanto de adquirir como de transmitir infecciones, actuando como fuentes, vectores u hospederos de agentes infecciosos. La exposición puede incluir:

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/3.svg").mx-auto
          .col-lg
            ul.lista-ul--color.color-dark.mb-4
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Contacto con membranas mucosas.
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Lesiones percutáneas.
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Ingestión de materiales infecciosos.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Ejemplos frecuentes incluyen pinchazos con agujas o contacto con objetos contaminados.


    h2(data-aos="fade-left").mb-5 Definición de peligro biológico

    p(data-aos="fade-left").mb-3 El peligro biológico se define como cualquier fuente o situación con potencial para causar daño a la salud humana debido a la presencia o liberación de organismos vivos, como:


    .bg-full-width.bg-gradiente-7
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch.mb-0
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/4.svg"
                alt=""
                style="width: 90px"
              )
              h4.mb-2.text-center Microscópicos
              p.mb-0.text-center Bacterias, virus, hongos, parásitos.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/5.svg"
                alt=""
                style="width: 90px"
              )
              h4.mb-2.text-center Macroscópicos
              p.mb-0.text-center Ácaros, artrópodos (garrapatas).
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/6.svg"
                alt=""
                style="width: 90px"
              )
              h4.mb-2.text-center Otros
              p.mb-0.text-center Personas o animales enfermos, vectores como zancudos, animales venenosos (serpientes, alacranes), vegetales tóxicos o irritantes.

    h2(data-aos="fade-left").mb-4 Sectores con mayor riesgo biológico

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") No solo el personal sanitario está expuesto. También enfrentan riesgos elevados los trabajadores de:
    
        .bg-color-5.p-4(data-aos="fade-left")
          ul.lista-ul--color.color-dark.mb-0
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Limpieza y mantenimiento.
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Agricultura.
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Ganadería y manipulación de productos animales.
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Plantas de tratamiento de aguas.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Excavaciones y manejo de residuos.

        .bg-color-4.p-4(data-aos="fade-left")
          p.mb-0 Las enfermedades infecciosas y parasitarias son frecuentes en estas actividades, por lo que se requiere atención continua.
              

    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")


    h2(data-aos="fade-left").mb-4 Gestión del riesgo biológico

    p(data-aos="fade-left").mb-3 Una gestión efectiva del riesgo incluye:

    .bg-full-width.bg-color-6
      .px-4.px-md-5.pt-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/8.svg").mx-auto
          .col-lg
            ul.lista-ul--color.color-dark.mb-0
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Capacitación especializada.
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Uso de equipos de protección personal (EPP).
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Protocolos de higiene.
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Vacunación.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Prácticas laborales seguras.

    .bg-color-7.p-4.mb-5
      p.mb-0 El objetivo es reducir la probabilidad de contagio, proteger la salud de los trabajadores y prevenir la propagación de enfermedades en el entorno laboral.


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Agente biológico


    .row.mb-5
      .col-lg-8
        .bg-color-8.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Un agente biológico es cualquier microorganismo (bacterias, virus, hongos, parásitos), sus productos (toxinas, endotoxinas), fragmentos celulares u otros componentes que puedan provocar enfermedades, reacciones alérgicas o intoxicaciones en el ser humano. En el contexto de la Seguridad y Salud en el Trabajo (SST), estos agentes pueden encontrarse en el aire, agua, superficies, alimentos y materiales biológicos contaminados.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")


    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
      .col-lg-8
        h5(data-aos="fade-left").mb-4 Identificación de agentes biológicos
        p(data-aos="fade-left").mb-4 La identificación implica analizar:
    
        .bg-color-1.p-4(data-aos="fade-left")
          ul.lista-ul--color.color-dark.mb-4
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Su naturaleza (procariotas, eucariotas o virus acelulares).
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Su supervivencia en el entorno laboral.
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Mecanismos de transmisión.
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Tasa de replicación.
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Virulencia.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Existencia de reservorios (animales o ambiente).

    h2(data-aos="fade-left").mb-4 Clasificación de agentes biológicos
    p(data-aos="fade-left").mb-4 La clasificación se basa en el nivel de peligrosidad y permite establecer las medidas de bioseguridad correspondientes, conforme a normas como la GTC 45 (Colombia).




    // Bloque 1: acordeon-img
    .row.align-items-start.mb-4
      .col-lg-8
        AcordionA(tipo="b").mb-5
          .div(titulo="Grupo 1. Riesgo Biológico Bajo")
            p Agentes con probabilidad nula o muy baja de causar enfermedad. Generalmente no patógenos. No requieren contención especial.
            p #[strong Ejemplos]: Lactobacillus sp., microorganismos ambientales no patógenos.
          .div(titulo="Grupo 2. Riesgo Biológico Moderado")
            p Enfermedades poco graves. Bajo riesgo de propagación. Existen tratamientos o vacunas. Exposición relevante en hospitales, laboratorios, granjas.
            p #[strong Ejemplos]: E. coli (ciertas cepas), Salmonella spp., virus de la influenza, dermatofitos.
          .div(titulo="Grupo 3. Riesgo Biológico Alto")
            p Enfermedades graves. Riesgo moderado de propagación. Requiere contención estricta (nivel 3).
            p #[strong Ejemplos]: Mycobacterium tuberculosis, virus de hepatitis B/C, Zika, Leishmania spp., Brucella.
          .div(titulo="Grupo 4. Riesgo Biológico Muy Alto")
            p Enfermedades graves, alta transmisibilidad. No hay tratamiento eficaz. Contención nivel 4 requerida.
            p #[strong Ejemplos]: virus del Ébola, Marburgo, fiebre de Lassa, SARS-CoV-1, SARS-CoV-2 (fase inicial).
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/12.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0


    p(data-aos="fade-left").mb-4 La importancia de la clasificación en el ámbito laboral permite: 

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4
        .bg-color-9.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              h5.mb-2 01
              p.mb-0 Diseñar medidas de bioseguridad adecuadas.
    
      .col-lg-4
        .bg-color-9.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/14.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              h5.mb-2 02
              p.mb-0 Evaluar la exposición ocupacional.
    
      .col-lg-4
        .bg-color-9.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/15.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              h5.mb-2 03
              p.mb-0 Implementar protocolos de vigilancia, contención y respuesta ante emergencias.


    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-8.p-4(data-aos="fade-left").mb-4
          p.mb-4 #[strong Ejemplos prácticos:]
          ul.lista-ul--color.color-dark.mb-4
            li.mb-3
              i.fas.fa-arrow-circle-right
              | Hospitales: Uso de EPP, vacunación, manejo de residuos y formación frente a agentes del Grupo 2 y 3.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Laboratorios de investigación: Instalaciones especializadas y equipos de contención para agentes del Grupo 3 y 4.


    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Riesgo biológico

    p(data-aos="fade-left").mb-4 El riesgo biológico se refiere a la probabilidad de que un trabajador entre en contacto con un agente biológico y a la capacidad de este para generar efectos adversos en la salud. Su evaluación implica analizar la peligrosidad del agente, la probabilidad de exposición, la intensidad y frecuencia del contacto, la vía de ingreso al organismo y la susceptibilidad individual de la persona expuesta.

    p(data-aos="fade-left").mb-4 Para una adecuada gestión del riesgo biológico en el contexto de la Seguridad y Salud en el Trabajo (SST), se deben seguir los siguientes pasos:



    .bg-full-width.bg-color-6
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg
            ul.lista-ul--color.color-dark.mb-4
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Identificar los agentes biológicos presentes en el entorno laboral.
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Evaluar las condiciones y situaciones que aumentan la exposición.
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Analizar la dosis infectante y la virulencia del agente.
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Determinar las vías de entrada al organismo (respiratoria, dérmica, oral-digestiva o parenteral).
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Clasificar los niveles de riesgo según su gravedad y facilidad de transmisión, utilizando los niveles de bioseguridad del 1 al 4.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Diseñar e implementar medidas de control adecidas, incluyendo acciones ingenieriles, administrativas y el uso de equipos de protección personal.

    
          .col-lg-auto
            img(src="@/assets/curso/tema1/17.svg").mx-auto


    .bg-color-7.p-4(data-aos="fade-left").mb-4
      p.mb-0 El objetivo principal es minimizar la probabilidad de infección y limitar la propagación de los agentes biológicos, protegiendo así a los trabajadores, a la comunidad y al medio ambiente.

        
    // Bloque 19/19: bloque-material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/49432" target="_blank" rel="noopener noreferrer") Robledo, D. (2017). Desarrollo de aplicaciones para Android I: ( ed.). Ministerio de Educación y Formación Profesional de España.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=sJRSY45nSW8" target="_blank" rel="noopener noreferrer") Víctor Vergel DAM SMR Informática Ciclos Formativos. (2020, 23 de enero). 11 - Android - Ciclo de vida de los activitys [Video]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
