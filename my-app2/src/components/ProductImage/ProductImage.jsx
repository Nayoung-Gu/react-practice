import "./productImage.css";

export default function ProductImage({ thumbnailImg, productName }) {
  const imageUrl = "http://test.api.weniv.co.kr/" + thumbnailImg;
  return <img src={imageUrl} alt={productName}></img>;
}
