import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMessage = async (formData: any) => {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["raumild@gmail.com"],
      subject: `Message from ${formData.firstname} ${formData.lastname}`,
      text: `
      Full Name: ${formData.firstname} ${formData.lastname}
      Email: ${formData.email}
      Message: ${formData.message}`,
    });
  } catch (error) {}
};
