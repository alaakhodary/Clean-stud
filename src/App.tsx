import { useLayoutEffect } from "react";
import Router from "./router/router";
import "./axiosConfig";
import { setAccessToken } from "./axiosConfig";

const App: React.FC = () => {
  useLayoutEffect(() => {
    const token: any = localStorage.getItem("token");
    setAccessToken(token);
  }, []);
  return (
    <div className="container mx-auto mt-6 font-primary">
      <Router />
    </div>
  );
};

export default App;
