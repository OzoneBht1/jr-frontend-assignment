interface IBadgeProps {
  height: number;
  width: number;
  color: string;
  bgColor: string;
  children: React.ReactNode;
}

export default function Badge({
  children,
  height,
  color,
  bgColor,
  width,
}: IBadgeProps) {
  return (
    <div
      className={`px-3 py-2 font-medium text-lg rounded-full h-${height} w-${width} text-${color} bg-${bgColor}`}
    >
      {children}
    </div>
  );
}
