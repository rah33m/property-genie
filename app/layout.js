import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Genie",
  description: "Created by Raheem Khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
