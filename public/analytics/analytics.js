(function () {
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!GA_MEASUREMENT_ID) {
    console.warn("GA4 Measurement ID is not set in .env");
    return;
  }

  // Load GA4 script
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize GA4
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, { page_path: window.location.pathname });

  // Event tracking example: Notify Me button
  document.addEventListener("DOMContentLoaded", function () {
    const notifyBtn = document.querySelector('.button');
    if (notifyBtn) {
      notifyBtn.addEventListener('click', function () {
        gtag('event', 'subscribe_click', {
          event_category: 'engagement',
          event_label: 'Notify Me Button',
        });
        console.log('Notify Me button clicked - GA event sent');
      });
    }
  });
})();