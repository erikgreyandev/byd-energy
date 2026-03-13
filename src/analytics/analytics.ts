declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string;

if (!GA_MEASUREMENT_ID) {
  console.warn("GA4 Measurement ID is not set in .env");
} else {
  // Load GA4 script dynamically
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize GA4
  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: any[]) {
    window.dataLayer.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: window.location.pathname });

  // Event tracking: Notify Me button
  document.addEventListener("DOMContentLoaded", () => {
    const notifyBtn = document.querySelector<HTMLButtonElement>(".button");
    if (notifyBtn) {
      notifyBtn.addEventListener("click", () => {
        window.gtag("event", "subscribe_click", {
          event_category: "engagement",
          event_label: "Notify Me Button",
        });
        console.log("Notify Me button clicked - GA event sent");
      });
    }
  });
}

export {};