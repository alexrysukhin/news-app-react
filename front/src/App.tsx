import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { MainPage, Post } from "./pages";
import { NotFound } from "./pages/NotFound";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<MainPage/>}/>
      <Route path=":id" element={<Post/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>


  );
}

export default App;
