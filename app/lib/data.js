import {User} from "./models";
import {Product} from "./models";
import { connectToDb } from "./Tools";

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PAGE = 3
    try {
        connectToDb();
        const count = await User.find({username:{$regex : regex}}).count();
        const users = await User.find({username:{$regex : regex}}).limit(ITEM_PAGE).skip(ITEM_PAGE * (page - 1));
        
        return {count, users}
    } catch (err) {
        throw new Error("Failed to fetch users!");
    }
}
export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PAGE = 3
    try {
        connectToDb();
        const count = await Product.find({tite:{$regex : regex}}).count();
        const products = await Product.find({title:{$regex : regex}}).limit(ITEM_PAGE).skip(ITEM_PAGE * (page - 1));
        
        return {count, products}
    } catch (err) {
        throw new Error("Failed to fetch products!");
    }
}


export const fetchUser = async (id) => {
  console.log(id)
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
}
export const fetchProduct = async (id) => {
  
    try {
        connectToDb();
        const product = await Product.findById(id);
        return product;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch product!");
    }
}