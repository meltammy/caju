import { NavItems } from "./styles";

const itemsProps = [
  { href: "https://github.com/meltammy/caju", children: "GitHub" },
  { href: "https://www.linkedin.com/in/meltammy/", children: "Linkedin" },
];

export function NavLinks() {
  return (
    <>
      {itemsProps.map((props) => (
        <NavItems {...props} target="_blank" rel="noopener noreferrer" />
      ))}
    </>
  );
}
