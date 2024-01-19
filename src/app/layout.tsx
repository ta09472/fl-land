import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
// import { cookies } from "next/dist/client/components/headers";

const inter = Inter({ subsets: ["latin"] });
// const theme = cookies().get("theme");

export const metadata: Metadata = {
  title: "Festival land",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <AntdRegistry>
        <body className={inter.className}>{children}</body>
      </AntdRegistry>
    </html>
  );
}
