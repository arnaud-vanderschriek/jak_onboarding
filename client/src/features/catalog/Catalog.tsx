import type { Product } from "../../app/models/products";

type Props = {
  products: Product[];
  addProduct: () => void;
}


export default function Catalog({products, addProduct}: Props) {
  return (
    <>
      <ul>
        {products.map(elem => (
          <li key={elem.id} >{elem.name}, {elem.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>add a product</button>
    </>
  )
}