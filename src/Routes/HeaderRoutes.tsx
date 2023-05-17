import { Route, Routes } from 'react-router-dom';
import Page1 from '../Pages/Page1';
import Page2 from '../Pages/Page2';


const HeaderRoutes = () => {
  return (
    <div className='container-fluid p-0 m-0'>
        <Routes>
            <Route path='/' element={<Page1 />} />
            <Route path='/Page2' element={<Page2 />} />
        </Routes>
    </div>
  )
}

export default HeaderRoutes;  