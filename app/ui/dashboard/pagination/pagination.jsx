"use client"
import styles from './pagination.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const pagination = ({count}) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const page = searchParams.get("page") || 1;
  const params = new URLSearchParams(searchParams);
  const ITEM_PAGE = 3
  const Prev = ITEM_PAGE * (parseInt(page) -1 ) > 0
  const Next = ITEM_PAGE * (parseInt(page) -1 ) + ITEM_PAGE  < count;
   const handleChangePage = (type) => {
       type === "prev"
       ? params.set("page", parseInt(page) - 1)
       : params.set("page", parseInt(page) + 1)
       replace(`${pathname}?${params}`);

   } 
  return (
    <div className={styles.container}>
      <button className={styles.buttonPrev} disabled={!Prev} onClick={() => handleChangePage("prev")}>Previous</button>
      <button className={styles.buttonNex} disabled={!Next} onClick={() => handleChangePage("next")}>Next</button>

    </div>
  )
}

export default pagination
