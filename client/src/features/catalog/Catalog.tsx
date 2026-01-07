import { useFetchProdutsQuery } from "./catalogApi";
import ProductList from "./ProductList";

export default function Catalog() {

  const { data, isLoading } = useFetchProdutsQuery();

  if(isLoading || !data) return <div>...Loading...</div>


  return (
    <>
      <ProductList products={ data } />
    </>
  )
}