export default function AboutLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>  
          <nav>About NavBar</nav>
          <main>
              {children}
          </main>
        </>
    );
}