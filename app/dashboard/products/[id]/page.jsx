import styles from '@app/ui/dashboard/products/singleProduct/signleProduct.module.css';
import Image from 'next/image';
import { fetchProduct } from '@app/lib/data';
import { updateProduct } from '@app/lib/actions';

const SingleProductpage = async  ({params}) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={product.img || "/assets/images/noproduct.png"}
            width={200}
            height={200}
            className="rounded-[5px]"
          />
        </div>
        <div className={styles.title}>{product.title}</div>
      </div>
      <div  className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
        <input type='hidden' name='id' value={product.id}/>

          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />

          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input type="text" name="phone" placeholder={product.color} />
          <label>Size</label>
          <textarea type="text" name="size" placeholder="Size" />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="general">Chosse a Category</option>
            <option value="computer">Computer</option>
            <option value="mobile">Mobile</option>
            <option value="others">Others</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="16"
            placeholder="Description"></textarea>

          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SingleProductpage;
