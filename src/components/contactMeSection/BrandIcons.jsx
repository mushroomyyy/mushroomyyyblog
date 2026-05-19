// Minimalist brand-aligned icons for contact section

export const EmailIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
    <path d="m2 6l10 7.5L22 6" />
  </svg>
);

export const PhoneIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 8c0-1 .5-3 2-4l2-1c1-.5 2 0 2.5 1l1.5 3c.5 1 .2 2-.5 2.5L9 11c.5 1 1.5 2.5 3 4s3 2.5 4 3l.5-1.5c.5-.7 1.5-1 2.5-.5l3 1.5c1 .5 1.5 1.5 1 2.5l-1 2c-1 1.5-3 2-4 2-2 0-5-1-9-5s-5-7-5-9z" />
  </svg>
);

export const LocationIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2C7 2 3 6 3 11c0 6 9 11 9 11s9-5 9-11c0-5-4-9-9-9z" />
    <circle cx="12" cy="11" r="2" fill="currentColor" />
  </svg>
);

export const LinkedInIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
    <path d="M7 10v8M7 7a1 1 0 100-2 1 1 0 000 2z" />
    <path d="M11 10v8s0-3 2.5-3c2 0 3.5 1 3.5 4v2" />
  </svg>
);

export const GitHubIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.61.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.88 1.52 2.32 1.08 2.88.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.92 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.82-2.34 4.66-4.57 4.91.36.31.68.92.68 1.85 0 1.34-.01 2.41-.01 2.74 0 .26.18.57.69.48C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z" />
  </svg>
);

export const InstagramIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17" cy="7" r="1" fill="currentColor" />
  </svg>
);
