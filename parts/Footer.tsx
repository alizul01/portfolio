import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-center text-sm font-bold py-5">
      Powered by{" "}
      <Link
        className="underline decoration-orange-200"
        target="_blank"
        href="https://nextjs.org/"
      >
        Next.js
      </Link>
      ,{" "}
      <Link
        className="underline decoration-blue-200"
        target="_blank"
        href="https://tailwindcss.com/"
      >
        Tailwind CSS
      </Link>
      , and{" "}
      <Link
        className="underline decoration-red-200"
        target="_blank"
        href="https://vercel.com/"
      >
        Vercel.
      </Link>{" "}
      Domain by{" "}
      <Link
        className="underline decoration-green-200"
        target="_blank"
        href="https://www.niagahoster.co.id/"
      >
        {" "}
        NiagaHoster
      </Link>
    </div>
  );
}
