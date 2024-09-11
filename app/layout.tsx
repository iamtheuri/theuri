import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

 const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Theuri",
    "url": "https://your-portfolio-url.com",
    "sameAs": [
      "https://x.com/iamtheuri_",
      "https://github.com/iamtheuri",
      "https://www.linkedin.com/in/iamtheuri",
    ],
    "jobTitle": "Web Developer, Web Designer",
    "skills": "HTML5, CSS, JavaScript, Laravel, React, Next.js, Linux, DBMS, SEO, Backend, Web Design, Web Apps"
  };

export const metadata: Metadata = {
  title: "Theuri | Web Developer",
  description: "Theuri is a web developer specializing in Laravel and React. View my projects and skills.",
  keywords: ["Theuri", "iamtheuri", "web developer", "web designer", "Laravel", "portfolio", "Next.js", "React", "backend", "SEO"],
  authors: [{ name: "Theuri" }],
  openGraph: {
    title: "Theuri | Web Developer",
    description: "Theuri is a web developer specializing in Laravel and React. View my projects and skills.",
    url: "https://theuri.vercel.app/",
    siteName: "Theuri's Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Theuri's Portfolio | Web Developer",
    description: "Theuri is a web developer specializing in Next.js and React. View my projects and skills.",
    creator: "@iamtheuri_",
    images: ["https://iamtheuri.netlify.app/anonymous.ico"],
  },
  verification: {
    google: "SHGcRcHadllt4P0if1I_XD_Fzay0gdq_Z_LYK7JgWuk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://iamtheuri.netlify.app/anonymous.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
