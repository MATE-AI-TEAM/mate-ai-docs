export default {
  logo: <span className="font-medium">📚 MATE.AI Docs</span>,
  // docsRepositoryBase: 'https://github.com/MATE-AI-TEAM/MATE-AI-TEAM',
  feedback: {
    useLink: () => {
      return `mailto:feedback@aimate.me?subject=Feedback for “xxx”`
    }
  },
  editLink: {
    component: null
  },
  head: (
    <>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="32x32"/>
      <link rel="icon" href="/favicon.ico"/>
      <meta property="og:title" content="MATE.AI Docs"/>
      <meta
        property="og:description"
        content="Learn how to create engaging characters at MATE.AI"
      />
    </>
  ),
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank">
          MATE.AI
        </a>
        .
      </span>
    ),
  },
};
