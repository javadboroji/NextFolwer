import mongoose from "mongoose";


const ProductsSchema=new mongoose.Schema(
    {
        src:String,
        title:String,
        description:String,
        rate:Number,
        price:String,
        priceOff: String,
    },{
        timestamps: true,
        collection: 'FollwerShopData' 
    }
)
const Products= mongoose.models.Product || mongoose.model("Product", ProductsSchema);
export default Products