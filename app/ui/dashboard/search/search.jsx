import Link from 'next/link';
import styles from './search.module.css';
import {MdSearch} from "react-icons/md";
const search = () => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <MdSearch fontSize={23} />
        <input
          type="text"
          placeholder="Search for a product..."
          className={styles.input}
        />

      </div>
      <div className={styles.top}>
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New </button>
        </Link>
      </div>
    </div>
  );
}

export default search
