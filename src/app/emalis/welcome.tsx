"use client";
import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  number: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  number,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <h1>Welcome, {email}!</h1>
    <h1>Welcome, {number}!</h1>
  </div>
);
