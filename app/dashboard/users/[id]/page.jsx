import { updateUser } from '@app/lib/actions';
import { fetchUser } from '@app/lib/data';
import styles from '@app/ui/dashboard/users/signleUser/signleUser.module.css';
import Image from 'next/image';

const SingleUserpage = async ({params}) => {
  const { id } = params;
  const user = await fetchUser(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/assets/images/avatar.png"} width={200} height={200} className='rounded-[5px]'/>
        </div>
        <div className={styles.title}>
         {user.username}  
        </div>
     
       
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
            <input type='hidden' name='id' value={user.id}/>
            <label>Username</label>
            <input type="text" name="username" placeholder={user.username} />
            <label>Email</label>
            <input type="email" name="email" placeholder={user.email} />
        

          <label>Password</label>
          <input type="password" name="Password" placeholder="Password" />
          <label>Phone</label>
          <input type="number" name="phone" placeholder={user.phone} />
       
          <label>Address</label>
          <textarea type="text" name="address" placeholder={user.address} />
            <label>Is Admin?</label>
            <select name="isAdmin" id="isAdmin">
              <option value={true} selected={user.isAdmin}>Yes</option>
              <option value={false} selected={!user.isAdmin}>No</option>
            </select>

            <label>Is Active?</label>
            <select name="isActive" id="isActive">
              <option value={true} selected={user.isActive}>Yes</option>
              <option value={false} selected={!user.isActive}>No</option>
            </select>  
          
              <button type="submit" className={styles.btn}>
                Submit
              </button>
          
        </form>
      </div>
    </div>
  );
}

export default SingleUserpage;
