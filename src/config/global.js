export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de los peligros y riesgos biológicos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos básicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Agente biológico',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Riesgo biológico',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Agentes Causales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Virus',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Bacterias',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Hongos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Parásitos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Álvarez Heredia, F. (2010). Riesgos biológicos y bioseguridad: (2 ed.). Ecoe Ediciones.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/69149?page=56',
    },
    {
      referencia:
        'Pérez Gil, J. L. (2013). En peligro: riesgos químicos y biológicos actuales: ( ed.). ECU.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/113670',
    },
    {
      referencia:
        'Cepero, M. C. (2012). Biología de hongos: ( ed.). Universidad de los Andes.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/69414?page=26',
    },
    {
      referencia:
        'Rivas Fernandez, M. Á. & Bergillos Gasión, F. (2018). Toxicología clínica: lesiones por picaduras y mordeduras de animales. Tomo I: ( ed.). Bubok Publishing S.L.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/51345?page=27',
    },
  ],
  glosario: [
    {
      termino: 'Agente biológico',
      significado:
        'Cualquier microorganismo (bacteria, virus, hongo, parásito) o sus productos (toxinas) que pueden causar enfermedad en seres humanos.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Conjunto de procedimientos, normas y medidas destinadas a prevenir la exposición y limitar la propagación de agentes biológicos en el entorno laboral.',
    },
    {
      termino: 'Dosis infecciosa',
      significado:
        'Cantidad mínima de un agente biológico necesaria para infectar a un hospedador y causar enfermedad.',
    },
    {
      termino: 'EPP (Equipo de Protección Personal)',
      significado:
        'Elementos (guantes, mascarillas, batas, gafas, etc.) usados para reducir el riesgo de exposición a agentes biológicos.',
    },
    {
      termino: 'Exposición',
      significado:
        'Contacto directo o indirecto de un trabajador con un agente biológico, a través de vías respiratoria, dérmica, oral-digestiva o parenteral.',
    },
    {
      termino: 'Grupo de riesgo 1',
      significado:
        'Agentes con muy baja o nula probabilidad de causar enfermedad en humanos; no requieren contención especial.',
    },
    {
      termino: 'Grupo de riesgo 2',
      significado:
        'Agentes que pueden causar enfermedad en humanos, pero con baja probabilidad de propagación comunitaria y existencia de tratamientos disponibles.',
    },
    {
      termino: 'Grupo de riesgo 3',
      significado:
        'Agentes que generan enfermedades graves en humanos, con riesgo de transmisión comunitaria y requieren contención estricta (BSL-3).',
    },
    {
      termino: 'Grupo de riesgo 4',
      significado:
        'Agentes que provocan enfermedades graves y muy transmisibles, sin tratamiento ni vacuna disponibles; manejo en laboratorios BSL-4.',
    },
    {
      termino: 'Higiene',
      significado:
        'Conjunto de prácticas (lavado de manos, limpieza de superficies, desinfección) que reducen la presencia de agentes biológicos.',
    },
    {
      termino: 'Inmunización',
      significado:
        'Proceso de administración de vacunas para inducir protección contra agentes biológicos específicos.',
    },
    {
      termino: 'Matriz de riesgo',
      significado:
        'Herramienta que combina la probabilidad de exposición y la severidad de las consecuencias para clasificar el nivel de riesgo biológico.',
    },
    {
      termino: 'Parásito',
      significado:
        'Organismo (protozoo o helminto) que depende de otro huésped para sobrevivir y que puede causar enfermedades zoonóticas o transmitidas por vectores.',
    },
    {
      termino: 'Parenteral',
      significado:
        'Vía de entrada de un agente biológico directamente en el torrente sanguíneo u otros tejidos estériles, por pinchazos o lesiones con objetos punzantes.',
    },
    {
      termino: 'Patogenicidad',
      significado:
        'Capacidad de un agente biológico para causar daño y enfermedad en el organismo huésped.',
    },
    {
      termino: 'Picadura',
      significado:
        'Lesión producida por un insecto o artrópodo (mosquito, garrapata) que puede transmitir agentes biológicos a través de la saliva o heces.',
    },
    {
      termino: 'Riesgo biológico',
      significado:
        'Probabilidad de que un trabajador entre en contacto con un agente biológico y su potencial de causar daño a la salud.',
    },
    {
      termino: 'Salud ocupacional',
      significado:
        'Disciplina que estudia y promueve la protección y bienestar de los trabajadores en relación con los riesgos laborales, incluidos los biológicos.',
    },
    {
      termino: 'Vector',
      significado:
        'Organismo (insecto o artrópodo) que transporta y transmite agentes patógenos desde un reservorio a un huésped susceptible.',
    },
  ],
}
