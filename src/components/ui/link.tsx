type Props = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};
export const Link = ({ href, children, external }: Props) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "nooppener noreferrer" : undefined}
      className="underline"
    >
      {children}
    </a>
  );
};
