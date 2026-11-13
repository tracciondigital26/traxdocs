export type DocTab = 'cotizacion' | 'remision' | 'contrato' | 'cartapoder';

export interface Clause {
  id: string;
  title: string;
  content: string;
  isEnabled: boolean;
  isCustom?: boolean;
}

export interface Declaration {
  id: string;
  title: string;
  content: string;
  isEnabled: boolean;
}

export interface QuotationItem {
  id: string;
  quantity: number;
  unit: string;
  description: string;
  unitPrice: number;
}

export interface QuotationData {
  folio: string;
  date: string;
  validUntil: string;
  currency: string;
  issuerName: string;
  issuerRfc: string;
  issuerEmail: string;
  issuerPhone: string;
  issuerAddress: string;
  bankName: string;
  bankClabe: string;
  bankBeneficiary: string;
  clientName: string;
  clientRfc: string;
  clientEmail: string;
  clientPhone: string;
  clientAddress: string;
  items: QuotationItem[];
  taxRate: number; // e.g. 16 for 16% IVA
  discount: number;
  notes: string;
  clauses: Clause[];
}

export interface DeliveryItem {
  id: string;
  quantity: number;
  unit: string;
  code: string;
  description: string;
  condition: string;
}

export interface DeliveryData {
  folio: string;
  date: string;
  orderNumber: string;
  issuerName: string;
  issuerRfc: string;
  issuerPhone: string;
  issuerAddress: string;
  clientName: string;
  clientRfc: string;
  clientAddress: string;
  clientContact: string;
  receiverName: string;
  receiverPhone: string;
  carrierName: string;
  driverName: string;
  carrierPlates: string;
  items: DeliveryItem[];
  deliveryNotes: string;
  clauses: Clause[];
}

export type ContractType = 'servicios' | 'arrendamiento' | 'nda' | 'compraventa';

export interface ContractData {
  contractType: ContractType;
  title: string;
  cityAndDate: string;
  // Parte A (Prestador / Arrendador / Divulgante / Vendedor)
  partyARole: string;
  partyAName: string;
  partyARfc: string;
  partyAAddress: string;
  partyARepresentative: string;
  // Parte B (Cliente / Arrendatario / Receptor / Comprador)
  partyBRole: string;
  partyBName: string;
  partyBRfc: string;
  partyBAddress: string;
  partyBRepresentative: string;
  // Declaraciones legales previas
  declarations: Declaration[];
  // Términos económicos o de vigencia
  amount: number;
  currency: string;
  paymentTerms: string;
  duration: string;
  // Cláusulas modulares
  clauses: Clause[];
  // Testigos
  witness1Name: string;
  witness1Id: string;
  witness2Name: string;
  witness2Id: string;
}

export type PowerSubtype = 'general' | 'vehicular' | 'tramites' | 'cobro';

export interface PowerOfAttorneyData {
  subtype: PowerSubtype;
  cityAndDate: string;
  validityUntil: string;
  authorityTarget: string;
  legalBasis: string;
  grantorName: string;
  grantorCurpOrRfc: string;
  grantorId: string;
  grantorAddress: string;
  grantorPhone: string;
  attorneyName: string;
  attorneyCurpOrRfc: string;
  attorneyId: string;
  attorneyAddress: string;
  attorneyPhone: string;
  powersDescription: string;
  clauses: Clause[];
  witness1Name: string;
  witness1Id: string;
  witness2Name: string;
  witness2Id: string;
}
