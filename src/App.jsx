import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import StickyMobileCTA from "./components/StickyMobileCTA"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import CustomOrders from "./pages/CustomOrders"
import BulkOrders from "./pages/BulkOrders"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col pb-20 md:pb-0">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/custom-orders" element={<CustomOrders />} />
            <Route path="/bulk-orders" element={<BulkOrders />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <StickyMobileCTA />
      </div>
    </BrowserRouter>
  )
}
