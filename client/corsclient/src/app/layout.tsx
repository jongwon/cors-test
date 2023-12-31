import "./globals.css";
import "antd/dist/reset.css"; // Ant Design 스타일
import NextAuthProvider from "@/components/NextAuthProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
