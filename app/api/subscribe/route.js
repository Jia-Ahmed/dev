import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email } = await req.json();

    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return Response.json({ error: 'Invalid email' }, { status: 400 });
    }

    // 1. DevXoft ko notification email
    await resend.emails.send({
      from: 'DevXoft <onboarding@resend.dev>',
      to: ['jaweria042ahmed@gmail.com'],
      subject: '📬 New Newsletter Subscriber!',
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto;">
          <h2 style="color: #14b8a6;">New Newsletter Subscriber</h2>
          <p>Someone just subscribed to your newsletter!</p>
          <p>
            <strong>Email:</strong>
            <a href="mailto:${email}" style="color: #14b8a6;">${email}</a>
          </p>
          <hr style="border-color: #e2e8f0; margin: 20px 0;" />
          <p style="color: #94a3b8; font-size: 12px;">DevXoft — Newsletter System</p>
        </div>
      `,
    });
    

    // 2. Subscriber ko confirmation email
    await resend.emails.send({
      from: 'DevXoft <onboarding@resend.dev>',
      to: [email],
      subject: '✅ You are subscribed to DevXoft!',
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto;">
          <h2 style="color: #14b8a6;">Welcome to DevXoft! 🎉</h2>
          <p>Thank you for subscribing to our newsletter.</p>
          <p>You will receive the latest updates, insights, and news about our services directly in your inbox.</p>
          <hr style="border-color: #e2e8f0; margin: 20px 0;" />
          <p style="color: #94a3b8; font-size: 12px;">
            If you did not subscribe, you can safely ignore this email.<br/>
            © ${new Date().getFullYear()} DevXoft. All rights reserved.
          </p>
        </div>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}