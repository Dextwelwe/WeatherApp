import Weather from './weather' ;
import {BrowserRouter, Routes, Route } from "react-router-dom";
 function  App()  {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
      <Route path={''} element={<Weather />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
