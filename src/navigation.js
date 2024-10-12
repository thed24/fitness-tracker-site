import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Privacy',
      href: getPermalink('privacy', 'page'),
    },
    {
      text: 'Support',
      href: getPermalink('support', 'page'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Discord',
      href: 'https://discord.gg/Rpw8Aza2Kj',
    }
  ],
  actions: [],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/Rpw8Aza2Kj' },
  ],
  footNote: `
    Crafted with ❤️ by DJ Applications
  `,
};
