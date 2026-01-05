import { useEffect, useState } from "react"

function App() { 
  const [products, setProducts] = useState<{id: number, name: string, price: number}[]>([])

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])
  

  const addProduct = () => {
    setProducts(prev => [...prev, {id: (prev.length + 1), name: 'product' + (prev.length + 1), price: (prev.length * 100) + 100}])
  }

  return (
    <div>
      <h1 style={{color: 'red'}}>Re-Store</h1>
      <ul>
        {products.map((elem) => (
          <li key={elem.id} >{elem.name}, {elem.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>add a product</button>
    </div>
  )
}

export default App
