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
              primaryColor: '#854fff',
              secondaryColor: '#6b3fd4',
              position: 'right',
              backgroundColor: '#ffffff',
              fontColor: '#333333'
            }
          };
        `}
      </Script>
      <style jsx global>{`
        .n8n-chat-widget .chat-toggle {
          z-index: 49 !important;
        }
        
        @media (max-width: 768px) {
          .n8n-chat-widget .chat-container {
            width: 100% !important;
            height: 100% !important;
            bottom: 0 !important;
            right: 0 !important;
            left: 0 !important;
            top: 0 !important;
            border-radius: 0 !important;
            max-width: none !important;
            max-height: none !important;
            position: fixed !important;
          }
          
          .n8n-chat-widget .chat-container .chat-interface {
             height: 100% !important;
             display: none;
             flex-direction: column !important;
          }
          
          .n8n-chat-widget .chat-container .chat-interface.active {
             display: flex !important;
          }

          .n8n-chat-widget .chat-messages {
            flex: 1 !important;
            height: auto !important;
          }
        }
      `}</style>
      <Script
        src="https://cdn.jsdelivr.net/gh/AgungFathul01/widgetagentpolri@main/chat-widgetagentpolri.js"
        strategy="afterInteractive"
      />
    </>
  );
}
