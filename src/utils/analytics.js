import ReactGA from "react-ga4";

export const initializeAnalytics = () => {
  ReactGA.initialize("G-HNNV3Q94ZZ", {
    gaOptions: {
      anonymize_ip: true,
      storage: "none",
    },
    gtagOptions: {
      anonymize_ip: true,
      storage: "none",
    },
  });
};
