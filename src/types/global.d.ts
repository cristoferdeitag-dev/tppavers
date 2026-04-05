/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    dataLayer: any[];
    gtag: Function;
    google?: any;
    initMap?: () => void;
  }
}
export {};
