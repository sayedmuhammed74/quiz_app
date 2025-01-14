import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import CheckUserExist from './../helper/CheckUserExist';
import NotFound from './NotFound';

// styles
import './../styles/App.css';

// React Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/quiz',
    element: (
      <CheckUserExist>
        <Quiz />
      </CheckUserExist>
    ),
  },
  {
    path: '/result',
    element: (
      <CheckUserExist>
        <Result />
      </CheckUserExist>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
