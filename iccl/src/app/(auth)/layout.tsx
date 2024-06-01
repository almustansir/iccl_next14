import Footer from "../components/Footer";

export default function AuthLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <div>
      <nav>Navar login</nav>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
