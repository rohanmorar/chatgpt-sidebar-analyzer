# ChatGPT Sidebar Analyzer

Small JavaScript utilities to analyze ChatGPT conversations directly from the browser console.

## Script 1 – Basic Counter

Counts conversations currently visible in the sidebar.

Limitation:
ChatGPT loads conversations lazily, so this only counts visible ones.

## Script 2 – Full Conversation Export

Automatically scrolls the sidebar to load all conversations.

Features
- loads full sidebar
- extracts conversation titles
- returns conversation IDs
- can export CSV
