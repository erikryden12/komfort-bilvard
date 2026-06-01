"use server";

export type ContactState = {
  success: boolean;
  error: string | null;
} | null;

export async function submitContact(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  if (!name || !phone) {
    return { success: false, error: "Fyll i namn och telefonnummer." };
  }

  // TODO: Resend-integration
  // import { Resend } from 'resend'
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({
  //   from: 'noreply@komfort-bilvard.se',
  //   to: 'Komfort802@gmail.com',
  //   subject: `Ny förfrågan från ${name}`,
  //   text: `Namn: ${name}\nTelefon: ${phone}\nTjänst: ${service}\nMeddelande: ${message}`,
  // })

  console.log("Ny förfrågan:", { name, phone, service, message });

  return { success: true, error: null };
}
