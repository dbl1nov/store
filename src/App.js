import Profile from "./pages/profile/Profile";
import Main from "./pages/main/Main";
import Cart from "./pages/cart/Cart";
import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import SaleAlert from './components/saleAlert/SaleAlert';
import Container from "./components/container/Container";
import NotFound from "./pages/not-found/not-found";

function App() {
  return (
    <>
    <div className="App">
    <SaleAlert/>
    <Header/>
    <Container>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Container>
    </div>
    </>
  );
}
export default App;
