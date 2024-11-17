import "./globals.css";
import { PageProvider } from "./context/PageContext";
import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Wealth Lens",
  description: "Discover what your wallet can truly do",
};

export default function RootLayout({ children, data }) {
  return (
    <html lang="en">
      <body className="bg-gradient-1 w-screen overflow-hidden"
      >
        <PageProvider>
          <Nav />
          <Sidebar />
          <main className="flex-1">{children}</main>
        </PageProvider>
      </body>
    </html>
  );
}
