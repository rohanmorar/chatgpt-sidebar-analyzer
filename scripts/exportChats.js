async function exportChatGPTSidebarConversations() {

  const wait = (ms) => new Promise(r => setTimeout(r, ms));

  const sidebar = document.querySelector('nav');

  let previousHeight = 0;

  while (true) {
    sidebar.scrollTo(0, sidebar.scrollHeight);
    await wait(1200);

    if (sidebar.scrollHeight === previousHeight) break;
    previousHeight = sidebar.scrollHeight;
  }

  const links = Array.from(
    document.querySelectorAll('nav a[href^="/c/"]')
  );

  const conversations = links.map(link => ({
    title: link.textContent.trim(),
    url: link.href,
    id: link.href.split("/c/")[1]
  }));

  console.log(`Total conversations: ${conversations.length}`);
  console.table(conversations);

  return conversations;
}
