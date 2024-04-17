import Header from "./components/Header"
import './App.css'
import Images from "./components/Images"

function App() {

  return (
     <>
      <Header />
      <section>
        <div className="product-ctn">
          <Images />
        </div>
      </section>
      
     </>
     )
}

export default App
