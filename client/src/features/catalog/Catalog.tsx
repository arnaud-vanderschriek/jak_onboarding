import { useFetchProductsQuery } from "./catalogApi";
import { useAppSelector } from "../../app/store/store";
import Grid from "@mui/material/Grid";
import ProductList from "./ProductList";
import Filters from "./Filters";
import { Pagination } from "@mui/material";

export default function Catalog() {
  const productParams = useAppSelector(state => state.catalog);
  const { data, isLoading } = useFetchProductsQuery(productParams);

  if (isLoading || !data) return <div>...Loading...</div>

  return (
    <Grid container spacing={4}>
      <Grid size={3}>
        <Filters />
      </Grid>
      <Grid size={9}>
        <ProductList products={data.items} />
        <Pagination
          color="secondary"
          size="large"
          count={data.pagination.totalPages}
          page={data.pagination.currentPage}
        />
      </Grid>
    </Grid>
  )
}