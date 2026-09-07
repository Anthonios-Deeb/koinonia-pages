(() => {
  const installLink = document.querySelector('[data-install-app]');

  if (!installLink) return;

  // Prefer User-Agent Client Hints where available. Safari does not expose
  // them, so the narrow legacy checks below cover iPhone, iPad, and iPadOS.
  const platform = (
    navigator.userAgentData?.platform ||
    navigator.platform ||
    ''
  ).toLowerCase();
  const userAgent = (navigator.userAgent || '').toLowerCase();
  const isIPadOS = platform === 'macintel' && navigator.maxTouchPoints > 1;
  const isAppleMobile =
    platform === 'ios' ||
    isIPadOS ||
    /iphone|ipad|ipod/.test(`${platform} ${userAgent}`);
  const isAndroid = /android/.test(`${platform} ${userAgent}`);

  if (isAppleMobile) {
    installLink.href = installLink.dataset.appStoreUrl;
  } else if (isAndroid) {
    installLink.href = installLink.dataset.playStoreUrl;
  }
})();
