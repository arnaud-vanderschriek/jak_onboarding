import {useEffect, useState } from "react"
import type { Product } from "../models/products"
import Catalog from "../../features/catalog/Catalog"
import { Container, Typography } from "@mui/material"


function App() { 
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])
  

  const addProduct = () => {
    setProducts(prev => [...prev, 
      {
        id: prev.length + 1,
        name: 'product' + (prev.length + 1), 
        description: "test",
        price: (prev.length * 100) + 100,
        quantityInStock: 100,
        pictureUrl: 'https://picsum.photo/200',
        type: "test",
        brand: "test"
      }
    ])
  }

  return (
    <Container maxWidth='xl'>
      <Typography variant="h4">Re-Store</Typography>
      <Catalog products={products} addProduct={addProduct}/>
    </Container>
  )
}

export default App
