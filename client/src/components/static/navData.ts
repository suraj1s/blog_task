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
    title: "Create Blogs",
    link: "/blogs/create",
  },
  {
    title: "Profile",
    link: "/profile",
  },
  {
    title: "Sign Out",
    link: "/auth/signout",
  },
];
