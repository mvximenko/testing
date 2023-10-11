import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function RootRoute() {
  return (
    <div>
      <Header />
      <div className='mx-auto max-w-screen-xl'>
        <Outlet />
      </div>
    </div>
  );
}

export default RootRoute;
