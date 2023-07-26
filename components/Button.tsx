export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="
      bg-blue-600 rounded font-bold m-3 w-24 h-8
      hover:bg-blue-700
      active:bg-blue-800"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
