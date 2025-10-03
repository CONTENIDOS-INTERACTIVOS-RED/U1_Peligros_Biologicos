# Tema 3: 3. Herramientas de desarrollo



<!-- 
RUTA DE ASSETS: @/assets/curso/tema3/
DISEÑO DE REFERENCIA: tema3.png
-->


## Bloque 1: imagen-texto-iconobloque 4:8
//assets: 1.png
//texto
El desarrollo de aplicaciones móviles no solo depende del conocimiento de lenguajes de programación o principios de diseño, sino también del dominio de herramientas especializadas que permiten convertir ideas en soluciones funcionales. Este conjunto de herramientas está compuesto principalmente por los IDEs (Entornos de Desarrollo Integrados), los SDKs (Kits de Desarrollo de Software) y los emuladores o simuladores de dispositivos.
//iconobloque
Este tema tiene como objetivo presentar y analizar las herramientas más relevantes y ampliamente utilizadas en el proceso de desarrollo móvil, clasificándolas, según su función, su grado de integración con las plataformas móviles y su aplicabilidad en entornos nativos y multiplataforma. El propósito final es que el estudiante comprenda cómo estas herramientas se interrelacionan para conformar un ecosistema técnico robusto y eficiente.

## Bloque 2: titulo-segundo
3.1 IDEs - Entornos de Desarrollo Integrados

## Bloque 3: color-texto-imagen
//assets: 2.png
//color 1
Los IDEs son herramientas esenciales para cualquier desarrollador, dado que proporcionan un entorno unificado para escribir, compilar, depurar y ejecutar el código de una aplicación. Incorporan funciones como resaltado de sintaxis, depuración paso a paso, gestión de proyectos y análisis estático del código.
//texto
IDEs más utilizados en desarrollo móvil:

## Bloque 4: tabsc
//assets: 3.png, 4.png, 5.png

Android Studio
Es el IDE oficial para el desarrollo en Android, basado en IntelliJ IDEA. Ofrece soporte completo para Kotlin y Java, integración con el SDK de Android, emuladores incorporados y un editor visual de interfaces. Permite compilar, ejecutar y probar aplicaciones en distintos dispositivos virtuales gracias a su sistema AVD (Android Virtual Device).
Ventajas claves:
  //lista-flechas
  - Herramientas integradas para el diseño UI (Jetpack Compose y XML).
  - Depuración avanzada con Logcat y herramientas de profiling.
  - Integración con Firebase, Git y Gradle.


Xcode
IDE exclusivo para plataformas Apple (iOS, iPadOS, macOS, watchOS, tvOS). Soporta Swift y Objective-C, e incluye un simulador de dispositivos Apple. Integra herramientas para el diseño de interfaces mediante Interface Builder y storyboard, además de funcionalidades de prueba y publicación en App Store.
Ventajas claves:
  //lista-flechas
  - Integración directa con App Store Connect.
  - Simuladores de alta fidelidad.
  - Editor visual con previews de SwiftUI en tiempo real.


Visual Studio
Relevante para el desarrollo multiplataforma, especialmente con Xamarin y .NET MAUI. Soporta C#, F#, y Visual Basic. Ofrece un entorno estable para desarrollo móvil y de escritorio, ideal para quienes provienen del ecosistema Microsoft.
Ventajas claves:
  //lista-flechas
  - Integración con Azure DevOps.
  - Soporte de proyectos compartidos para múltiples plataformas.
  - Buen rendimiento en proyectos empresariales grandes.


## Bloque 5: titulo-segundo
3.2 SDKs - Kits de Desarrollo de Software

## Bloque 6: texto-imagen
//assets: 6.png
//texto
El SDK es el conjunto de herramientas, bibliotecas y documentación, necesarias para construir aplicaciones en una plataforma específica. Sin un SDK, un IDE no podría interactuar con las APIs del sistema operativo, ni compilar adecuadamente.

SDKs más relevantes:

## Bloque 7: slyder-a
//assets: 7.png, 8.png, 9.png, 10.png

Android SDK
Incluye compiladores, emuladores, herramientas de línea de comandos, y bibliotecas para acceder a las funcionalidades de Android. Es indispensable para Android Studio y otros entornos como Flutter.
Componentes principales:
  //lista-flechas
  - adb (Android Debug Bridge): permite comunicación entre el dispositivo y el entorno de desarrollo.
  - sdkmanager: herramienta para instalar y actualizar paquetes del SDK.
  - avdmanager: permite crear dispositivos virtuales Android.


iOS SDK (parte de Xcode)
Proporciona herramientas y bibliotecas necesarias para el desarrollo en dispositivos Apple. Incluye APIs para interfaces gráficas (UIKit, SwiftUI), sensores, red, acceso a hardware y servicios de Apple, como HealthKit o ARKit.
Componentes claves:
  //lista-flechas
  - Simulator: simula dispositivos Apple con distintas versiones de iOS.
  - Interface Builder: permite construir interfaces gráficas visualmente.
  - LLVM/Clang: conjunto de herramientas de compilación.


Flutter SDK
Este SDK, junto con el lenguaje Dart, permite desarrollar interfaces altamente personalizadas. Incluye su propio motor de renderizado y herramientas de línea de comandos (flutter doctor, flutter run, etc.), que verifican la instalación y lanzan proyectos.


React Native CLI + Expo SDK
React Native permite el desarrollo en JavaScript usando componentes nativos. Con Expo, se simplifica el acceso a APIs del dispositivo (cámara, GPS, almacenamiento). El SDK de Expo incluye una app móvil para pruebas instantáneas.

## Bloque 8: titulo-segundo
3.3 Emuladores y simuladores

## Bloque 9: texto-imagen
//assets: 11.svg
//texto
Estas herramientas permiten ejecutar y probar aplicaciones en una computadora sin necesidad de un dispositivo físico, lo cual es clave para el desarrollo iterativo y la depuración rápida.
Diferencias conceptuales:

## Bloque 10: tabla

Tabla 4. Diferencias conceptuales

Emulador
Simulador

Replica hardware y software.
Solo replica el software (interfaz).

Más preciso, pero más pesado.
Más ligero, pero menos realista.

Android Studio (AVD).
Xcode (iOS Simulator).

## Bloque 11: texto
Herramientas destacadas:

## Bloque 12: tarjetas-boton
//assets: 12.png, 13.png, 14.png
//tarjetas
Android Emulator (AVD)
Permite simular decenas de dispositivos con distintas resoluciones, versiones de Android y características. Se pueden activar sensores como GPS, acelerómetro, cámara o red simulada.


iOS Simulator
Integrado en Xcode, simula dispositivos Apple desde iPhone 8 hasta iPhone 15 Pro. Incluye herramientas para simular llamadas, notificaciones, rotaciones, accesos biométricos, entre otros.


Genymotion
Emulador basado en VirtualBox, ideal para testing en Android. Más rápido que AVD en algunas configuraciones, y con soporte para emulación en la nube.

## Bloque 13: texto-color-imagen
//assets: 13.png

//texto
Ejemplo. El dominio de herramientas como los IDEs, SDKs y emuladores, no solo es un requisito técnico para desarrollar aplicaciones móviles funcionales, sino también un reflejo de la profesionalización del proceso de desarrollo. Estas herramientas permiten realizar pruebas sin depender de dispositivos físicos, automatizar procesos, mejorar la productividad y reducir errores.

//color 1
Asimismo, en un entorno laboral competitivo y cambiante, saber configurar y personalizar estas herramientas, se convierte en una ventaja estratégica. Por ello, en este curso se promueve una aproximación práctica y reflexiva al uso de estas herramientas, motivando a los estudiantes a experimentar, comparar entornos y adoptar aquellas combinaciones que mejor se adapten a sus necesidades y proyectos.



## BLOQUE: bloque-material-complementario

Cernuda Menéndez, J. (2015). Creación de juegos y aplicaciones para Android: ( ed.). RA-MA Editorial. https://elibro.net/es/lc/tecnologicadeloriente/titulos/107211

DevExpert - Programación Android y Kotlin. (2023, 28 de septiembre). Retrofit y Kotlin: La Guía Definitiva para Conectar tu App con APIs [Actualizado 2023] [Video]. YouTube. https://www.youtube.com/watch?v=2_DnhfQrwXQ 