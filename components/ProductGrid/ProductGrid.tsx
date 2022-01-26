interface ProductGrid {
  children: React.ReactNode;
}

export default function ProductGrid({ children }: ProductGrid) {
  return <ul className="flex flex-wrap gap-4">{children}</ul>;
}
