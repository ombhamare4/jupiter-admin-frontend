import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import AuthPage from "./components/Authentication/Auth";
import { useState } from "react";
function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      {!isLogin && <AuthPage setIsLogin={setIsLogin} />}
      {isLogin && (
        <Layout>
          <Dashboard />
        </Layout>
      )}
    </div>
  );
}

export default App;
