import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { logoutAction } from "./actions/logout";
import Main, { mainLoader } from "./layouts/Main";
import BudgetPage, { budgetAction, budgetLoader } from "./pages/BudgetPage";
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import ExpensesPage, { expensesLoader } from "./pages/ExpensesPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader : mainLoader,
    errorElement : <Error />,

    children : [
      {
        index : true,
        element : <Dashboard />,
        loader : dashboardLoader,
        action : dashboardAction,
        errorElement : <Error />
      },

      {
        path : "budget/:id",
        element : <BudgetPage />,
        loader : budgetLoader,
        action : budgetAction,
        errorElement : <Error />
      },

      {
        path : "expenses",
        element : <ExpensesPage />,
        loader : expensesLoader
      },
      {
        path : "logout",
        action : logoutAction
      
       
      },
    ]

  },

  
]);



function App() {
  return  <div  className="App" >

    <RouterProvider router={router} />
    <ToastContainer />
  </div> 
}

export default App;
