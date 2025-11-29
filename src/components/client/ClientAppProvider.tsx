import { Footer } from "../common/footer/Footer";
import { Navigation } from "../common/navigation/navigation";
import { ThemeProvider } from "next-themes";



export default function ClientAppProvider({ children }: { children: React.ReactNode }) {

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navigation />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
