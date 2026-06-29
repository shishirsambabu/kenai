import type { Metadata } from "next";
import AdminDashboard from "./AdminDashboard";

export const metadata: Metadata = {
  title: "Enquiry Manager",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <main style={{ position: "relative", zIndex: 2, minHeight: "100vh" }}>
      <AdminDashboard />
    </main>
  );
}
