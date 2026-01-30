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
      <Script
        src="https://cdn.jsdelivr.net/gh/AgungFathul01/widgetagentpolri@main/chat-widgetagentpolri.js"
        strategy="afterInteractive"
      />
    </>
  );
}
