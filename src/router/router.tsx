import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Service from "../pages/Service/Service";
import About from "../pages/About/About";
import ContactUs from "../pages/ContactUs";
import BookNow from "../pages/BookNow";

import Loading from "../components/Loading";

const Router: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route
          path="/*"
          element={
            <div className="flex h-full w-full flex-col items-center justify-center">
              <img
                src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/06/how-to-fix-error-404-1.png"
                className="mt-[13rem] w-[60%]"
                alt="img"
              />
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default Router;
