import { StackHandler, StackProvider, StackTheme } from "@stackframe/react";
import { SignIn } from "@stackframe/stack";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { stackClientApp } from "./stack/client";

function HandlerRoutes() {
  const location = useLocation();
  
  return (
    <StackHandler app={stackClientApp} location={location.pathname} fullPage />
  );
}

export default function App() {
  return (
    <Suspense fallback={"Loading..."}>
      <BrowserRouter>
        <StackProvider app={stackClientApp}>
          <StackTheme>
            <Routes>
              <Route path="/handler/*" element={<HandlerRoutes />} />
 //             <Route path="/" element={<div>hello world</div>} />
                <Route path="/" element={<SignIn />} />
          
            </Routes>
          </StackTheme>
        </StackProvider>
      </BrowserRouter>
    </Suspense>
  );
}
