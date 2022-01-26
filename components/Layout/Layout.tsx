import Menu from "../Menu/Menu";

interface Layout {
  children: React.ReactNode;
}

export default function Layout({ children }: Layout): JSX.Element {
  return (
    <div>
      <Menu />
      <main>{children}</main>
    </div>
  );
}
