import {
    Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useLocation, useNavigate
} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/Authentication/LoginPage.jsx";
import AuthService from "./services/Auth/auth.service.js";
import ListingCarBrands from "./pages/CarBrands/ListingCarBrands.jsx";


const App = () => {
    const loginRoute = '/login';

    if (window.location.pathname !== loginRoute && !AuthService.isAuth) {
        // navigate(loginRoute)
        window.location.href = loginRoute; // TODO
        return;
    }

    const router = createBrowserRouter(createRoutesFromElements(
        < Route>
            (AuthService.isAuth
            ?
            <Route index element={<MainLayout children={<HomePage />}/>}/>
            <Route path='car-brands' element={<MainLayout children={<ListingCarBrands />}/>}/>
            :
            <Route path='/login' element={<LoginPage/>}/>
            )
        < /Route>
        // <Route path='/' element={<MainLayout/>}>
        //     <Route index element={<HomePage/>}/>
        //     <Route path='/jobs' element={<JobsPage/>}/>
        //     <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
        //     <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader}/>
        //     <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
        //     <Route path='*' element={<NotFoundPage/>}/>
        // </Route>
    ));

    return <RouterProvider router={router}/>;
};

export default App;