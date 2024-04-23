interface InavLinks {
  title: string;
  link: string;
  icon?: React.ReactNode;
}

export const navLinkData: InavLinks[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "My Blogs",
    link: "/my-blogs",
  },
  {
    title: "Profile",
    link: "/profile",
  },
];
