import { BrowserRouter } from 'react-router';
import { ContentLayout } from '@/layouts/BaseLayout';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <ContentLayout />
    </BrowserRouter>
  );
};

export default App;
