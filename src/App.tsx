import LoginForm from "./_auth/forms/LoginForm.tsx";
import { HomePage } from "./_root/pages/HomePage.tsx";
import  SubConceptsPage  from "./_root/pages/SubConceptsPage.tsx";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout.tsx";
import RootLayout from "./_root/RootLayout";

export default function App() {
  return (
    <>
      <main className="flex h-screen">
        <Routes>
          {/* public routes */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<LoginForm/>} />
          </Route>
          {/* private routes */}
          <Route element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/subconcepts" element={<SubConceptsPage />} />
          </Route>
        </Routes>
        {/* <Toaster /> */}
      </main>
    </>
  ); 
}
