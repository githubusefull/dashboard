import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";
import { addProduct } from "@app/lib/actions";

const add = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} action={addProduct}>
        <div className="flex">
          <input type="text" placeholder="title" name="title" required />
             <select name="cat" id="cat">
            <option value="general">Chosse a Category</option>
            <option value="computer" >Computer</option>
            <option value="mobile">Mobile</option>
            <option value="others">Others</option>
          </select> 
        </div>
        <div className="flex">
          <input type="number" placeholder="price" name="price" required />
          <input type="number" placeholder="stock" name="stock" required />
        </div>
        <div className="flex">
          <input type="text" placeholder="color" name="color" required />
          <input type="text" placeholder="size" name="size" required />
        </div>
        <div className="flex">
          <textarea
            name="desc"
            id="desc"
            rows="16"
            placeholder="Description"
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
