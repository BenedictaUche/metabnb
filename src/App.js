import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './components/Header';
import Homepage from './pages/Homepage';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Homepage />
      },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
