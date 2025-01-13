import { Navbar } from '@nextui-org/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}
