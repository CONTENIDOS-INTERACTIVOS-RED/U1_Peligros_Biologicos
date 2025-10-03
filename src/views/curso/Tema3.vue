<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Herramientas de desarrollo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    // Bloque 1/14: imagen-texto-iconobloque 4:8
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 El desarrollo de aplicaciones móviles no solo depende del conocimiento de lenguajes de programación o principios de diseño, sino también del dominio de herramientas especializadas que permiten convertir ideas en soluciones funcionales. Este conjunto de herramientas está compuesto principalmente por los IDEs (Entornos de Desarrollo Integrados), los SDKs (Kits de Desarrollo de Software) y los emuladores o simuladores de dispositivos.

        .bg-color-4.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este tema tiene como objetivo presentar y analizar las herramientas más relevantes y ampliamente utilizadas en el proceso de desarrollo móvil, clasificándolas, según su función, su grado de integración con las plataformas móviles y su aplicabilidad en entornos nativos y multiplataforma. El propósito final es que el estudiante comprenda cómo estas herramientas se interrelacionan para conformar un ecosistema técnico robusto y eficiente.

    // Bloque 2/14: titulo-segundo
    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] IDEs - Entornos de Desarrollo Integrados

    // Bloque 3/14: color-texto-imagen
    .row.mb-5
      .col-lg-8
        .bg-color-2.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 Los IDEs son herramientas esenciales para cualquier desarrollador, dado que proporcionan un entorno unificado para escribir, compilar, depurar y ejecutar el código de una aplicación. Incorporan funciones como resaltado de sintaxis, depuración paso a paso, gestión de proyectos y análisis estático del código.
        
        p(data-aos="fade-left") IDEs más utilizados en desarrollo móvil:

      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in").mb-4.mb-lg-0

    // Bloque 4/14: tabsc
    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Android Studio" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Android Studio
            p Es el IDE oficial para el desarrollo en Android, basado en IntelliJ IDEA. Ofrece soporte completo para Kotlin y Java, integración con el SDK de Android, emuladores incorporados y un editor visual de interfaces. Permite compilar, ejecutar y probar aplicaciones en distintos dispositivos virtuales gracias a su sistema AVD (Android Virtual Device).
            h5 Ventajas claves:
            ul.lista-ul--color.color-dark.mb-0
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Herramientas integradas para el diseño UI (Jetpack Compose y XML).
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Depuración avanzada con Logcat y herramientas de profiling.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Integración con Firebase, Git y Gradle.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/4.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Xcode" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Xcode
            p IDE exclusivo para plataformas Apple (iOS, iPadOS, macOS, watchOS, tvOS). Soporta Swift y Objective-C, e incluye un simulador de dispositivos Apple. Integra herramientas para el diseño de interfaces mediante Interface Builder y storyboard, además de funcionalidades de prueba y publicación en App Store.
            h5 Ventajas claves:
            ul.lista-ul--color.color-dark.mb-0
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Integración directa con App Store Connect.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Simuladores de alta fidelidad.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Editor visual con previews de SwiftUI en tiempo real.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/5.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Visual Studio" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Visual Studio
            p Relevante para el desarrollo multiplataforma, especialmente con Xamarin y .NET MAUI. Soporta C#, F#, y Visual Basic. Ofrece un entorno estable para desarrollo móvil y de escritorio, ideal para quienes provienen del ecosistema Microsoft.
            h5 Ventajas claves:
            ul.lista-ul--color.color-dark.mb-0
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Integración con Azure DevOps.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Soporte de proyectos compartidos para múltiples plataformas.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Buen rendimiento en proyectos empresariales grandes.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/6.png', alt='')

    // Bloque 5/14: titulo-segundo
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] SDKs - Kits de Desarrollo de Software

    // Bloque 6/14: texto-imagen
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") El SDK es el conjunto de herramientas, bibliotecas y documentación, necesarias para construir aplicaciones en una plataforma específica. Sin un SDK, un IDE no podría interactuar con las APIs del sistema operativo, ni compilar adecuadamente.

        p(data-aos="fade-left") SDKs más relevantes:

      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema3/7.svg", data-aos="zoom-in").mb-4.mb-lg-0

    // Bloque 7/14: slyder-a
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/8.png", style="max-width: 254px").mx-auto
            .col-lg-7.order-lg-1
              h3 Android SDK
              p Incluye compiladores, emuladores, herramientas de línea de comandos, y bibliotecas para acceder a las funcionalidades de Android. Es indispensable para Android Studio y otros entornos como Flutter.
              h5 Componentes principales:
              ul.lista-ul--color.color-dark.mb-0
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | adb (Android Debug Bridge): permite comunicación entre el dispositivo y el entorno de desarrollo.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | sdkmanager: herramienta para instalar y actualizar paquetes del SDK.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | avdmanager: permite crear dispositivos virtuales Android.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/9.png", style="max-width: 254px").mx-auto
            .col-lg-7.order-lg-1
              h3 iOS SDK (parte de Xcode)
              p Proporciona herramientas y bibliotecas necesarias para el desarrollo en dispositivos Apple. Incluye APIs para interfaces gráficas (UIKit, SwiftUI), sensores, red, acceso a hardware y servicios de Apple, como HealthKit o ARKit.
              h5 Componentes claves:
              ul.lista-ul--color.color-dark.mb-0
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Simulator: simula dispositivos Apple con distintas versiones de iOS.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Interface Builder: permite construir interfaces gráficas visualmente.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | LLVM/Clang: conjunto de herramientas de compilación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/10.png", style="max-width: 254px").mx-auto
            .col-lg-7.order-lg-1
              h3 Flutter SDK
              p Este SDK, junto con el lenguaje Dart, permite desarrollar interfaces altamente personalizadas. Incluye su propio motor de renderizado y herramientas de línea de comandos (flutter doctor, flutter run, etc.), que verifican la instalación y lanzan proyectos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/11.png", style="max-width: 254px").mx-auto
            .col-lg-7.order-lg-1
              h3 React Native CLI + Expo SDK
              p React Native permite el desarrollo en JavaScript usando componentes nativos. Con Expo, se simplifica el acceso a APIs del dispositivo (cámara, GPS, almacenamiento). El SDK de Expo incluye una app móvil para pruebas instantáneas.

    // Bloque 8/14: titulo-segundo
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Emuladores y simuladores

    // Bloque 9/14: texto-imagen
    .row.mb-0
      .col-lg-8
        p(data-aos="fade-left") Estas herramientas permiten ejecutar y probar aplicaciones en una computadora sin necesidad de un dispositivo físico, lo cual es clave para el desarrollo iterativo y la depuración rápida.
        
        p(data-aos="fade-left") Diferencias conceptuales:

      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema3/12.svg", data-aos="zoom-in").mb-4.mb-lg-0


    .bg-full-width.bg-gradiente-5
      .p-4.p-md-5



        // Bloque 10/14: tabla
        .titulo-figura.mb-2
          h5 Tabla 4. 
          span Diferencias conceptuales

        .tabla-a.color-acento-contenido.mb-5.bg-color-white
          table
            thead
              tr
                th.bg-color-tabla.text-white Emulador
                th.bg-color-tabla.text-white Simulador
            tbody
              tr
                td Replica hardware y software.
                td Solo replica el software (interfaz).
              tr
                td Más preciso, pero más pesado.
                td Más ligero, pero menos realista.
              tr
                td Android Studio (AVD).
                td Xcode (iOS Simulator).

        // Bloque 11/14: texto
        p(data-aos="fade-up") Herramientas destacadas:

        // Bloque 12/14: tarjetas-boton
        div.row.justify-content-center.align-items-stretch.mb-0
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema3/13.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-2.text-center Android Emulator (AVD)
              p.mb-0.text-center Permite simular decenas de dispositivos con distintas resoluciones, versiones de Android y características. Se pueden activar sensores como GPS, acelerómetro, cámara o red simulada.

          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema3/14.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-2.text-center iOS Simulator
              p.mb-0.text-center Integrado en Xcode, simula dispositivos Apple desde iPhone 8 hasta iPhone 15 Pro. Incluye herramientas para simular llamadas, notificaciones, rotaciones, accesos biométricos, entre otros.

          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema3/15.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-2.text-center Genymotion
              p.mb-0.text-center Emulador basado en VirtualBox, ideal para testing en Android. Más rápido que AVD en algunas configuraciones, y con soporte para emulación en la nube.

    // Bloque 13/14: texto-color-imagen
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 #[strong Ejemplo.] El dominio de herramientas como los IDEs, SDKs y emuladores, no solo es un requisito técnico para desarrollar aplicaciones móviles funcionales, sino también un reflejo de la profesionalización del proceso de desarrollo. Estas herramientas permiten realizar pruebas sin depender de dispositivos físicos, automatizar procesos, mejorar la productividad y reducir errores.

        .bg-color-1.px-4.py-5(data-aos="fade-left")
          p.mb-0 Asimismo, en un entorno laboral competitivo y cambiante, saber configurar y personalizar estas herramientas, se convierte en una ventaja estratégica. Por ello, en este curso se promueve una aproximación práctica y reflexiva al uso de estas herramientas, motivando a los estudiantes a experimentar, comparar entornos y adoptar aquellas combinaciones que mejor se adapten a sus necesidades y proyectos.

      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema3/16.png", data-aos="zoom-in").mb-4.mb-lg-0

    // Bloque 14/14: bloque-material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/107211" target="_blank" rel="noopener noreferrer") Cernuda Menéndez, J. (2015). Creación de juegos y aplicaciones para Android: ( ed.). RA-MA Editorial.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=2_DnhfQrwXQ" target="_blank" rel="noopener noreferrer") DevExpert - Programación Android y Kotlin. (2023, 28 de septiembre). Retrofit y Kotlin: La Guía Definitiva para Conectar tu App con APIs [Actualizado 2023] [Video]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass">
.lista-ul--color.color-dark li > i:first-of-type
  color: #453179 !important
</style>
