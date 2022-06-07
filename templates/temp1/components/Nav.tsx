import { CgMenu } from 'react-icons/cg'
import { FiShoppingCart } from 'react-icons/fi'
import type { Props } from '../pages/index'
import { Menu } from '@headlessui/react'
import Link from 'next/link'

const urls = [
 {
  name: 'Shop',
  url: '/',
 },
 {
  name: 'About',
  url: '/about',
 },
 {
  name: 'Contact',
  url: '/contact',
 },
]

export default function Nav({ data }: { data: Props }) {
 return (
  <header className='flex items-center'>
   <Menu>
    <Menu.Button className='relative'>
     <CgMenu />
    </Menu.Button>
    <Menu.Items className='absolute top-0 mt-14 bg-slate-50 grid grid-cols-1 p-5 rounded-md gap-5'>
     {urls.map(({ name, url }) => (
      <Menu.Item key={name}>
       <Link href={url} className='text-gray-900'>
        {name}
       </Link>
      </Menu.Item>
     ))}
    </Menu.Items>
   </Menu>
   <div className='grow text-center text-3xl font-bold'>{data.title}</div>
   <FiShoppingCart className='text-xl cursor-pointer' />
  </header>
 )
}
