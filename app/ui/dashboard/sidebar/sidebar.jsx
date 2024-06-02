import styles from './sidebar.module.css';
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
import Image from 'next/image';
import MenuLink from '../menuLink/menuLink';
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard/>,
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
const Sidebar = () => {
  return (
    <div className={styles.container}>
       <div className='mt-0'>
        <div className={styles.user}>
       <Image src="/assets/images/avatar.png" className='rounded ' alt="user" width="50" height="50" />
       <div className={styles.userDetail}>
       <span className={styles.username}>Jhon Done</span>
       <span className={styles.usertitle}>Web Developer</span>
       </div>
        </div>

<ul className='mt-8'>
        {menuItems.map((a) => (
          <li key={a.title}>
            <span className={styles.titles}>{a.title}</span>
            {a.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout fontSize={23}/>Logout
      </button>
      </div>
   

    </div>
  )
}

export default Sidebar
