import Image from "next/image"
import styles from './transactions.module.css';
const transactions = () => {
  return (
    <div className={styles.container}>
          <h2 className={styles.title}>Latest Transactions</h2>
<table className={styles.table}>
 <thead>
  <tr>
    <td>Name</td>
    <td>Status</td>
    <td>Date</td>
    <td>Amount</td>

  </tr>
 </thead>
 <tbody>
  <tr>
    <td>
    <div className={styles.user}>
      <Image  src="/assets/images/avatar.png" className={styles.image} width={35} height={35}/>
      John Doe
      </div>
    </td>
    <td>
      <span className={`${styles.pending} ${styles.status}`}>Pending</span>
    </td>
    <td className={styles.Date}>14/02/2024</td>
    <td className={styles.Amount}>4200 DH</td>

  </tr>
 </tbody>

 <tbody>
  <tr>
    <td>
    <div className={styles.user}>

      <Image  src="/assets/images/avatar.png" className={styles.image} width={35} height={35}/>
      John Doe
      </div>
    </td>
    <td>
      <span className={`${styles.done} ${styles.status}`}>Done</span>
    </td>
    <td className={styles.Date}>14/02/2024</td>
    <td className={styles.Amount}>4200 DH</td>

  </tr>
 </tbody>
 <tbody>
  <tr>
    <td>
      <div className={styles.user}>
         <Image  src="/assets/images/avatar.png" className={styles.image} width={35} height={35}/>
      John Doe
      </div>

    </td>
    <td>
      <span className={`${styles.cancelled} ${styles.status}`}>Concelled</span>
    </td>
    <td className={styles.Date}>14/02/2024</td>
    <td className={styles.Amount}>4200 DH</td>

  </tr>
 </tbody>
</table>
</div>
  )
}

export default transactions
