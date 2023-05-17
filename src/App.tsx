import {BrowserRouter} from 'react-router-dom';
import HeaderRoutes from './Routes/HeaderRoutes';

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className='container-fluid p-0 m-0' ><HeaderRoutes /></div>
      </BrowserRouter>
    </div>
  )
}

export default App;
