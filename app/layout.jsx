import CustomCursor from "@/components/custom/CustomCursor";
import "./globals.css";

export const metadata = {
  title: "Attitude Rock",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="cursor-none">
        <link href="https://fonts.cdnfonts.com/css/superion" rel="stylesheet" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
