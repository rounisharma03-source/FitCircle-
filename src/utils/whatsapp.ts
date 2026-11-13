export const WHATSAPP_NUMBER = '919784885291';
export const WHATSAPP_DISPLAY = '+91 97848 85291';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const GENERAL_WHATSAPP_MESSAGE = `Hi FitCircle! I would like to know more about your fitness and community activity programmes in Jaipur.

My Society/Area:
Programme of Interest:
Preferred Time:

Please share the details.`;

export function buildWhatsAppUrl(message: string = GENERAL_WHATSAPP_MESSAGE): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export function buildProgrammeWhatsAppUrl(programmeName: string): string {
  const message = `Hi FitCircle! I would like to know more about the ${programmeName} programme in Jaipur.

My Society/Area:
Programme of Interest: ${programmeName}
Preferred Time:

Please share the details.`;
  return buildWhatsAppUrl(message);
}

export function buildSocietyPartnerWhatsAppUrl(): string {
  const message = `Hi FitCircle! I represent a residential society / RWA in Jaipur and would like to explore partnering with FitCircle for community fitness programmes and an introductory demonstration.

Society Name & Locality:
Approximate Number of Flats/Homes:
Preferred Time Window:

Please share the next steps.`;
  return buildWhatsAppUrl(message);
}

export function buildScheduleWhatsAppUrl(): string {
  const message = `Hi FitCircle! Please share the proposed batch schedule and availability for my residential society in Jaipur.

My Society/Area:
Preferred Window (Morning 6–8 AM / Evening 5–8 PM):

Please share the details.`;
  return buildWhatsAppUrl(message);
}

export interface EnquiryFormValues {
  name: string;
  whatsappNumber: string;
  societyName: string;
  locality: string;
  programme: string;
  ageCategory: string;
  preferredTime: string;
  message: string;
  consent: boolean;
}

export function buildEnquiryFormWhatsAppUrl(values: EnquiryFormValues): string {
  const lines = [
    'Hi FitCircle! I am submitting an enquiry from your Jaipur pilot launch website.',
    '',
    `Name: ${values.name.trim()}`,
    `WhatsApp Number: ${values.whatsappNumber.trim()}`,
    `Society Name: ${values.societyName.trim()}`,
    `Jaipur Locality: ${values.locality.trim()}`,
    `Programme of Interest: ${values.programme}`,
    `Age Category: ${values.ageCategory}`,
    `Preferred Time: ${values.preferredTime}`,
  ];

  if (values.message.trim()) {
    lines.push(`Additional Note: ${values.message.trim()}`);
  }

  lines.push('', 'Please share the details and next steps.');

  return buildWhatsAppUrl(lines.join('\n'));
}
