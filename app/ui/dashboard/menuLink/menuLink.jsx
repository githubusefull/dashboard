"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './menuLink.module.css';

const menuLink = ({item}) => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <div className={styles.container}>
      <Link
        className={`{styles.contain} ${
          pathname === item.path && styles.active
        }`}
        href={item.path}
      >
        <span className={styles.Icon_Title}> 
          <p className={styles.Icon}>{item.icon}</p>
          <p className={styles.Title}> {item.title}</p>
        </span>
      </Link>
    </div>
  );
}

export default menuLink;
