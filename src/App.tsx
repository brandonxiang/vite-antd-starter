import { RouterProvider } from 'react-router';
import { router } from '@/router';
import './App.scss';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
