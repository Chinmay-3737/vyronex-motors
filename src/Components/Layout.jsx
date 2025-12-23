export default function Layout({ children }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
