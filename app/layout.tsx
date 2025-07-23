import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { IconBrandTelegram } from "@tabler/icons-react";
import { inter } from "web/app/fonts";
import { cn } from "@repo/ui/src/utils";

import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://aimate.me"),
  title: {
    template: "%s - MATE.AI Docs",
  },
  description:
    "MATE.AI, experience interactive chat, games and role-playing with NSFW AI - the possibilities are pretty endless.",
  applicationName: "MATE.AI",
  generator: "Nextra",
  appleWebApp: {
    title: "MATE.AI",
  },
  // other: {
  //   "msapplication-TileImage": "/ms-icon-144x144.png",
  //   "msapplication-TileColor": "#fff",
  // },
  twitter: {
    site: "https://aimate.me",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const banner = <Banner storageKey="docs_banner">Nextra 2 Alpha</Banner>;
  const banner = null;

  const navbar = (
    <Navbar
      logo={
        <div className="x:flex x:items-center x:gap-2">
          <span
            className="x:flex x:items-center x:text-2xl"
            style={{ fontWeight: 900 }}
          >
            <span
              style={{
                color: "transparent",
                backgroundClip: "text",
                backgroundImage: "linear-gradient(to right, #06b6d4, #3b82f6)",
              }}
              className="x:inline x:bg-gradient-to-r x:bg-clip-text x:text-transparent x:from-cyan-500 x:to-blue-500"
            >
              MATE.AI
            </span>
          </span>
          <span className="x:opacity-60">Docs</span>
        </div>
      }
      chatIcon={<IconBrandTelegram size={20} />}
      chatLink="https://t.me/+YcnIm-oCnKMyYzZk"
    />
  );

  const footer = (
    <Footer>
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://aimate.me" target="_blank">
          MATE.AI
        </a>
      </span>
    </Footer>
  );

  const pageMap = await getPageMap();

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="32x32"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={cn(inter.className)}>
        <Layout
          banner={banner}
          navbar={navbar}
          footer={footer}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/MATE-AI-TEAM/mate-ai-docs"
          // sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
          sidebar={{
            autoCollapse: true,
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
