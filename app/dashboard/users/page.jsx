import Image from 'next/image';
import styles from './users.module.css';
import Search2 from '@/app/ui/dashboard/search2/search2';
import Link from 'next/link';
import Pagination from '@app/ui/dashboard/pagination/pagination';
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { fetchUsers } from '@app/lib/data';
import { deleteUser } from '@app/lib/actions';


const Userspage = async ({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count,users} = await fetchUsers(q, page);
 
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search2 />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Creadted At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    width={40}
                    height={30}
                    className="h-[40px] border-2 border-white rounded-full dark:border-gray-800"
                    src={user.img || "/assets/images/avatar.png"}
                    alt=""
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.Active ? "Active" : "Passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button}`}>
                      <IoEyeOutline className={styles.view} />
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <button className={`${styles.button}`}>
                    <input type="hidden" name="id" value={user.id} />
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

export default Userspage
