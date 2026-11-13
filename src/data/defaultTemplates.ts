import { QuotationData, DeliveryData, ContractData, PowerOfAttorneyData, ContractType, PowerSubtype } from '../types/documents';

export const defaultQuotation: QuotationData = {
  folio: "COT-2026-0042",
  date: "2026-11-13",
  validUntil: "2026-11-28",
  currency: "MXN",
  issuerName: "Tracción Digital S.A.S. de C.V.",
  issuerRfc: "TDI240101XYZ",
  issuerEmail: "contacto@tracciondigital.com.mx",
  issuerPhone: "+52 55 1234 5678",
  issuerAddress: "Av. Insurgentes Sur 1602, Benito Juárez, CDMX",
  bankName: "BBVA México",
  bankClabe: "012180001234567890",
  bankBeneficiary: "Tracción Digital S.A.S. de C.V.",
  clientName: "Corporativo InnovaTech México S.A. de C.V.",
  clientRfc: "CIM220515ABC",
  clientEmail: "administracion@innovatech.mx",
  clientPhone: "+52 55 9876 5432",
  clientAddress: "Paseo de la Reforma 250, Juárez, Cuauhtémoc, CDMX",
  taxRate: 16,
  discount: 0,
  notes: "Precios en moneda nacional antes de impuestos. El presente presupuesto se emite conforme a los requerimientos técnicos presentados.",
  items: [
    {
      id: "item-1",
      quantity: 1,
      unit: "Servicio",
      description: "Desarrollo de Plataforma Web a la Medida (Next.js, responsive, optimización SEO y panel de administración)",
      unitPrice: 28500
    },
    {
      id: "item-2",
      quantity: 1,
      unit: "Licencia",
      description: "Configuración de Infraestructura en la Nube, Dominio SSL y Despliegue en Red Global Edge",
      unitPrice: 4200
    },
    {
      id: "item-3",
      quantity: 3,
      unit: "Meses",
      description: "Póliza de Mantenimiento Preventivo, Actualizaciones y Soporte Técnico Continuo",
      unitPrice: 2500
    }
  ],
  clauses: [
    {
      id: "q-c1",
      title: "1. Vigencia de la Cotización",
      content: "Los costos, descuentos y plazos estipulados en esta cotización tienen una validez de 15 días naturales a partir de la fecha de expedición.",
      isEnabled: true
    },
    {
      id: "q-c2",
      title: "2. Condiciones y Forma de Pago",
      content: "50% de anticipo al formalizar y autorizar la orden de trabajo; el 50% remanente se liquidará a la entrega final y visto bueno del cliente.",
      isEnabled: true
    },
    {
      id: "q-c3",
      title: "3. Tiempos de Entrega",
      content: "El tiempo estimado de entrega comenzará a computarse una vez recibido el anticipo y toda la documentación, accesos y contenidos requeridos.",
      isEnabled: true
    },
    {
      id: "q-c4",
      title: "4. Garantía y Correcciones",
      content: "Se incluye un periodo de 30 días naturales de garantía posterior a la entrega para solventar cualquier inconsistencia o ajuste técnico contemplado en el alcance.",
      isEnabled: true
    },
    {
      id: "q-c5",
      title: "5. Trabajos Fuera de Alcance",
      content: "Cualquier funcionalidad o requerimiento no desglosado expresamente en las partidas se presupuestará de manera independiente mediante anexo técnico.",
      isEnabled: true
    }
  ]
};

export const defaultDelivery: DeliveryData = {
  folio: "REM-2026-018",
  date: "2026-11-13",
  orderNumber: "OC-2026-894",
  issuerName: "Tracción Digital / Logística y Suministros",
  issuerRfc: "TDI240101XYZ",
  issuerPhone: "+52 55 1234 5678",
  issuerAddress: "Av. Insurgentes Sur 1602, Benito Juárez, CDMX",
  clientName: "Grupo Comercial del Centro S.A. de C.V.",
  clientRfc: "GCC180320KL1",
  clientAddress: "Parque Industrial Vallejo, Bodega 4-B, Azcapotzalco, CDMX",
  clientContact: "Ing. Roberto Alarcón (Almacén Central)",
  receiverName: "Lic. Carlos Mendoza Ramos",
  receiverPhone: "+52 55 4433 2211",
  carrierName: "Mensajería Directa Express S.A.",
  driverName: "Jorge Luis Pérez Mendoza",
  carrierPlates: "Camioneta Nissan NP300 - Placas: 48-AK-9Z",
  deliveryNotes: "Material entregado en cajas cerradas y precintadas de fábrica. Inspeccionado visualmente en presencia del personal de almacén.",
  items: [
    {
      id: "d-1",
      quantity: 5,
      unit: "Equipos",
      code: "SRV-TD-01",
      description: "Servidores Rack 1U Intel Xeon 32GB RAM / 1TB SSD NVMe",
      condition: "Nuevo / En empaque original de fábrica con precintos intactos"
    },
    {
      id: "d-2",
      quantity: 10,
      unit: "Piezas",
      code: "RTR-CIS-29",
      description: "Routers de Comunicación Gigabit Administrables con Licencia",
      condition: "Nuevo / Verificado funcional"
    },
    {
      id: "d-3",
      quantity: 1,
      unit: "Kit",
      code: "CAB-ACC-05",
      description: "Juego de Cables de Fibra Óptica y Patch Panels Certificados",
      condition: "Sellado"
    }
  ],
  clauses: [
    {
      id: "d-c1",
      title: "1. Recepción a Entera Satisfacción",
      content: "El receptor declara recibir las mercancías, productos o bienes descritos en perfecto estado físico, empaque íntegro y con número de piezas verificado.",
      isEnabled: true
    },
    {
      id: "d-c2",
      title: "2. Plazo para Reclamaciones",
      content: "Cualquier reporte por faltantes o anomalías no detectables a simple vista deberá notificarse por escrito dentro de un plazo máximo de 48 horas hábiles.",
      isEnabled: true
    },
    {
      id: "d-c3",
      title: "3. Reserva de Propiedad",
      content: "La titularidad de los bienes amparados por esta nota de remisión queda reservada al emisor hasta el pago total de la factura correspondiente.",
      isEnabled: true
    },
    {
      id: "d-c4",
      title: "4. Política de Devoluciones",
      content: "No se admitirán devoluciones de productos sin su empaque original o que muestren huellas de maltrato, alteración o instalación indebida.",
      isEnabled: true
    }
  ]
};

export const defaultContracts: Record<ContractType, ContractData> = {
  servicios: {
    contractType: "servicios",
    title: "CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES",
    cityAndDate: "Ciudad de México, a 13 de Noviembre de 2026",
    partyARole: "EL PRESTADOR",
    partyAName: "Tracción Digital S.A.S. de C.V.",
    partyARfc: "TDI240101XYZ",
    partyAAddress: "Av. Insurgentes Sur 1602, Benito Juárez, C.P. 03920, CDMX",
    partyARepresentative: "Ing. Alejandro Morales Rivera",
    partyBRole: "EL CLIENTE",
    partyBName: "Comercializadora Vanguardia Digital S.A. de C.V.",
    partyBRfc: "CVD190822GH4",
    partyBAddress: "Calle Durango 245, Roma Norte, Cuauhtémoc, C.P. 06700, CDMX",
    partyBRepresentative: "Mtra. Sofía Valenzuela Herrera",
    amount: 45000,
    currency: "MXN",
    paymentTerms: "50% de anticipo a la firma y 50% al término y aceptación de entregables",
    duration: "60 días naturales a partir de la firma",
    witness1Name: "Lic. Roberto Garza Treviño",
    witness1Id: "INE: 0839217823901",
    witness2Name: "Lic. Mariana Cruz Ochoa",
    witness2Id: "INE: 9482103948201",
    declarations: [
      {
        id: "cd-1",
        title: "I. DECLARA EL PRESTADOR:",
        content: "Ser una sociedad mercantil legalmente constituida conforme a las leyes de los Estados Unidos Mexicanos, con facultades bastantes y suficientes para la celebración del presente contrato, contando con el personal calificado, la experiencia, capacidad técnica y recursos indispensables para prestar los servicios objeto de este instrumento.",
        isEnabled: true
      },
      {
        id: "cd-2",
        title: "II. DECLARA EL CLIENTE:",
        content: "Ser una persona moral debidamente organizada y existente con arreglo a la legislación mexicana, con plena personalidad y capacidad jurídica para obligarse conforme a este instrumento, requiriendo los servicios profesionales de EL PRESTADOR y contando con los fondos y solvencia económica suficientes para sufragar los honorarios convenidos.",
        isEnabled: true
      },
      {
        id: "cd-3",
        title: "III. DECLARAN AMBAS PARTES:",
        content: "Que se reconocen recíprocamente la personalidad y legitimación jurídica con la que comparecen, manifestando bajo protesta de decir verdad que en la celebración de este contrato no media dolo, error, violencia, mala fe ni lesión, obligándose al tenor de las siguientes:",
        isEnabled: true
      }
    ],
    clauses: [
      {
        id: "cs-1",
        title: "PRIMERA. OBJETO DEL CONTRATO",
        content: "EL PRESTADOR se obliga a prestar a favor de EL CLIENTE sus servicios profesionales especializados consistentes en el diseño, desarrollo, configuración y despliegue de soluciones tecnológicas, con apego a los más altos estándares de calidad técnica e idoneidad.",
        isEnabled: true
      },
      {
        id: "cs-2",
        title: "SEGUNDA. CONTRAPRESTACIÓN Y CFDI",
        content: "Como contraprestación total por los servicios contratados, EL CLIENTE se compromete a pagar a EL PRESTADOR la cantidad acordada más el Impuesto al Valor Agregado (IVA). EL PRESTADOR expedirá las facturas electrónicas (CFDI) que cumplan estrictamente con las disposiciones fiscales emitidas por el SAT.",
        isEnabled: true
      },
      {
        id: "cs-3",
        title: "TERCERA. VIGENCIA Y PLAZO DE EJECUCIÓN",
        content: "El presente instrumento surtirá efectos a partir de la fecha de su firma y se mantendrá vigente hasta la conclusión formal de los trabajos y entrega a entera satisfacción, pudiendo prorrogarse previo acuerdo por escrito entre ambas partes.",
        isEnabled: true
      },
      {
        id: "cs-4",
        title: "CUARTA. PROPIEDAD INTELECTUAL Y DERECHOS PATRIMONIALES",
        content: "Una vez que EL CLIENTE haya liquidado en su totalidad las cantidades convenidas, EL PRESTADOR cederá los derechos patrimoniales sobre los desarrollos finales resultantes del encargo. EL PRESTADOR conserva sus derechos morales inalienables e irrenunciables.",
        isEnabled: true
      },
      {
        id: "cs-5",
        title: "QUINTA. CONFIDENCIALIDAD ESTRICTA",
        content: "Ambas partes convienen en mantener bajo estricta reserva toda la información técnica, financiera, comercial o estratégica a la que tengan acceso con motivo del presente contrato, no pudiendo divulgarla a terceros sin autorización previa por escrito.",
        isEnabled: true
      },
      {
        id: "cs-6",
        title: "SEXTA. INEXISTENCIA DE RELACIÓN LABORAL",
        content: "Las partes reconocen expresamente que el presente contrato es de naturaleza mercantil y civil. No existe ni se generará vínculo laboral alguno, subordinación ni dependencia patronal entre el personal de una y otra parte con fundamento en la Ley Federal del Trabajo.",
        isEnabled: true
      },
      {
        id: "cs-7",
        title: "SÉPTIMA. RESCISIÓN Y TERMINACIÓN ANTICIPADA",
        content: "Cualquiera de las partes podrá rescindir anticipadamente el presente contrato sin necesidad de declaración judicial, mediando notificación por escrito con 15 días naturales de anticipación y liquidando los servicios efectivamente devengados hasta la fecha.",
        isEnabled: true
      },
      {
        id: "cs-8",
        title: "OCTAVA. JURISDICCIÓN Y LEGISLACIÓN APLICABLE",
        content: "Para la interpretación y cumplimiento de este contrato, las partes se someten expresamente a las leyes federales de los Estados Unidos Mexicanos y a la jurisdicción de los Tribunales Competentes de la Ciudad de México, renunciando a cualquier otro fuero por razón de domicilio.",
        isEnabled: true
      }
    ]
  },
  arrendamiento: {
    contractType: "arrendamiento",
    title: "CONTRATO DE ARRENDAMIENTO DE BIEN INMUEBLE",
    cityAndDate: "Ciudad de México, a 13 de Noviembre de 2026",
    partyARole: "EL ARRENDADOR",
    partyAName: "C. Fernando González Ortiz",
    partyARfc: "GOOF750412H89",
    partyAAddress: "Colonia Del Valle Centro, C.P. 03100, Alcaldía Benito Juárez, CDMX",
    partyARepresentative: "Por propio derecho",
    partyBRole: "EL ARRENDATARIO",
    partyBName: "C. Valeria Méndez Solís",
    partyBRfc: "MESV910204KL3",
    partyBAddress: "Colonia Roma Norte, C.P. 06700, Alcaldía Cuauhtémoc, CDMX",
    partyBRepresentative: "Por propio derecho",
    amount: 18500,
    currency: "MXN",
    paymentTerms: "Mensualidad anticipada dentro de los primeros 5 días naturales de cada mes",
    duration: "12 meses forzosos para ambas partes",
    witness1Name: "C. Javier Estrada Luna",
    witness1Id: "INE: 1029384756",
    witness2Name: "C. Andrea Pineda Ríos",
    witness2Id: "INE: 5647382910",
    declarations: [
      {
        id: "da-1",
        title: "I. DECLARA EL ARRENDADOR:",
        content: "Ser legítimo propietario con capacidad jurídica plena sobre el inmueble objeto de este contrato, encontrándose al corriente en el pago de contribuciones prediales y de servicios correspondientes.",
        isEnabled: true
      },
      {
        id: "da-2",
        title: "II. DECLARA EL ARRENDATARIO:",
        content: "Que cuenta con la capacidad jurídica y solvencia económica comprobable para contratar, habiendo inspeccionado previamente el inmueble y reconociendo que reúne las condiciones higiénicas y de salubridad necesarias.",
        isEnabled: true
      }
    ],
    clauses: [
      {
        id: "ca-1",
        title: "PRIMERA. OBJETO Y DESCRIPCIÓN DEL INMUEBLE",
        content: "EL ARRENDADOR otorga en arrendamiento a EL ARRENDATARIO el inmueble ubicado en Calle Providencia #412, Depto 302, Colonia Del Valle, Benito Juárez, CDMX, el cual se entrega en óptimas condiciones de habitabilidad, pintura, fontanería y cerrajería.",
        isEnabled: true
      },
      {
        id: "ca-2",
        title: "SEGUNDA. PRECIO DE LA RENTA Y MORA",
        content: "EL ARRENDATARIO se obliga a pagar puntualmente la renta convenida dentro de los primeros cinco días naturales de cada mes. En caso de mora, se aplicará un recargo del 5% mensual sobre el saldo insoluto por cada mes o fracción transcurrida.",
        isEnabled: true
      },
      {
        id: "ca-3",
        title: "TERCERA. DEPÓSITO EN GARANTÍA",
        content: "A la firma de este instrumento, EL ARRENDATARIO entrega a EL ARRENDADOR el equivalente a un mes de renta en calidad de depósito en garantía, el cual no podrá aplicarse al pago de rentas y se reembolsará a los 30 días posteriores a la desocupación.",
        isEnabled: true
      },
      {
        id: "ca-4",
        title: "CUARTA. DESTINO EXCLUSIVO",
        content: "El inmueble materia de este contrato será destinado única y exclusivamente para uso habitacional particular, quedando terminantemente prohibido su uso comercial, subarrendamiento total o parcial, o destino a plataformas temporales de hospedaje.",
        isEnabled: true
      },
      {
        id: "ca-5",
        title: "QUINTA. SERVICIOS Y CUOTAS DE MANTENIMIENTO",
        content: "Correrán por cuenta exclusiva de EL ARRENDATARIO los pagos correspondientes a energía eléctrica (CFE), gas, telefonía e internet, así como la cuota ordinaria de mantenimiento del condominio.",
        isEnabled: true
      },
      {
        id: "ca-6",
        title: "SEXTA. JURISDICCIÓN Y COMPETENCIA",
        content: "Las partes se someten expresamente a la competencia de los Juzgados Civiles de la Ciudad de México para resolver cualquier controversia derivada del presente contrato de arrendamiento.",
        isEnabled: true
      }
    ]
  },
  nda: {
    contractType: "nda",
    title: "ACUERDO DE CONFIDENCIALIDAD Y NO DIVULGACIÓN (NDA)",
    cityAndDate: "Ciudad de México, a 13 de Noviembre de 2026",
    partyARole: "PARTE DIVULGANTE",
    partyAName: "Tracción Digital / Proyectos Tecnológicos",
    partyARfc: "TDI240101XYZ",
    partyAAddress: "Av. Insurgentes Sur 1602, Benito Juárez, CDMX",
    partyARepresentative: "Director General",
    partyBRole: "PARTE RECEPTORA",
    partyBName: "Desarrollos y Alianzas Estratégicas S.A.P.I. de C.V.",
    partyBRfc: "DAE211105MN8",
    partyBAddress: "Campos Elíseos 400, Polanco, Miguel Hidalgo, CDMX",
    partyBRepresentative: "Representante Legal",
    amount: 0,
    currency: "MXN",
    paymentTerms: "Sin contraprestación económica directa / Deber fiduciario de secreto industrial",
    duration: "3 años a partir de la firma del presente instrumento",
    witness1Name: "Lic. Gabriel Domínguez Paz",
    witness1Id: "INE: 7722883399",
    witness2Name: "Lic. Claudia Serrano Ruiz",
    witness2Id: "INE: 1144778855",
    declarations: [
      {
        id: "dnda-1",
        title: "I. DECLARAN AMBAS PARTES:",
        content: "Que con motivo de explorar y ejecutar proyectos comerciales y de tecnología conjuntos, resulta imprescindible intercambiar información de carácter estrictamente confidencial y reservada.",
        isEnabled: true
      }
    ],
    clauses: [
      {
        id: "cnda-1",
        title: "PRIMERA. DEFINICIÓN DE INFORMACIÓN CONFIDENCIAL",
        content: "Se considera información confidencial todo dato técnico, comercial, código fuente, algoritmos, arquitectura de software, planes de negocio, listas de clientes y estrategias transmitidas verbalmente, por escrito o en medios electrónicos entre las partes.",
        isEnabled: true
      },
      {
        id: "cnda-2",
        title: "SEGUNDA. OBLIGACIONES DE LA PARTE RECEPTORA",
        content: "La parte receptora se compromete a salvaguardar la información confidencial con el mismo grado de diligencia que aplica a su propia información de similar naturaleza, y nunca menor a un cuidado razonable y prudente.",
        isEnabled: true
      },
      {
        id: "cnda-3",
        title: "TERCERA. EXCLUSIONES",
        content: "No se considerará confidencial aquella información que sea del dominio público sin incumplimiento del presente acuerdo, que estuviera en posesión legítima previa, o que deba revelarse por mandamiento judicial de autoridad competente.",
        isEnabled: true
      },
      {
        id: "cnda-4",
        title: "CUARTA. PENALIDAD POR INCUMPLIMIENTO",
        content: "En caso de quebranto o revelación no autorizada de la información confidencial, la parte responsable responderá por los daños y perjuicios directos e indirectos causados, además de las acciones civiles y penales correspondientes.",
        isEnabled: true
      }
    ]
  },
  compraventa: {
    contractType: "compraventa",
    title: "CONTRATO PRIVADO DE COMPRAVENTA DE BIEN MUEBLE / EQUIPO",
    cityAndDate: "Ciudad de México, a 13 de Noviembre de 2026",
    partyARole: "EL VENDEDOR",
    partyAName: "C. Martín Morales Silva",
    partyARfc: "MOSM820315P71",
    partyAAddress: "Calle Florencia #32, Juárez, Cuauhtémoc, CDMX",
    partyARepresentative: "Por propio derecho",
    partyBRole: "EL COMPRADOR",
    partyBName: "C. Beatriz Navarro Domínguez",
    partyBRfc: "NADB881123JJ9",
    partyBAddress: "Av. Coyoacán #1520, Del Valle, Benito Juárez, CDMX",
    partyBRepresentative: "Por propio derecho",
    amount: 32000,
    currency: "MXN",
    paymentTerms: "Pago en una sola exhibición contra entrega física del bien y su documentación",
    duration: "De ejecución instantánea con garantía por vicios ocultos de 60 días",
    witness1Name: "C. Enrique Roldán Vera",
    witness1Id: "INE: 9988776655",
    witness2Name: "C. Mónica Alarcón Gil",
    witness2Id: "INE: 4433221100",
    declarations: [
      {
        id: "dcv-1",
        title: "I. DECLARA EL VENDEDOR:",
        content: "Ser legítimo y único propietario del bien mueble objeto del contrato, el cual adquirió de manera lícita, encontrándose libre de gravámenes, embargos o limitaciones de dominio.",
        isEnabled: true
      }
    ],
    clauses: [
      {
        id: "ccv-1",
        title: "PRIMERA. OBJETO DE LA COMPRAVENTA",
        content: "EL VENDEDOR transfiere la propiedad a favor de EL COMPRADOR del bien consistente en: Estación de Trabajo de Cómputo Profesional con Tarjeta Gráfica NVIDIA RTX 4080, Procesador Intel Core i9, 64GB RAM y Monitores Duales 4K, con Número de Serie ST-2024-9988.",
        isEnabled: true
      },
      {
        id: "ccv-2",
        title: "SEGUNDA. PRECIO CONVENIDO Y LIQUIDACIÓN",
        content: "El precio cierto y en dinero fijado por ambas partes asciende al monto indicado en este contrato, el cual es liquidado en su totalidad mediante transferencia electrónica bancaria al momento de la firma y entrega.",
        isEnabled: true
      },
      {
        id: "ccv-3",
        title: "TERCERA. LIBERTAD DE GRAVÁMENES Y SANEAMIENTO",
        content: "EL VENDEDOR manifiesta bajo protesta de decir verdad que es legítimo propietario del bien objeto del contrato, obligándose expresamente al saneamiento para el caso de evicción conforme al Código Civil.",
        isEnabled: true
      }
    ]
  }
};

export const defaultPowerOfAttorney: Record<PowerSubtype, PowerOfAttorneyData> = {
  general: {
    subtype: "general",
    cityAndDate: "Ciudad de México, a 13 de Noviembre de 2026",
    validityUntil: "31 de Diciembre de 2026",
    authorityTarget: "A QUIEN CORRESPONDA / AUTORIDADES ADMINISTRATIVAS Y JUDICIALES COMPETENTES:",
    legalBasis: "Con fundamento en los artículos 2546, 2551 fracción III, 2554 y relativos del Código Civil Federal y sus correlativos en las entidades federativas:",
    grantorName: "C. Gerardo Montes de Oca Lozano",
    grantorCurpOrRfc: "MOLG780914HDFZNR03",
    grantorId: "INE: 0394819284710",
    grantorAddress: "Calle Amores #830, Col. Del Valle Norte, Benito Juárez, CDMX",
    grantorPhone: "+52 55 5566 7788",
    attorneyName: "Lic. Patricia Zambrano Fuentes",
    attorneyCurpOrRfc: "ZAFP860405MDFMNR09",
    attorneyId: "INE: 9182736450192",
    attorneyAddress: "Av. Cuauhtémoc #450, Col. Narvarte Poniente, Benito Juárez, CDMX",
    attorneyPhone: "+52 55 9988 7766",
    powersDescription: "Para que en mi nombre y representación comparezca ante toda clase de autoridades administrativas, federales, estatales o municipales, así como ante personas físicas, personas morales e instituciones bancarias o de crédito; con facultades expresas para promover solicitudes, exhibir y cotejar documentos originales, oír y recibir notificaciones, formular acuerdos, pagar derechos o contribuciones y firmar todos los formatos, actas y promociones que resulten indispensables para el debido desahogo de las gestiones encomendadas.",
    witness1Name: "C. Daniel Aguilar Ponce",
    witness1Id: "CURP: AUPD820101HDFXX01",
    witness2Name: "C. Lorena Cisneros Téllez",
    witness2Id: "CURP: CITL891212MDFXX02",
    clauses: [
      {
        id: "cp-1",
        title: "ALCANCE DE LAS FACULTADES CONFERIDAS",
        content: "El apoderado queda plenamente autorizado para comparecer, solicitar, presentar promociones, consultar expedientes, oír y recibir toda clase de notificaciones e interponer recursos administrativos con relación a los asuntos designados.",
        isEnabled: true
      },
      {
        id: "cp-2",
        title: "PROHIBICIÓN EXPRESA DE DISPOSICIÓN PATRIMONIAL",
        content: "La presente carta poder no autoriza en ningún caso actos de dominio, enajenación de bienes, contratación de créditos, gravámenes hipotecarios ni cesión de derechos patrimoniales sobre bienes del otorgante.",
        isEnabled: true
      },
      {
        id: "cp-3",
        title: "PROHIBICIÓN DE SUSTITUCIÓN Y RENDICIÓN DE CUENTAS",
        content: "Las facultades otorgadas tienen carácter personalísimo e intransferible. El apoderado no podrá sustituir ni delegar este mandato en terceras personas y queda obligado a rendir cuentas detalladas de su gestión al otorgante.",
        isEnabled: true
      }
    ]
  },
  vehicular: {
    subtype: "vehicular",
    cityAndDate: "Ciudad de México, a 13 de Noviembre de 2026",
    validityUntil: "30 días naturales a partir de su emisión",
    authorityTarget: "A LA SECRETARÍA DE MOVILIDAD (SEMOVI), SECRETARÍA DE FINANZAS Y MÓDULOS DE CONTROL VEHICULAR:",
    legalBasis: "Con fundamento en los artículos 2546, 2551 y 2554 del Código Civil y los reglamentos de tránsito y control vehicular vigentes:",
    grantorName: "C. Mauricio Soler Galindo",
    grantorCurpOrRfc: "SOGM840618HDFLLR05",
    grantorId: "INE: 4829103948123",
    grantorAddress: "Av. Patriotismo #220, San Pedro de los Pinos, Benito Juárez, CDMX",
    grantorPhone: "+52 55 3322 1100",
    attorneyName: "C. Armando Téllez Corona",
    attorneyCurpOrRfc: "TECA900315HDFMNR01",
    attorneyId: "INE: 7483920194857",
    attorneyAddress: "Calle Río Tiber #65, Cuauhtémoc, CDMX",
    attorneyPhone: "+52 55 6677 8899",
    powersDescription: "Realizar todos los trámites vehiculares pertinentes ante la Secretaría de Movilidad (SEMOVI), Secretaría de Finanzas y Módulos de Control Vehicular correspondientes al vehículo marca Volkswagen Jetta, Modelo 2022, Color Blanco, Placas de Circulación 892-ABC, Número de Serie / VIN: 3VW2K7AJ8NM123456; incluyendo alta o baja de placas, cambio de propietario, reposición de tarjeta de circulación y verificación vehicular, autorizándolo a recoger placas, engomados y comprobantes originales.",
    witness1Name: "C. Jorge Almonte Vega",
    witness1Id: "CURP: AOVJ810505HDFXX03",
    witness2Name: "C. Brenda Romo Castro",
    witness2Id: "CURP: ROCB870808MDFXX04",
    clauses: [
      {
        id: "cpv-1",
        title: "FACULTADES EN MATERIA DE TRÁNSITO Y CONTROL VEHICULAR",
        content: "El apoderado cuenta con autorización expresa para firmar formatos de solicitud, pagar derechos e impuestos vehiculares, exhibir facturas y documentos oficiales originales, y recoger las placas de circulación, engomado y tarjeta de circulación expedidas a nombre del poderdante.",
        isEnabled: true
      },
      {
        id: "cpv-2",
        title: "LÍMITE ESTRICTO DE REPRESENTACIÓN",
        content: "Este mandato queda circunscrito exclusivamente a los trámites administrativos del vehículo automotor especificado, quedando prohibida la venta, cesión o entrega del vehículo a terceros.",
        isEnabled: true
      }
    ]
  },
  tramites: {
    subtype: "tramites",
    cityAndDate: "Ciudad de México, a 13 de Noviembre de 2026",
    validityUntil: "15 de Diciembre de 2026",
    authorityTarget: "A LA COMISIÓN FEDERAL DE ELECTRICIDAD (CFE), SISTEMA DE AGUAS (SACMEX) Y PROVEEDORES DE TELECOMUNICACIONES:",
    legalBasis: "Con fundamento en los artículos 2546 y concordantes del Código Civil:",
    grantorName: "C. Lucía Paredes Santillán",
    grantorCurpOrRfc: "PASL730225MDFRRN02",
    grantorId: "INE: 5948392019485",
    grantorAddress: "Calle Colima #180, Roma Norte, Cuauhtémoc, CDMX",
    grantorPhone: "+52 55 7788 9900",
    attorneyName: "C. Samuel Rentería Morales",
    attorneyCurpOrRfc: "REMS880719HDFNRL07",
    attorneyId: "INE: 1849204958372",
    attorneyAddress: "Calle Eugenia #910, Del Valle Centro, Benito Juárez, CDMX",
    attorneyPhone: "+52 55 1122 3344",
    powersDescription: "Gestionar y dar seguimiento a trámites de cambio de titularidad de servicios públicos y domiciliarios ante la Comisión Federal de Electricidad (CFE), Sistema de Aguas de la Ciudad de México (SACMEX), compañías de telecomunicaciones (telefonía e internet) y oficinas de catastro municipal respecto al predio ubicado en Calle Colima #180.",
    witness1Name: "C. Miguel Ángel Becerra",
    witness1Id: "CURP: BEMM850404HDFXX05",
    witness2Name: "C. Diana Salgado Bravo",
    witness2Id: "CURP: SABD900606MDFXX06",
    clauses: [
      {
        id: "cpt-1",
        title: "GESTIONES ANTE EMPRESAS PÚBLICAS Y PRIVADAS",
        content: "El apoderado podrá solicitar inspecciones técnicas, dar de alta contratos de suministro, efectuar aclaraciones de saldos y recibir estados de cuenta oficiales.",
        isEnabled: true
      }
    ]
  },
  cobro: {
    subtype: "cobro",
    cityAndDate: "Ciudad de México, a 13 de Noviembre de 2026",
    validityUntil: "30 de Noviembre de 2026",
    authorityTarget: "A LA INSTITUCIÓN BANCARIA, CAJA GENERAL O EMPRESA EMISORA:",
    legalBasis: "Con fundamento en los artículos 2546, 2554 y concordantes del Código Civil:",
    grantorName: "C. Manuel Arredondo Esquivel",
    grantorCurpOrRfc: "AAEM690510HDFRLS08",
    grantorId: "INE: 4958392019482",
    grantorAddress: "Av. Universidad #1200, Xoco, Benito Juárez, CDMX",
    grantorPhone: "+52 55 4455 6677",
    attorneyName: "C. Esteban Bravo Cárdenas",
    attorneyCurpOrRfc: "BACE920830HDFRRN04",
    attorneyId: "INE: 3948201948572",
    attorneyAddress: "Calle Gabriel Mancera #315, Del Valle Norte, CDMX",
    attorneyPhone: "+52 55 8899 0011",
    powersDescription: "Cobrar y recibir en ventanilla o caja general la cantidad amparada por el cheque no negociable o comprobante de finiquito emitido por la persona moral o física correspondiente, firmando el recibo de caja de conformidad.",
    witness1Name: "C. Mario Vaca López",
    witness1Id: "CURP: VALM830303HDFXX07",
    witness2Name: "C. Karla Montero Gil",
    witness2Id: "CURP: MOGK910909MDFXX08",
    clauses: [
      {
        id: "cpc-1",
        title: "FACULTAD DE COBRO Y EXPEDICIÓN DE RECIBO",
        content: "El apoderado se encuentra investido de facultades bastantes para recibir los fondos o títulos de crédito indicados y emitir el respectivo contra-recibo en nombre del poderdante.",
        isEnabled: true
      },
      {
        id: "cpc-2",
        title: "ENTREGA INMEDIATA DE LOS FONDOS",
        content: "Los recursos económicos cobrados deberán ser puestos a disposición inmediata del poderdante dentro de las 24 horas siguientes a su recaudación efectiva.",
        isEnabled: true
      }
    ]
  }
};
