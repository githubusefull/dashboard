import Image from 'next/image';
import styles from './products.module.css';
import Search from '@app/ui/dashboard/search/search';
import Link from 'next/link';
import Pagination from '@app/ui/dashboard/pagination/pagination';
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { fetchProducts } from '@app/lib/data';
import { deleteProduct } from '@app/lib/actions';

const Productspage = async ({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count,products} = await fetchProducts(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    width={40}
                    height={30}
                    className="h-[40px] border-2 border-white rounded-full dark:border-gray-800"
                    src={product.img || "/assets/images/noproduct.png"}
                    alt=""
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>{product.price} DH</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${styles.button}`}>
                      <IoEyeOutline className={styles.view} />
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <button className={`${styles.button}`}>
                      <input type="hidden" name="id" value={product.id} />
                      <RiDeleteBin6Line className={styles.delete} />
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
}

export default Productspage;

