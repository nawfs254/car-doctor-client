import { Outlet } from 'react-router-dom';
import NavbarDefauls from '../Components/NavbarDefauls';

const MainLayout = () => {
    return (
        <div>
            <NavbarDefauls></NavbarDefauls>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;