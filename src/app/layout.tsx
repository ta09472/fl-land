import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { cookies } from "next/dist/client/components/headers";

const inter = Inter({ subsets: ["latin"] });
const theme = cookies().get("theme");

export const metadata: Metadata = {
  title: "Festival land",
  description: "",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" className={theme?.value}>
      <AntdRegistry>
        <body className={inter.className}>
          {modal}
          {children}
        </body>
      </AntdRegistry>
    </html>
  );
}
