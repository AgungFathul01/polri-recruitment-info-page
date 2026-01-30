"use client";

import Script from "next/script";

export function ChatWidget() {
  return (
    <>
      <Script id="chat-widget-config" strategy="afterInteractive">
        {`
          window.ChatWidgetConfig = {
            webhook: {
              url: 'https://n8n.srv1298842.hstgr.cloud/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat',
              route: 'general'
            },
            branding: {
              logo: 'https://penerimaan.polri.go.id/assets/front_theme/logo_polri.png',
              name: 'AgentPolri',
              welcomeText: 'Hi, Ada yang bisa kami bantu?',
              responseTimeText: 'Kami biasanya merespons secepatnya'
            },
            style: {
              primaryColor: 'black',
              secondaryColor: 'black',
              position: 'right',
              backgroundColor: '#ffffff',
              fontColor: '#333333',
              chatWindowWidth: '360px',
              chatWindowHeight: '480px'
            }
          };
        `}
      </Script>
      <Script
        src="https://cdn.jsdelivr.net/gh/AgungFathul01/widgetagentpolri@main/chat-widgetagentpolri.js"
        strategy="afterInteractive"
      />
      <style jsx global>{`
        /* Desktop styles */
        .n8n-chat-widget .chat-window,
        .n8n-chat-widget .chat-container,
        .n8n-chat-widget [class*="chat-window"],
        .n8n-chat-widget [class*="chatWindow"],
        .chat-widget-container,
        [class*="ChatWidget"],
        [class*="chat-widget"] {
          max-width: 360px !important;
          max-height: 500px !important;
          width: 360px !important;
          height: 500px !important;
        }
        
        /* Mobile styles */
        @media (max-width: 640px) {
          .n8n-chat-widget .chat-window,
          .n8n-chat-widget .chat-container,
          .n8n-chat-widget [class*="chat-window"],
          .n8n-chat-widget [class*="chatWindow"],
          .chat-widget-container,
          [class*="ChatWidget"],
          [class*="chat-widget"] {
            max-width: calc(100vw - 32px) !important;
            max-height: 70vh !important;
            width: calc(100vw - 32px) !important;
            height: 70vh !important;
            right: 16px !important;
            left: 16px !important;
            bottom: 80px !important;
            border-radius: 16px !important;
          }
          
          .n8n-chat-widget,
          [class*="n8n-chat"] {
            z-index: 9999 !important;
          }
          
          .n8n-chat-widget button[class*="trigger"],
          .n8n-chat-widget [class*="launcher"],
          .n8n-chat-widget [class*="toggle"] {
            right: 16px !important;
            bottom: 16px !important;
            width: 56px !important;
            height: 56px !important;
          }
        }
      `}</style>
    </>
  );
}
