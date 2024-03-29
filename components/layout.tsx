import Meta from "./meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen font-lato">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
