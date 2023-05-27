import "./globals.css";

export const metadata = {
  title: "Vape Pi",
  description:
    "Discover a world of flavor and elevate your vaping experience at our premium vape store.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
