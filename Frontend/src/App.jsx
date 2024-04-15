import './App.css';
import { BrowserRouter as Router,Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PartOne from './Pages/PartOne';
import AdminHome from './Pages/AdminPage/MasterLayout/MasterLayout'
import AdminDashboard from "./Pages/AdminPage/components/Dashboard/Dashboard"
import AdminPrivateRoutes from './Pages/AdminPage/AdminPrivateRoutes'
import UserPrivateRoutes from './Pages/UserPage/UserPrivateRoutes'
import UserHome from './Pages/UserPage/MasterLayout/MasterLayout'
import axios from 'axios';
import AdminProfile from "./Pages/AdminPage/components/profil/Profile"
import AdminUser from "./Pages/AdminPage/components/ListeD'utilisateurs/Index"
import AddUser from "./Pages/AdminPage/components/ListeD'utilisateurs/AjouterUtilisateur"
import UpdateUser from "./Pages/AdminPage/components/ListeD'utilisateurs/ModifierUtilisateur"
import AdminFormListe from "./Pages/AdminPage/components/formsListe/Index"
import AdminGraph from "./Pages/AdminPage/components/Graphe/Index"
import AdminFormGraphe from "./Pages/AdminPage/components/Graphe/Graphe"
import UpdateForm from './Pages/UserPage/components/formRaiting/UpdateForm';
import ListeCritere from './Pages/UserPage/components/formRaiting/Index'
import RatingForm from './Pages/UserPage/components/formRaiting/RatingForm';
import UserProfile from './Pages/UserPage/components/profil/Profile'
import FormList from './Pages/UserPage/components/formRaiting/FormList';
import Dashboard from './Pages/UserPage/components/Dashboard/Dashboard';
import UserGraphe from './Pages/UserPage/components/Graphe/Index';
import UserFormGraphe from './Pages/UserPage/components/Graphe/Graphe'
import DynamicGraph from './Pages/UserPage/components/Graphe/DynamicGraph';

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config){
  const token =   localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/partone" element={<PartOne />} />
          <Route path="/register" element={<Register />} />
          <Route path="/client/ratingform/:listeCritere/:companyName/:expirationDate/:uniqueId" element={<RatingForm />} />

          <Route element={<AdminPrivateRoutes/>}>
              <Route path="/admin" element={<AdminHome />} >
                <Route path="/admin" element={<AdminDashboard/>} />
                <Route path="/admin/profile" element={<AdminProfile />} />
                <Route path="/admin/user_list" element={<AdminUser />} />
                <Route path="/admin/add_user" element={<AddUser />} />
                <Route path="/admin/modifier/:id" element={<UpdateUser />} />
                <Route path="/admin/form_list" element={<AdminFormListe />} />
                <Route path="/admin/update-form/:id" element={<UpdateForm />} />
                <Route path="/admin/form_list_resulte" element={< AdminGraph/>} />
                <Route path="/admin/graphe/:companyName/:uiqueId" element={<AdminFormGraphe />} />

              </Route>

          </Route>

          <Route element={<UserPrivateRoutes/>}>
              <Route path="/user" element={<UserHome />} >
              <Route path="/user" element={<Dashboard />} />
              <Route path="/user/profile" element={<UserProfile />} />
              <Route path="/user/critere_list" element={<ListeCritere />} />
              <Route path="/user/form_list" element={<FormList />} />
              <Route path="/user/update_form/:id" element={<UpdateForm />} />
              <Route path="/user/graphe_list" element={<UserGraphe />} />
              <Route path="/user/graphe/:companyName/:uiqueId" element={<UserFormGraphe />} />
              <Route path="/user/Add_graphe/" element={<DynamicGraph />} />

              

              </Route>

          </Route>

           
           </>
    )
)
  return (

    <RouterProvider router ={router} />

  );
}

export default App;
