import Grid from "@mui/material/Grid";
import { useFetchProductsQuery } from "./catalogApi";
import ProductList from "./ProductList";
import Filters from "./Filters";

export default function Catalog() {

  const { data, isLoading } = useFetchProductsQuery();

  if (isLoading || !data) return <div>...Loading...</div>

  return (
    <Grid container spacing={4}>
      <Grid size={3}>
        <Filters />
      </Grid>
      <Grid size={9}>
        <ProductList products={data} />
      </Grid>
    </Grid>
  )
}