import React from 'react'
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import Menu from '../app/ui/dashboard/menuLink/menuLink';
import Image from 'next/image';

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Feed = () => {
  return (
    <div className='container rounded-[5px]'>

      <div className='menu'>
        <div className='user'>
       <Image src="/assets/images/avatar.png" className='bg-gray-400 rounded' alt="user" width="50" height="50" />
       <div className='userDetail'>
       <span className='username'>Jhon Done</span>
       <span className='usertitle'>Web Developer</span>
       </div>
        </div>
<ul className='mt-6'>
        {menuItems.map((a) => (
          <li key={a.title}>
            <span className='titles'>{a.title}</span>
            {a.list.map((item) => (
              <Menu item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>

      </div>
      <div className='content'>CONTENT</div>
      
    </div>
  )
}

export default Feed
