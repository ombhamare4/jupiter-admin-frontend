import { Route, Routes } from "react-router-dom";

import HomePage from "../../pages/Home/HomePage";
import InventoryPage from "../../pages/Inventory/InventoryPage";
import CustomerPage from "../../pages/Customers/CustomerPage";
import AnalyticsPage from "../../pages/Analytics/AnalyticsPage";
import ProductPage from "../../pages/Products/ProductsPage";
import OrdersPage from "../../pages/Orders/OrdersPage";
import MarketingPage from "../../pages/Marketing/MarketingPage";
import ShipmentPage from "../../pages/Shipments/ShipmentsPage";
import AccountPage from "../../pages/Account/AccountPage";
import AddProduct from "../../pages/Products/Add/AddProduct";
import ProductUpdate from "../../pages/Products/Update/[productId]";
import OrderNo from "../../pages/Orders/[orderId]";
const ScreenPage = () => {
  return (
    <div className="bg-blue-100 w-auto rounded-t-xl">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/inventory" element={<InventoryPage />}></Route>
        <Route path="/customers" element={<CustomerPage />}></Route>
        <Route path="/analytics" element={<AnalyticsPage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/products/add" element={<AddProduct />}></Route>
        <Route
          path="/products/update/:productId"
          element={<ProductUpdate />}
        ></Route>
        <Route path="/orders" element={<OrdersPage />}></Route>
        <Route path="/orders/:orderId" element={<OrderNo />}></Route>
        <Route path="/shipments" element={<ShipmentPage />}></Route>
        <Route path="/marketing" element={<MarketingPage />}></Route>
        <Route path="/account" element={<AccountPage />}></Route>
        <Route path="/products/update/:productId"></Route>
      </Routes>
    </div>
  );
};

export default ScreenPage;
