import { NextResponse } from "next/server";
import { Resend } from "resend";

import { EmailTemplate } from "../../app/emalis/welcome";

const resend: any = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName, email, number } = await request.json();

  try {
    await resend.sendEmail({
      from: process.env.MAIL,
      to: email,
      subject: "Thanks for submitting your order!",
      react: EmailTemplate({
        firstName,
        email,
        number,
      }),
    });
    return NextResponse.json(
      {
        status: "Ok",
      },
      {
        status: 200,
      }
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json(
      {
        error: "Internal server error.",
      },
      {
        status: 500,
      }
    );
  }
}

// import { EmailTemplate } from "../../app/components/email-template";
// import { Resend } from "resend";
// import * as React from "react";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: process.env.MAIL || "",
//       to: ["delivered@resend.dev"],
//       subject: "Hello world",
//       react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
//     });

//     if (error) {
//       return Response.json({ error });
//     }

//     return Response.json({ data });
//   } catch (error) {
//     return Response.json({ error });
//   }
// }
