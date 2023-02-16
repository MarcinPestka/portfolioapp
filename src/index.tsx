import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Routes/App';
import SiteNotFound from './Routes/notFound'
import reportWebVitals from './reportWebVitals';
import FirstProjectPage from './Routes/FirstProjectPage';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import SecondProjectPage from './Routes/SecondProjectPage';
import ThirdProjectPage from './Routes/ThirdProjectPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="en" />,
  },
  {
    path: "en/",
    element: <App language='en'/>,
  },
  {
    path: "pl",
    element: <App language='pl'/>,
  },
  {
    path: "*",
    element: <SiteNotFound/>  
  },
  {
    path: "en/policyAutomation",
    element: <FirstProjectPage/>  
  },
  {
    path: "en/ZtmApp",
    element: <SecondProjectPage/>  
  },
  {
    path: "en/dataAnalysis",
    element: <ThirdProjectPage/>  
  },
  
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
