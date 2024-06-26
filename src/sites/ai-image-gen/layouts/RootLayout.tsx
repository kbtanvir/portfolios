import { FooterSection } from "../footer/footer";
import MainHeader from "../header";

interface LayoutProps {
  children: React.ReactNode;
}

export function AiImageGenLayout({ children }: LayoutProps) {
  return (
    <>
      <MainHeader />
      <>{children}</>
      <FooterSection />
    </>
  );
}
