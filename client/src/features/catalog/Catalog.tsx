import { useFetchProductsQuery } from "./catalogApi";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import { setPageNumber } from "./catalogSlice";
import Grid from "@mui/material/Grid";
import ProductList from "./ProductList";
import Filters from "./Filters";
import AppPagination from "../../app/shared/components/AppPagination";
import { Typography } from "@mui/material";

export default function Catalog() {
  const productParams = useAppSelector(state => state.catalog);
  const { data, isLoading } = useFetchProductsQuery(productParams);
  const dispatch = useAppDispatch();

  if (isLoading || !data) return <div>...Loading...</div>

  return (
    <Grid container spacing={4}>
      <Grid size={3}>
        <Filters />
      </Grid>
      <Grid size={9}>
        {data.items && data.items.length > 0 ? (
          <>
            <ProductList products={data.items} />
            <AppPagination
              metadata={data.pagination}
              onPageChange={(page: number) => dispatch(setPageNumber(page))}
            />
          </>
        ) :
          <Typography variant="h5">There are no results for this filter</Typography>
        }
      </Grid>
    </Grid>
  )
}