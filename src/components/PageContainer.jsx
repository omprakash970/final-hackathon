export default function PageContainer({ children }) {
  return (
    <div className="container" style={{ padding: '32px 16px' }}>
      {children}
    </div>
  );
}
