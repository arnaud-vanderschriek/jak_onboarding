const products = [
  {id: 0, name: 'product1', price: 100}, 
  {id: 1, name: 'product2', price: 200},
  {id: 2, name: 'product3', price: 300},
  {id: 3, name: 'product4', price: 400}
]

function App() {

  return (
    <div>
      <h1 style={{color: 'red'}}>Re-Store</h1>
      <ul>
        {products.map((elem) => (
          <li key={elem.id} >{elem.name}, {elem.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
