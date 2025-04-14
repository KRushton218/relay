export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full bg-brand-bg text-brand-text">
      {children}
    </div>
  );
}