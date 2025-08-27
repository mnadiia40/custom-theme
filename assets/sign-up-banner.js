window.addEventListener('DOMContentLoaded', () => {
  const signUpBanner = document.querySelector('.sign-up-banner');
  const closeButton = document.querySelector('.sign-up-banner__close');

  closeButton.addEventListener('click', () => {
    signUpBanner.classList.remove('sign-up-banner--visible');

    // expired after 1 day
    const expired = Date.now() + 24 * 60 * 60 * 1000;;
    localStorage.setItem('signUpBannerClosed', expired);
  });

  const closedUntil = localStorage.getItem('signUpBannerClosed');

  if (!closedUntil || Date.now() > closedUntil) {
    signUpBanner.classList.add('sign-up-banner--visible');
  }
});