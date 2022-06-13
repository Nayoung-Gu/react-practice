import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductImage from "../ProductImage/ProductImage";
import "./productCard.css";

export default function ProductCard({ productName, price, thumbnailImg }) {
  return (
    <>
      <p>card</p>
      <ProductImage thumbnailImg={thumbnailImg} productName={productName} />
      <ProductName productName={productName} />
      <ProductPrice price={price} />
    </>
  );
}
