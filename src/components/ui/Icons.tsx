import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

const s = ({ className = "", size = 24 }: IconProps): React.SVGProps<SVGSVGElement> & { children?: React.ReactNode } => ({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className,
});

export const ServerIcon = (p: IconProps) => (
  <svg {...s(p)}><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
);

export const NetworkIcon = (p: IconProps) => (
  <svg {...s(p)}><rect x="9" y="2" width="6" height="6"/><rect x="2" y="16" width="6" height="6"/><rect x="16" y="16" width="6" height="6"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="5" y1="16" x2="12" y2="16"/><line x1="12" y1="16" x2="19" y2="16"/></svg>
);

export const ShieldCheckIcon = (p: IconProps) => (
  <svg {...s(p)}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);

export const CloudIcon = (p: IconProps) => (
  <svg {...s(p)}><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
);

export const MonitorIcon = (p: IconProps) => (
  <svg {...s(p)}><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
);

export const CableIcon = (p: IconProps) => (
  <svg {...s(p)}><path d="M4 12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6z"/><path d="M6 10V6a6 6 0 0 1 12 0v4"/><path d="M8 2v4"/><path d="M16 2v4"/></svg>
);

export const CameraIcon = (p: IconProps) => (
  <svg {...s(p)}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...s(p)}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.129.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.571 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...s(p)}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

export const MapPinIcon = (p: IconProps) => (
  <svg {...s(p)}><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

export const ClockIcon = (p: IconProps) => (
  <svg {...s(p)}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...s(p)}><polyline points="20 6 9 17 4 12"/></svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...s(p)}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...s(p)}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...s(p)}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

export const SearchIcon = (p: IconProps) => (
  <svg {...s(p)}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

export const LinkedinIcon = (p: IconProps) => (
  <svg {...s(p)}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);

export const TwitterIcon = (p: IconProps) => (
  <svg {...s(p)}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export const FacebookIcon = (p: IconProps) => (
  <svg {...s(p)}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

export const ChevronRightIcon = (p: IconProps) => (
  <svg {...s(p)}><path d="m9 18 6-6-6-6"/></svg>
);

export const QuoteIcon = (p: IconProps) => (
  <svg {...s(p)} width={p.size || 40} height={p.size || 40} viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4"/><path d="M19 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4"/></svg>
);

export const GlobeIcon = (p: IconProps) => (
  <svg {...s(p)}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
);

export const ZapIcon = (p: IconProps) => (
  <svg {...s(p)}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

export const UsersIcon = (p: IconProps) => (
  <svg {...s(p)}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

export const AwardIcon = (p: IconProps) => (
  <svg {...s(p)}><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
);

export const BuildingIcon = (p: IconProps) => (
  <svg {...s(p)}><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
);

export const SendIcon = (p: IconProps) => (
  <svg {...s(p)}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
);
