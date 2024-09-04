import type { Menu } from '@/types/menus.d';
import GithubIcon from '@/components/icons/GithubIcon';

export const mainMenu: Menu = [
    { label: 'Home', path: '/' },
    { label: 'About Me', path: '/about' },
    { label: 'Blog', path: '/blog' },
];

export const socialMenu: Menu = [
    {
        label: "Go to Templates's GitHub repo",
        path: "https://github.com/borjalofe/astro-blog-template",
        icon: GithubIcon,
    },
];
