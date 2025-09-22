import React from 'react';

interface IconProps {
  className?: string;
}

export const LeafIcon: React.FC<IconProps> = ({ className }) => (
  <i className={`fa-solid fa-leaf ${className}`} />
);

export const RecycleIcon: React.FC<IconProps> = ({ className }) => (
  <i className={`fa-solid fa-recycle ${className}`} />
);

export const PlantIcon: React.FC<IconProps> = ({ className }) => (
  <i className={`fa-solid fa-seedling ${className}`} />
);

export const BasketIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-solid fa-basket-shopping ${className}`} />
);

export const HeartIcon: React.FC<IconProps> = ({ className }) => (
  <i className={`fa-solid fa-heart ${className}`} />
);

export const CommunityIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-solid fa-users ${className}`} />
);

export const InstagramIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-brands fa-instagram ${className}`} />
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-solid fa-chevron-left ${className}`} />
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-solid fa-chevron-right ${className}`} />
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className }) => (
  <i className={`fa-solid fa-chevron-down ${className}`} />
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-brands fa-whatsapp ${className}`} />
);

export const FacebookIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-brands fa-facebook ${className}`} />
);

export const TwitterIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fa-brands fa-x-twitter ${className}`} />
);