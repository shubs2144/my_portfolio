// app/api/book-meeting/route.js (updated email templates)
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { companyName, date, time, email, meetingLink, recipientEmail } =
    await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Email to you (Shubham - candidate)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: `Interview Scheduled with ${companyName}`,
      html: `
        <h2>New Interview Scheduled</h2>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Recruiter Email:</strong> ${email}</p>
        ${
          meetingLink
            ? `
          <p><strong>Meeting Link Provided:</strong> <a href="${meetingLink}">${meetingLink}</a></p>
        `
            : `
          <p style="color: #d97706;"><strong>Note:</strong> No meeting link was provided by the recruiter. They will send you one shortly.</p>
        `
        }
      `,
    });

    // Email to the recruiter
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Interview Scheduled with Shubham Patil`,
      html: `
        <h2>Interview Successfully Scheduled</h2>
        <p>You have scheduled an interview with Shubham Patil.</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        ${
          meetingLink
            ? `
          <p>You provided the following meeting link:</p>
          <p><a href="${meetingLink}">${meetingLink}</a></p>
          <p>Thank you for your time.</p>
        `
            : `
          <div style="background-color: #fef3c7; padding: 1rem; border-radius: 0.375rem; margin: 1rem 0;">
            <h3 style="color: #d97706; margin-top: 0;">Meeting Link Required</h3>
            <p>You haven't provided a meeting link for this interview.</p>
            <p>Please send the meeting details to <strong>shubspatil17@gmail.com</strong> at your convenience.</p>
            <p>Thank you for your time.</p>
          </div>
        `
        }
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
