import { FC, SVGProps } from 'react';

export type MenuItem = Readonly<{
    label: string;
    path: string;
    icon?: FC<SVGProps<SVGSVGElement>>;
}>;

export type Menu = MenuItem[];
