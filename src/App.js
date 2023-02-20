import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/Routes';
import 'animate.css';

function App() {
  return (
    <>
      <RouterProvider router={routes}>
      </RouterProvider>
    </>
  );
}

export default App;
