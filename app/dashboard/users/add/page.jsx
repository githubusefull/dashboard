import styles from "@/app/ui/dashboard/users/addUsers/addUsers.module.css";
import { addUser } from "@app/lib/actions";

const add = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <div className="flex">
          <input type="text" placeholder="username" name="username" required />
          <input type="text" placeholder="email" name="email" required />
          </div>
          <div className="flex">
          <input type="password" placeholder="password" name="password" required />
          <input type="phone" placeholder="phone" name="phone" required />
</div>
<div className="flex">
             <select name="isAdmin" id="isAdmin">
            <option value={false} selected>Is Admin?</option>
            <option value={true} >Yes</option>
            <option value={false}>No</option>
          </select>

            <select name="isActive" id="isActive">
            <option value={true} selected>Is Active?</option>
            <option value={true} >Yes</option>
            <option value={false}>No</option>
          </select>  
        </div>
        <div className="flex">
          <textarea
            name="address"
            id="address"
            rows="16"
            placeholder="Address"
          ></textarea>
        </div>
        <div className="flex">
          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default add;