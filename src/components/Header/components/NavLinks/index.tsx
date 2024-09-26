import { NavItems } from "./styles";

const itemsProps = [
  { href: "https://github.com/meltammy/caju", children: "GitHub" },
  { href: "https://www.linkedin.com/in/meltammy/", children: "Linkedin" },
];

export function NavLinks() {
  return (
    <>
      {itemsProps.map((props, index) => (
        <NavItems
          {...props}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
        />
      ))}
    </>
  );
}
