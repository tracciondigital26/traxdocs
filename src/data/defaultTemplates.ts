import { QuotationData, DeliveryData, ContractData, PowerOfAttorneyData, ContractType, PowerSubtype } from '../types/documents';

export const defaultQuotation: QuotationData = {
  folio: "COT-2026-0042",
  date: new Date().toISOString().split('T')[0],
  validUntil: new Date(Date.now() + 15 * 86400000).toISOString().split('T')[0],
  currency: "MXN",
  issuerName: "Tracción Digital S.A.S. de C.V.",
  issuerRfc: "TDI240101XYZ",
  issuerEmail: "contacto@tracciondigital.com.mx",
  issuerPhone: "+52 55 1234 5678",
  issuerAddress: "Av. Insurgentes Sur 1602, Crédito Constructor, Benito Juárez, CDMX",
  bankName: "BBVA México",
  bankClabe: "012180001234567890",
  bankBeneficiary: "Tracción Digital",
  clientName: "Corporativo InnovaTech México",
  clientRfc: "CIM220515ABC",
  clientEmail: "administracion@innovatech.mx",
  clientPhone: "+52 55 9876 5432",
  clientAddress: "Paseo de la Reforma 250, Juárez, Cuauhtémoc, CDMX",
  taxRate: 16,
  discount: 0,
  notes: "Precios expresados en moneda nacional antes de impuestos. El presente presupuesto se emite conforme a los requerimientos técnicos presentados por el cliente.",
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
  date: new Date().toISOString().split('T')[0],
  orderNumber: "OC-2026-894",
  issuerName: "Tracción Digital / Logística y Suministros",
  issuerRfc: "TDI240101XYZ",
  issuerPhone: "+52 55 1234 5678",
  clientName: "Grupo Comercial del Centro S.A. de C.V.",
  clientRfc: "GCC180320KL1",
  clientAddress: "Parque Industrial Vallejo, Bodega 4-B, Azcapotzalco, CDMX",
  receiverName: "Lic. Carlos Mendoza Ramos",
  receiverPhone: "+52 55 4433 2211",
  carrierName: "Mensajería Directa Express - Conductor: Jorge Luis Pérez",
  carrierPlates: "Placas: 48-AK-9Z",
  deliveryNotes: "Se entrega material en cajas selladas y etiquetadas. Verificado en presencia del encargado de almacén.",
  items: [
    {
      id: "d-1",
      quantity: 5,
      unit: "Equipo",
      code: "SRV-TD-01",
      description: "Servidores Rack 1U Intel Xeon 32GB RAM / 1TB SSD NVMe",
      condition: "Nuevo / En empaque original de fábrica"
    },
    {
      id: "d-2",
      quantity: 10,
      unit: "Pieza",
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
    witness1Address: "CDMX, Identificación INE: 0839217823901",
    witness2Name: "Lic. Mariana Cruz Ochoa",
    witness2Address: "CDMX, Identificación INE: 9482103948201",
    clauses: [
      {
        id: "cs-1",
        title: "PRIMERA. OBJETO DEL CONTRATO",
        content: "EL PRESTADOR se obliga a prestar a favor de EL CLIENTE sus servicios profesionales especializados consistentes en el diseño, desarrollo, configuración y despliegue de soluciones tecnológicas, con apego a los más altos estándares de calidad técnica e idoneidad.",
        isEnabled: true
      },
      {
        id: "cs-2",
        title: "SEGUNDA. CONTRAPRESTACIÓN Y CONDICIONES DE PAGO",
        content: "Como contraprestación total por los servicios contratados, EL CLIENTE se compromete a pagar a EL PRESTADOR la cantidad acordada más el Impuesto al Valor Agregado (IVA). Los pagos se realizarán mediante transferencia bancaria a la cuenta designada por EL PRESTADOR.",
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
    witness1Address: "CDMX, INE 1029384756",
    witness2Name: "C. Andrea Pineda Ríos",
    witness2Address: "CDMX, INE 5647382910",
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
        title: "SEXTA. CONSERVACIÓN Y MEJORAS",
        content: "No se podrán efectuar modificaciones estructurales ni perforaciones indebidas en el inmueble sin autorización por escrito de EL ARRENDADOR. Cualquier mejora autorizada que no pueda retirarse sin detrimento del bien quedará en beneficio del inmueble.",
        isEnabled: true
      },
      {
        id: "ca-7",
        title: "SÉPTIMA. JURISDICCIÓN",
        content: "Las partes se someten a la competencia de los Juzgados Civiles de la Ciudad de México para resolver cualquier controversia derivada del presente contrato de arrendamiento.",
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
    partyAAddress: "Av. Insurgentes Sur 1602, CDMX",
    partyARepresentative: "Director General",
    partyBRole: "PARTE RECEPTORA",
    partyBName: "Desarrollos y Alianzas Estratégicas S.A.P.I. de C.V.",
    partyBRfc: "DAE211105MN8",
    partyBAddress: "Campos Elíseos 400, Polanco, Miguel Hidalgo, CDMX",
    partyBRepresentative: "Representante Legal",
    amount: 0,
    currency: "MXN",
    paymentTerms: "Sin contraprestación económica directa / Deber fiduciario de confidencialidad",
    duration: "3 años a partir de la firma del presente instrumento",
    witness1Name: "Lic. Gabriel Domínguez Paz",
    witness1Address: "CDMX, INE 7722883399",
    witness2Name: "Lic. Claudia Serrano Ruiz",
    witness2Address: "CDMX, INE 1144778855",
    clauses: [
      {
        id: "cnda-1",
        title: "PRIMERA. DEFINICIÓN DE INFORMACIÓN CONFIDENCIAL",
        content: "Se considera información confidencial todo dato técnico, comercial, código fuente, algoritmos, arquitectura de software, planes de negocio, lista de clientes y estrategias transmitidas verbalmente, por escrito o en medios electrónicos entre las partes.",
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
        content: "En caso de quebranto o revelación no autorizada de la información confidencial, la parte responsable responderá por los daños y perjuicios directos e indirectos causados, además de las acciones civiles y penales a que haya lugar conforme al Código Penal Federal y la Ley Federal de Protección a la Propiedad Industrial.",
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
    witness1Address: "CDMX, INE 9988776655",
    witness2Name: "C. Mónica Alarcón Gil",
    witness2Address: "CDMX, INE 4433221100",
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
        content: "EL VENDEDOR manifiesta bajo protesta de decir verdad que es legítimo propietario del bien objeto del contrato, el cual se encuentra completamente libre de gravámenes, embargos o limitaciones de dominio, obligándose al saneamiento para el caso de evicción.",
        isEnabled: true
      },
      {
        id: "ccv-4",
        title: "CUARTA. ENTREGA FÍSICA Y REVISIÓN",
        content: "EL COMPRADOR inspecciona el bien a su entera satisfacción, recibiendo junto con él los manuales, cables, accesorios y comprobantes fiscales originales que amparan su legítima procedencia.",
        isEnabled: true
      }
    ]
  }
};

export const defaultPowerOfAttorney: Record<PowerSubtype, PowerOfAttorneyData> = {
  general: {
    subtype: "general",
    cityAndDate: "Ciudad de México, a 13 de Noviembre de 2026",
    grantorName: "C. Gerardo Montes de Oca Lozano",
    grantorCurpOrRfc: "MOLG780914HDFZNR03",
    grantorAddress: "Calle Amores #830, Col. Del Valle Norte, Benito Juárez, CDMX",
    grantorPhone: "+52 55 5566 7788",
    attorneyName: "Lic. Patricia Zambrano Fuentes",
    attorneyCurpOrRfc: "ZAFP860405MDFMNR09",
    attorneyAddress: "Av. Cuauhtémoc #450, Col. Narvarte Poniente, Benito Juárez, CDMX",
    attorneyPhone: "+52 55 9988 7766",
    validityUntil: "31 de Diciembre de 2026",
    powersDescription: "Realizar ante toda clase de autoridades administrativas, federales, estatales o municipales, así como ante personas morales o instituciones públicas y privadas, toda clase de gestiones, solicitudes, entrega y recepción de documentos, notificaciones y firmas que correspondan al interés del otorgante.",
    witness1Name: "C. Daniel Aguilar Ponce",
    witness1Curp: "AUPD820101HDFXX01",
    witness2Name: "C. Lorena Cisneros Téllez",
    witness2Curp: "CITL891212MDFXX02",
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
    grantorName: "C. Mauricio Soler Galindo",
    grantorCurpOrRfc: "SOGM840618HDFLLR05",
    grantorAddress: "Av. Patriotismo #220, San Pedro de los Pinos, Benito Juárez, CDMX",
    grantorPhone: "+52 55 3322 1100",
    attorneyName: "C. Armando Téllez Corona",
    attorneyCurpOrRfc: "TECA900315HDFMNR01",
    attorneyAddress: "Calle Río Tiber #65, Cuauhtémoc, CDMX",
    attorneyPhone: "+52 55 6677 8899",
    validityUntil: "30 días naturales a partir de su emisión",
    powersDescription: "Realizar todos los trámites vehiculares pertinentes ante la Secretaría de Movilidad (SEMOVI), Secretaría de Finanzas y Módulos de Control Vehicular correspondientes al vehículo marca Volkswagen Jetta, Modelo 2022, Color Blanco, Placas de Circulación 892-ABC, Número de Serie / VIN: 3VW2K7AJ8NM123456; incluyendo alta o baja de placas, cambio de propietario, reposición de tarjeta de circulación y verificación vehicular.",
    witness1Name: "C. Jorge Almonte Vega",
    witness1Curp: "AOVJ810505HDFXX03",
    witness2Name: "C. Brenda Romo Castro",
    witness2Curp: "ROCB870808MDFXX04",
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
    grantorName: "C. Lucía Paredes Santillán",
    grantorCurpOrRfc: "PASL730225MDFRRN02",
    grantorAddress: "Calle Colima #180, Roma Norte, Cuauhtémoc, CDMX",
    grantorPhone: "+52 55 7788 9900",
    attorneyName: "C. Samuel Rentería Morales",
    attorneyCurpOrRfc: "REMS880719HDFNRL07",
    attorneyAddress: "Calle Eugenia #910, Del Valle Centro, Benito Juárez, CDMX",
    attorneyPhone: "+52 55 1122 3344",
    validityUntil: "15 de Diciembre de 2026",
    powersDescription: "Gestionar y dar seguimiento a trámites de cambio de titularidad de servicios públicos y domiciliarios ante la Comisión Federal de Electricidad (CFE), Sistema de Aguas de la Ciudad de México (SACMEX), compañías de telecomunicaciones (telefonía e internet) y oficinas de catastro municipal respecto al predio ubicado en Calle Colima #180.",
    witness1Name: "C. Miguel Ángel Becerra",
    witness1Curp: "BEMM850404HDFXX05",
    witness2Name: "C. Diana Salgado Bravo",
    witness2Curp: "SABD900606MDFXX06",
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
    grantorName: "C. Manuel Arredondo Esquivel",
    grantorCurpOrRfc: "AAEM690510HDFRLS08",
    grantorAddress: "Av. Universidad #1200, Xoco, Benito Juárez, CDMX",
    grantorPhone: "+52 55 4455 6677",
    attorneyName: "C. Esteban Bravo Cárdenas",
    attorneyCurpOrRfc: "BACE920830HDFRRN04",
    attorneyAddress: "Calle Gabriel Mancera #315, Del Valle Norte, CDMX",
    attorneyPhone: "+52 55 8899 0011",
    validityUntil: "30 de Noviembre de 2026",
    powersDescription: "Cobrar y recibir en ventanilla o caja general la cantidad amparada por el cheque no negociable o comprobante de finiquito emitido por la persona moral o física correspondiente, firmando el recibo de caja de conformidad.",
    witness1Name: "C. Mario Vaca López",
    witness1Curp: "VALM830303HDFXX07",
    witness2Name: "C. Karla Montero Gil",
    witness2Curp: "MOGK910909MDFXX08",
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
