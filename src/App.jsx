import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
            </Route>
            // <Route path='/' element={<MainLayout/>}>
            //     <Route index element={<HomePage/>}/>
            //     <Route path='/jobs' element={<JobsPage/>}/>
            //     <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
            //     <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader}/>
            //     <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
            //     <Route path='*' element={<NotFoundPage/>}/>
            // </Route>
        )
    );

    return <RouterProvider router={router}/>;
};

export default App;