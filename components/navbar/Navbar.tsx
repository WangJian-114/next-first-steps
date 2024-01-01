
// const temporalAsync = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true)
//     }, 2000);
//   });
// }

import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' }
]

export const Navbar = async () => {

  // await temporalAsync(); toda las paginas espera 2seg y recien cargar

  // Se ve en la terminal porque es un server component
  console.log('NavBar creado');
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        <Link href={'/'} className="flex items-center">
          <HomeIcon className="mr-2"/>
          <span>Home</span>
        </Link>
       

        <div className="flex flex-1"></div>
        
        {navItems.map(navItems => (
          <ActiveLink key={navItems.path} {...navItems} />
        ))}
    </nav>
  )
}
