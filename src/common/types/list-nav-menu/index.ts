export type TListNavMenuProps = {
  id: number;
  subheader: string;
  title: string;
  icon: React.ReactNode;
  link: string | null;
  divider: React.ReactNode;
  subItem: {
    id: number;
    subtitle: string;
    link: string;
  }[];
};
