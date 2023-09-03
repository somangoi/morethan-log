import Link from "next/link"

const NavBar: React.FC = () => {
  const links = [
    { id: 1, name: "about", to: "/about" },
    {
      id: 2,
      name: "projects",
      to: "/projects",
    },
  ]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map((link) => (
          <li
            key={link.id}
            className="block ml-4 text-black text-gray-500 dark:text-white nav opacity-80 hover:opacity-100 transition"
          >
            <Link href={link.to}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar
