<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Agentes Causales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    // Bloque 1/39: img-bloque
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Los agentes causales de riesgos biológicos representan una categoría de elementos o microorganismos capaces de provocar infecciones, enfermedades o daños significativos en la salud de seres humanos, animales y plantas. La presencia y transmisión de estos agentes constituyen un desafío constante en diversos entornos, desde laboratorios y hospitales hasta zonas agrícolas y ambientes naturales, debido a su potencial para afectar el bienestar y la economía de las comunidades. La comprensión de estos agentes y su clasificación es fundamental para implementar medidas preventivas y de control efectivas, garantizando así la protección tanto de la salud pública como de la biodiversidad. A continuación, se presentan las principales categorías en las que se clasifican estos agentes causales, proporcionando una visión general sobre su naturaleza, características y riesgos asociados.

    // Bloque 2/39: titulo-segundo
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Virus

    p Los virus son partículas acelulares que requieren invadir células huésped para replicarse. Están compuestos por material genético (ADN o ARN) y una cápside proteica, y en algunos casos una envoltura lipídica.

    // Bloque 3/39: acordeon-img
    .row.align-items-start.mb-5
      .col-lg-8
        AcordionA(tipo="b").mb-5
          .div(titulo="Tamaño")
            p Entre 20 y 300 nanómetros. Microscópicos y fácilmente transportables por aerosoles o fluidos.

          .div(titulo="Material genético")
            p ADN o ARN, monocatenario o bicatenario, influye en su replicación y patogenicidad.

          .div(titulo="Estructura")
            p Cápside proteica con posible envoltura lipídica derivada de la célula huésped, lo que facilita la entrada celular y evasión inmunitaria.

          .div(titulo="Mecanismos de patogenicidad")
            p Inhibición de síntesis proteica, liberación de citocinas proinflamatorias, latencia (ej. virus herpes), evasión de respuesta inmune.

          .div(titulo="Vías de transmisión")
            p Aérea (gotículas/aerosoles), contacto directo, fluidos corporales, vectores biológicos (mosquitos, insectos).
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/2.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

    // Bloque 4/39: texto
    h3 Virus relevantes en Seguridad y Salud en el Trabajo (SST)
    p Diversos virus representan riesgos significativos en entornos laborales por su modo de transmisión y su impacto en la salud del personal. A continuación se describen los más relevantes:

    // Bloque 5/39: slyder-4
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/3.png")
            .col-lg-7.order-lg-1
              h3 Virus de la Hepatitis B (VHB)
              p Transmisión por sangre/fluidos contaminados. Riesgo alto en personal sanitario. Prevención: vacunación, guantes, mascarillas, barreras protectoras.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-7.order-lg-1
              h3 Virus de la Inmunodeficiencia Humana (VIH)
              p Transmisión por agujas o sangre infectada. Riesgo en hospitales/laboratorios. Prevención: profilaxis post-exposición, dispositivos de seguridad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7.order-lg-1
              h3 Virus de la Influenza
              p Transmisión aérea (gotículas). Riesgo en personal de salud, docentes, transporte público. Prevención: vacunación estacional, uso de mascarillas, ventilación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7.order-lg-1
              h3 SARS-CoV-2 (COVID-19)
              p Transmisión por aerosoles/gotículas. Riesgo elevado en múltiples sectores. Prevención: distanciamiento, mascarillas, ventilación adecuada.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7.order-lg-1
              h3 Virus de la Rabia
              p Riesgo en veterinarios/personal con animales silvestres. Transmisión rara en entornos laborales. Prevención: vacunación pre-exposición, inmunoglobulinas, vacunas post-exposición.

    // Bloque 6/39: texto
    h3 Factores del potencial patogénico
    p El grado de patogenicidad de un virus depende de varios factores interrelacionados que determinan la capacidad del virus para causar daño y su controlabilidad:

    // Bloque 7/39: tarjetas-3
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema2/8.png" alt="")
          .custom-image-card__text.p-4
            h3.mb-2.text-center Tropismo celular
            p.mb-0 Determina los tejidos afectados y la gravedad de la enfermedad.
      .col-lg-3.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema2/9.png" alt="")
          .custom-image-card__text.p-4
            h3.mb-2.text-center Capacidad de replicación
            p.mb-0 Influye en la severidad y duración de la infección.
      .col-lg-3.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema2/10.png" alt="")
          .custom-image-card__text.p-4
            h3.mb-2.text-center Evasión inmunológica
            p.mb-0 Mecanismos como variación antigénica, inhibición de interferones o bloqueo de presentación de antígenos dificultan la eliminación.
      .col-lg-3.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema2/11.png" alt="")
          .custom-image-card__text.p-4
            h3.mb-2.text-center Disponibilidad de vacunas/tratamientos
            p.mb-0 Define el control y prevención posible de la infección.

    // Bloque 8/39: color
    .bg-full-width.bg-color-1.p-4(data-aos="fade-left").mb-5
      p.mb-0 Comprender estos elementos es fundamental para implementar estrategias preventivas eficaces en ambientes laborales, asegurando la protección de la salud del personal expuesto.

    // Bloque 9/39: titulo-segundo
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Bacterias

    p Las bacterias son microorganismos unicelulares procariotas que habitan en suelos, agua, aire y organismos vivos. En contextos laborales, especialmente en la industria alimentaria, salud, agricultura y tratamiento de aguas residuales, ciertas bacterias patógenas representan riesgos significativos para la salud y la seguridad. Las características generales de las bacterias de interés son:

    // Bloque 10/39: infografia-1
    .bg-full-width.bg-color-info.mb-5
      .px-4.pt-md-5
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/infografia1.svg', alt='', style="max-width: 996px;").mx-auto

              .bg-color-white.box-shadow.p-3(x="20%" y="57.5%" numero="+")
                h5 Tamaño
                p Oscilan entre 0.5 y 5 µm.

              .bg-color-white.box-shadow.p-3(x="29%" y="34%" numero="+")
                h5 Estructura
                p Poseen pared celular (grampositiva o gramnegativa), membrana plasmática, ribosomas y ADN circular.

              .bg-color-white.box-shadow.p-3(x="59%" y="6%" numero="+")
                h5 Mecanismos de patogenicidad
                p Incluyen producción de toxinas (endotoxinas en gramnegativas, exotoxinas en grampositivas), adhesinas y cápsulas que ayudan a evadir el sistema inmune.

              .bg-color-white.box-shadow.p-3(x="70%" y="34%" numero="+")
                h5 Métodos de transmisión
                p Contacto con fluidos contaminados, aerosoles industriales o de laboratorio, superficies y alimentos contaminados.

    // Bloque 11/39: texto
    h3 Bacterias de relevancia en Seguridad y Salud en el Trabajo (SST)
    p Algunas bacterias representan un riesgo particular en entornos laborales debido a su capacidad patogénica, resistencia y vías de transmisión:

    // Bloque 12/39: slyderf-cards
    .bg-full-width.bg-gradiente-6.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/12.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Staphylococcus aureus (incluye MRSA)
                p.text-center Provoca infecciones de piel, tejidos blandos y neumonías hospitalarias. Riesgo en hospitales. Su resistencia antibiótica complica el tratamiento.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/13.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Escherichia coli (O157:H7)
                p.text-center Patógeno gastrointestinal presente en industrias cárnicas y de alimentos. Manipulación deficiente y contaminación cruzada son fuentes comunes de brotes.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/14.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Mycobacterium tuberculosis
                p.text-center Causa tuberculosis. Transmisión aérea en espacios cerrados. Riesgo elevado para personal sanitario, de laboratorio y trabajadores sociales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/15.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Bacillus anthracis
                p.text-center Responsable del ántrax. Sus esporas son altamente resistentes. Peligro en industrias de cuero y laboratorios de nivel BSL-3.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/16.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Clostridium tetani
                p.text-center Produce tétanos. Presente en suelos, entra por heridas profundas. Riesgo en agricultura, construcción y jardinería. Vacunación es fundamental.

          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/17.png', alt='')

    // Bloque 13/39: texto
    h3 Potencial patogénico de las bacterias
    p La capacidad de una bacteria para causar enfermedad depende de varios factores críticos, que determinan tanto la gravedad como la dificultad para su control:

    // Bloque 14/39: img-acordeon
    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/18.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Virulencia")
            p Capacidad de causar daño, gracias a estructuras como adhesinas e invasinas.

          .div(titulo="Dosis infecciosa mínima")
            p Cantidad necesaria de bacterias para iniciar una infección.

          .div(titulo="Factores de susceptibilidad del huésped")
            p El estado inmunológico del individuo y la presencia de comorbilidades influyen en la progresión de la enfermedad.

          .div(titulo="Resistencias a desinfectantes y antibióticos")
            p Dificultan la efectividad de tratamientos y medidas preventivas.

    // Bloque 15/39: titulo-segundo
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Hongos

    // Bloque 16/39: bg-icono-texto (bg-full-icono-texto)
    .bg-full-width.bg-color-10.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg
            p.mb-0 Los hongos son organismos eucariotas que incluyen levaduras y mohos. Aunque cumplen funciones ecológicas esenciales, también representan riesgos significativos en entornos laborales, ya que pueden causar infecciones denominadas micosis, que van desde afecciones superficiales hasta enfermedades sistémicas graves. Los sectores laborales más afectados incluyen industrias de granos, laboratorios, hospitales y espacios húmedos o con material orgánico en descomposición.
          .col-lg-auto
            img(src="@/assets/curso/tema2/19.svg").mx-auto

    // Bloque 17/39: texto
    h3 Características generales
    p A continuación, se detallan los principales aspectos biológicos que definen a los hongos de interés para la salud laboral:

    // Bloque 18/39: iconos-color
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4
        .bg-color-9.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/20.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              h5.mb-2 Tipo celular
              p.mb-0 Eucariotas: poseen núcleo definido y organelos membranosos.

      .col-lg-4
        .bg-color-9.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/21.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              h5.mb-2 Pared celular
              p.mb-0 Compuesta por quitina y glucanos, otorga rigidez y resistencia.

      .col-lg-4
        .bg-color-9.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/22.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              h5.mb-2 Membrana y núcleo
              p.mb-0 Presencia de membrana nuclear, nucleolos y cromosomas (Deacon, 2006).

    // Bloque 19/39: texto
    h3 Clasificación y morfología
    p Los hongos se clasifican principalmente según su estructura y modo de reproducción. Estas son sus formas más comunes:

    // Bloque 20/39: tarjetas-3
    .bg-full-width.mb-5.bg-gradiente-7
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-0
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/23.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Levaduras
                p.mb-0 Hongos unicelulares que se reproducen principalmente por gemación.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/24.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Hongos filamentosos
                p.mb-0 Forman hifas ramificadas que pueden generar colonias visibles (mohos).
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/25.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Esporas
                p.mb-0 Unidades reproductivas resistentes, permiten la dispersión y supervivencia en condiciones adversas.

    // Bloque 21/39: texto
    h3 Mecanismos de patogenicidad
    p Los hongos patógenos presentan mecanismos que les permiten invadir tejidos y causar enfermedades, especialmente en individuos inmunocomprometidos:

    // Bloque 22/39: acordeon-img
    .row.align-items-start.mb-5
      .col-lg-8
        AcordionA(tipo="b").mb-0
          .div(titulo="Invasión de tejidos")
            p Provoca daño directo al penetrar las barreras celulares del hospedador.

          .div(titulo="Producción de enzimas líticas")
            p Proteínasas y fosfolipasas que degradan tejidos y estructuras celulares.

          .div(titulo="Esporas resistentes")
            p Facilitan la supervivencia prolongada en el ambiente y la dispersión.

          .div(titulo="Adaptación al huésped")
            p Proliferan en condiciones específicas, especialmente en personas inmunodeprimidas.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/26.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

    // Bloque 23/39: texto
    h3 Vías de transmisión
    p La forma en que los hongos llegan a los humanos en el entorno laboral se da principalmente a través de las siguientes vías:

    // Bloque 24/39: tarjetas-3
    .bg-full-width.mb-5.bg-gradiente-7
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-0
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/27.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Inhalación de esporas
                p.mb-0 Común en ambientes con polvo o descomposición de materia orgánica.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/28.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Contacto con inóculos contaminados
                p.mb-0 A través de heridas, superficies u objetos contaminados.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/29.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Traumatismos cutáneos
                p.mb-0 Permiten la entrada de esporas u hongos al interior del organismo.

    // Bloque 25/39: texto
    h3 Hongos de relevancia en Seguridad y Salud en el Trabajo (SST)
    p En el entorno laboral, ciertos hongos destacan por su capacidad de producir infecciones serias. A continuación, se presentan los principales agentes y los escenarios de exposición asociados:

    // Bloque 26/39: tabla
    .titulo-figura.mb-2
      h5 Tabla 1.
      span Tipos de hongos

    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th.bg-color-tabla.text-white Hongo
            th.bg-color-tabla.text-white Fuente y enfermedad
            th.bg-color-tabla.text-white Riesgo laboral
        tbody
          tr
            td Aspergillus fumigatus
            td Esporas en polvo, material vegetal y pilas de granos. Provoca aspergilosis pulmonar.
            td Granjas avícolas, panaderías, industrias de grano, laboratorios, ambientes polvorientos.
          tr
            td Candida albicans
            td Levadura oportunista de la microbiota. Causa candidiasis oral, esofágica, cutánea y sistémica.
            td Personal hospitalario, laboratorios clínicos, manejo de muestras biológicas.
          tr
            td Cryptococcus neoformans
            td Asociado a excrementos de aves, especialmente palomas. Provoca criptococosis y meningitis.
            td Limpieza en edificios antiguos, zoológicos, lugares con acumulación de excrementos.
          tr
            td Histoplasma capsulatum
            td Presente en guano de murciélagos y aves. Causa histoplasmosis pulmonar.
            td Guías turísticos de cuevas, mineros, espeleólogos, trabajadores en construcciones con guano.
          tr
            td Sporothrix schenckii
            td Vive en plantas, tierra y vegetales. Causa esporotricosis, una infección subcutánea.
            td Jardineros, floristas, agricultores, trabajadores en contacto con suelo o material vegetal.

    // Bloque 27/39: texto
    h3 Potencial patogénico de los hongos
    p El grado de peligro que representan los hongos depende de varios factores que determinan su capacidad de generar enfermedad:

    // Bloque 28/39: tarjetas-boton
    .bg-full-width.mb-5.bg-gradiente-7
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-0
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/30.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-2.text-center Formación de esporas resistentes
              p.mb-0.text-center Permite dispersión amplia y supervivencia prolongada.

          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/31.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-2.text-center Invasión tisular
              p.mb-0.text-center Provoca daños directos a tejidos humanos.

          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/32.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-2.text-center Producción de enzimas degradantes
              p.mb-0.text-center Facilita la destrucción de barreras celulares y propagación.

    // Bloque 29/39: titulo-segundo
    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Parásitos

    // Bloque 30/39: imagen-color
    .row.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/33.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-1.px-4.py-5(data-aos="fade-left")
          p.mb-0 Los parásitos comprenden organismos como protozoarios (unicelulares) y helmintos (gusanos), capaces de infectar humanos a través del agua, alimentos, vectores o contacto directo con animales. En entornos laborales, el riesgo parasitario se presenta principalmente en actividades agrícolas, acuícolas, de investigación y en trabajos en zonas tropicales.

    // Bloque 31/39: texto
    h2 Características generales de los parásitos de interés
    p A continuación, se describen los rasgos clave de los parásitos que afectan la salud laboral:

    // Bloque 32/39: slyder-4
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/34.png")
            .col-lg-7.order-lg-1
              h3 Protozoarios
              p Organismos unicelulares. Se transmiten por vectores o agua contaminada.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/35.png")
            .col-lg-7.order-lg-1
              h3 Helmintos
              p Gusanos con transmisión por ingestión de quistes, penetración de larvas o agua contaminada.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/36.png")
            .col-lg-7.order-lg-1
              h3 Mecanismos de patogenicidad
              p Incluyen invasión de tejidos, inflamación y producción de toxinas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/37.png")
            .col-lg-7.order-lg-1
              h3 Reservorios
              p Humanos, animales domésticos y silvestres, agua y suelo.

    // Bloque 33/39: texto
    h3 Parásitos de relevancia en Seguridad y Salud en el Trabajo (SST)

    p En ambientes laborales específicos, ciertos parásitos representan una amenaza considerable para la salud. A continuación, se presentan los más relevantes junto con su forma de transmisión y grupos en riesgo:

    // Bloque 34/39: tabla
    .titulo-figura.mb-2
      h5 Tabla 2.
      span Parásitos de relevancia en Seguridad y Salud en el Trabajo (SST)

    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th.bg-color-tabla.text-white Parásito
            th.bg-color-tabla.text-white Transmisión y enfermedad
            th.bg-color-tabla.text-white Riesgo laboral
        tbody
          tr
            td Plasmodium spp.
            td Causa malaria, transmitida por picaduras de mosquitos Anopheles en zonas endémicas.
            td Agricultores, personal militar, cooperantes y turistas en áreas tropicales.
          tr
            td Leishmania spp.
            td Produce leishmaniasis cutánea o visceral. Transmitida por moscas de arena.
            td Trabajadores rurales y veterinarios en regiones endémicas.
          tr
            td Toxoplasma gondii
            td Zoonosis asociada a heces de gato. Provoca toxoplasmosis, con riesgo de aborto o malformaciones.
            td Veterinarios, personal de laboratorio y trabajadores agrícolas.
          tr
            td Giardia lamblia
            td Protozoo transmitido por agua contaminada. Provoca giardiasis, una infección gastrointestinal.
            td Empleados de plantas de tratamiento de agua y guías turísticos en zonas rurales.
          tr
            td Schistosoma spp.
            td Trematodo acuático. Provoca esquistosomiasis al penetrar la piel en aguas contaminadas.
            td Trabajadores en canales, pesca y agricultura en regiones tropicales.

    // Bloque 35/39: texto
    h3 Potencial patogénico de los parásitos
    p La gravedad de las enfermedades parasitarias depende de diversos factores que influyen en su desarrollo y control:

    // Bloque 36/39: tarjetas-boton (4 cards)

    .bg-full-width.mb-5.bg-gradiente-7
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-0
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/38.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-2.text-center Carga parasitaria
              p.mb-0.text-center A mayor número de parásitos, más severa la infección.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/39.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-2.text-center Ciclo de vida complejo
              p.mb-0.text-center Algunos requieren vectores o hospedadores intermedios, dificultando el control.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/40.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-2.text-center Estado inmunológico del hospedador
              p.mb-0.text-center Influye en la respuesta y progresión de la enfermedad.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/41.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-2.text-center Disponibilidad de tratamientos
              p.mb-0.text-center La existencia de medicamentos y estrategias de control vectorial es clave para mitigar los efectos.

    // Bloque 37/39: img-anexo
    .bg-full-width.bg-color-anexo.mb-lg-0
      .px-4.p-md-5.text-white
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/42.png', alt='')

          .col-lg-8
            h2.mb-4(data-aos="flip-up") Riesgos biológicos por contacto con animales y sus secreciones
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Riesgos biológicos por contacto con animales y sus secreciones, donde se aborda la exposición a agentes biológicos derivados de interacciones con animales, sus mordeduras, fluidos y excrementos en distintos entornos laborales.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[strong Anexo. ] Riesgos biológicos por contacto con animales y sus secreciones

    // Bloque 38/39: actividad
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad
          <Actividad :cuestionario="cuestionario"/>

    // Bloque 39/39: bloque-material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.arlsura.com/index.php/161-sector-salud/sector-salud-/946-prevencion-y-manejo-de-los-accidentes-biologicos" target="_blank" rel="noopener noreferrer") ARL SURA - Riesgos Laborales - ARL - Prevención y manejo de los accidentes biológicos

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Ospn_5CLuMg" target="_blank" rel="noopener noreferrer") Canal UGT - UGT de Catalunya. (2021, 4 de mayo). Riesgo biológico [Vídeo]. YouTube

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: cuestionarios.tema2,
    }
  },
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
