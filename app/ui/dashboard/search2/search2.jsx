"use client";

import Link from 'next/link';
import styles from './search2.module.css';
import {MdSearch} from "react-icons/md";
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
const search2 = () => {
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const pathname = usePathname();
  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);
    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  }, 300);
 
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <MdSearch fontSize={23} />
        <input
          type="text"
          placeholder="Search for a user..."
          className={styles.input}
          onChange={handleSearch}
        />

      </div>


      <div className={styles.top}>
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New </button>
        </Link>
      </div>
    </div>
  );
}

export default search2
