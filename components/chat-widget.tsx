"use client";

import { useEffect } from "react";

export function ChatWidget() {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

      createChat({
        webhookUrl: 'http://chatbot-penerimaan.polri.go.id/webhook/950b0a85-bd2b-4ba4-91b6-0a4d5b5a5e2d/chat',
        webhookConfig: {
          method: 'POST',
          headers: {}
        },
        target: '#n8n-chat',
        mode: 'window',
        chatInputKey: 'chatInput',
        chatSessionKey: 'sessionId',
        loadPreviousSession: true,
        metadata: {},
        showWelcomeScreen: true,
        defaultLanguage: 'en',
        initialMessages: [
          'Hi Sobat Lemdiklat! 👋',
          'Ada yang bisa kami bantu?'
        ],
        i18n: {
          en: {
            title: 'Hi Sobat Lemdiklat! 👋',
            subtitle: "Kami siap membantu Anda.",
            footer: 'Made by Lemdiklat',
            getStarted: 'Mulai Percakapan',
            inputPlaceholder: 'Ketik pertanyaan Anda..',
          },
        },
        enableStreaming: false,
      });
    `;

    // Append to body to ensure it executes after the component renders
    document.body.appendChild(script);

    // Clean up on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css"
        rel="stylesheet"
      />
      <style>{`
        .n8n-chat-widget .chat-footer a {
          display: none !important;
        }
        .n8n-chat-widget .chat-footer::after {
          content: 'Made by Lemdiklat';
          display: block;
          font-size: 11px;
          color: #999;
          padding: 8px;
          text-align: center;
          width: 100%;
        }
      `}</style>
      <div id="n8n-chat"></div>
    </>
  );
}
