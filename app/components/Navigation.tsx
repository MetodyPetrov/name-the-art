import NavLink from "./NavLink";

export interface LinkInfo {
  title: string,
  to: string,
  color: string,
  hover: string
}

export const navigation = [ 
    { title: 'PLAY', to: "/play", color: 'bg-red-500', hover: 'hover:bg-red-600' },
    { title: 'LEADERBOARD', to: "/leaderboard", color: 'bg-yellow-400', hover: 'hover:bg-yellow-500' },
    { title: 'HOME', to: "/home", color: 'bg-gray-50', hover: 'hover:bg-gray-200' },
    { title: 'INSTRUCTIONS', to: "/rules", color: 'bg-slate-400', hover: 'hover:bg-slate-500' },
    { title: 'LOGIN', to: "/login", color: 'bg-blue-400', hover: 'hover:bg-blue-500' }
];

export default function Navigation() {
  return (
      <menu className="w-full flex justify-between">
      { navigation.map((link: LinkInfo, i) => <NavLink link={link} key={i} index={i}>{link.title}</NavLink>) }
      </menu>
  )
}