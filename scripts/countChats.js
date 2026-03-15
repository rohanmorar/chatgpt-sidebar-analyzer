/**
Usage:
1. Open CHATGPT and sign-in
2. In left panel, scroll down to first chat
3. Right-click and inspect elements (Ctrl+Shift+I)
4. Click on console tab
5. Paste code below and press ENTER
**/


function countChatGPTPrompts() {
  // Select conversation links in the sidebar
  const chats = document.querySelectorAll('nav a[href^="/c/"]');
  
  const count = chats.length;
  console.log(`Total prompts/conversations visible in sidebar: ${count}`);
  
  return count;
}

countChatGPTPrompts();

function daysFromDate(inputDate) {
  const target = new Date(inputDate);
  const today = new Date();

  // Remove time part to avoid partial-day issues
  today.setHours(0,0,0,0);
  target.setHours(0,0,0,0);

  const diffTime = today - target; // difference in milliseconds
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

// Example
const ROUNDED_FIX = 2;
const CHATS_PER_DAY = countChatGPTPrompts() / daysFromDate("03/23/2023");
console.log(`You've generated ${CHATS_PER_DAY.toFixed(ROUNDED_FIX)} chats per day.`)



