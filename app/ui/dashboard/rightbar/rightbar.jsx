import Image from 'next/image';
import styles from './rightbar.module.css';
const card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <h2 className={styles.time}>08:00 - 09:00 AM</h2>
      <h2 className={styles.title}>Product Review</h2>
        <div className={styles.bgContainer}>
        <div className="flex -space-x-4 rtl:space-x-reverse">
    <Image width={40} height={30} className="h-[40px] border-2 border-white rounded-full dark:border-gray-800" src="/assets/images/avatar.png" alt=""/>
    <Image width={40} height={30} className="h-[40px] border-2 border-white rounded-full dark:border-gray-800" src="/assets/images/developer.png" alt=""/>
    <Image width={40} height={30} className="h-[40px] border-2 border-white rounded-full dark:border-gray-800" src="/assets/images/obama.jpg" alt=""/>
    <Image width={40} height={30} className="h-[40px] border-2 border-white rounded-full dark:border-gray-800" src="/assets/images/avatar.png" alt=""/>
    <Image width={40} height={30} className="h-[40px] border-2 border-white rounded-full dark:border-gray-800" src="/assets/images/developer.png" alt=""/>
    <Image width={40} height={30} className="h-[40px] border-2 border-white rounded-full dark:border-gray-800" src="/assets/images/obama.jpg" alt=""/>

 
</div>
        </div>

      </div>
      {/*other card*/}
      <div className={styles.item2}>
      <h2 className={styles.time}>08:00 - 09:00 AM</h2>
      <h2 className={styles.title}>Team Metting</h2>
        <div className={styles.bgContainer}>
        <div className="flex -space-x-4 rtl:space-x-reverse">
    <Image width={40} height={30} className="h-[40px] border-2 border-white rounded-full dark:border-gray-800" src="/assets/images/avatar.png" alt=""/>
    <Image width={40} height={30} className="h-[40px] border-2 border-white rounded-full dark:border-gray-800" src="/assets/images/developer.png" alt=""/>
    <Image width={40} height={30} className="h-[40px] border-2 border-white rounded-full dark:border-gray-800" src="/assets/images/obama.jpg" alt=""/>
    <Image width={40} height={30} className="h-[40px] border-2 border-white rounded-full dark:border-gray-800" src="/assets/images/avatar.png" alt=""/>
    <Image width={40} height={30} className="h-[40px] border-2 border-white rounded-full dark:border-gray-800" src="/assets/images/developer.png" alt=""/>
    <Image width={40} height={30} className="h-[40px] border-2 border-white rounded-full dark:border-gray-800" src="/assets/images/obama.jpg" alt=""/>

 
</div>
        </div>

      </div>
        {/*other card*/}
        <div className={styles.item3}>
      <h2 className={styles.time}>08:00 - 09:00 AM</h2>
      <h2 className={styles.title}>Release Event</h2>
        <div className={styles.bgContainer}>
        <div className="flex -space-x-4 rtl:space-x-reverse">
    <Image width={40} height={30} className="h-[40px] border-2 border-white rounded-full dark:border-gray-800" src="/assets/images/avatar.png" alt=""/>
    <Image width={40} height={30} className="h-[40px] border-2 border-white rounded-full dark:border-gray-800" src="/assets/images/developer.png" alt=""/>
    <Image width={40} height={30} className="h-[40px] border-2 border-white rounded-full dark:border-gray-800" src="/assets/images/obama.jpg" alt=""/>
    <Image width={40} height={30} className="h-[40px] border-2 border-white rounded-full dark:border-gray-800" src="/assets/images/avatar.png" alt=""/>
    <Image width={40} height={30} className="h-[40px] border-2 border-white rounded-full dark:border-gray-800" src="/assets/images/developer.png" alt=""/>
    <Image width={40} height={30} className="h-[40px] border-2 border-white rounded-full dark:border-gray-800" src="/assets/images/obama.jpg" alt=""/>

 
</div>
        </div>

      </div>
    </div>
  )
}

export default card
