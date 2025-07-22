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
      <meta property="og:title" content="MATE.AI Docs - NSFW AI Chat"/>
      <meta
        property="og:description"
        content="MATE.AI, experience interactive chat, games and role-playing with NSFW AI - the possibilities are pretty endless."
      />
    </>
  ),
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://aimate.me" target="_blank">
          MATE.AI
        </a>
        .
      </span>
    ),
  },
};
