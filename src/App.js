import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Categories from "./pages/Categories";
import AllDishes from "./pages/AllDishes";



function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/categories" element={<Categories/>} />
          <Route path="/all-dishes" element={<AllDishes/>} />
        </Routes>
    </div>
  );
}

export default App;
