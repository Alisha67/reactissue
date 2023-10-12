
import Mycomp from './Components/Mycomp';
import WeatherApp from './Components/WeatherApp'
import './Components/sass/main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Functionalclass from './Components/Functionalclass';
import Inputbox from './Components/Inputbox';
import FormHandle from './Components/FormHandle';
import ConditionalRender from './Components/ConditionalRender';
import ValidateForm from './Components/ValidateForm';
import PassFunctionProps from './Components/PassFunctionProps';
import ArrayList from './Components/ArrayList';
import MultipleArrayList from './Components/MultipleArrayList';
import Blog from './Components/Routing/Blog';

import PropsFunctionalComp from './Components/PropsFunctionalComp';
import UsestateExample from './Components/UsestateExample';
import DestructuringArray from './Components/DestructuringArray';
import UseEffecthook1 from './Components/UseEffecthook1';
import Navbar from './Components/Routing/Navbar';

import Contact from './Components/Routing/Contact';
import About from './Components/Routing/About';
import Page404 from './Components/Routing/Page404';
import User from './Components/Routing/User';
import FormStyle from './Components/FormStyle';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// import ApiAxios1 from './Components/ApiPractise/ApiAxios1';
import HomeBootStrap from './Components/HomeBootStrap';
import Routing from './Components/Routing/Routing';
import Adminlayout from './cms/Admin/Adminlayout';
import Admincontent from './cms/Admin/Admincontent';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Components/Register';
import ActivateUser from './Components/Auth/activate.user';
import BannerHomeComp from './Components/Home/banner-home';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Permission from './Components/Auth/Check.permission';
import Admin from './cms/Admin/Admin';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Banner from './cms/Admin/Banner/Banner';
import Bannerlist from './cms/Admin/Banner/banner.list';
import AdminBannerEdit from './cms/Admin/Banner/Banner.edit';
import Brandlist from './cms/Admin/Brand/Brandlist';
import BrandCreate from './cms/Admin/Brand/BrandCreate';
import AdminBrandEdit from './cms/Admin/Brand/Brand.edit';
import CategoryCreate from './cms/Admin/category/Category.create';
import Categorylist from './cms/Admin/category/Category.list';
import AdminCategoryEdit from './cms/Admin/category/Category.edit';
import { Provider } from 'react-redux';
import store from './store';
import Homelayout from './Components/Routing/Homelayout';
import HomeBanner from './Components/Routing/HomeBanner';
import Practise from './Components/Practise';
import AdminUserlist from './cms/Admin/user/User.list';
import AdminUserCreate from './cms/Admin/user/User.create';
import AdminUserEdit from './cms/Admin/user/User.edit';
import ProductList from './cms/Admin/product/ProductList';
import ProductCreate from './cms/Admin/product/ProductCreate';
import ProductEdit from './cms/Admin/product/ProductEdit';



function App() {

  // dummy function

  // function getData(){
  //   alert('hello react')
  // }

  return (
    <>
      {/* <WeatherApp/>
    <Mycomp/>
    <Functionalclass/>
    <Inputbox/>
    <FormHandle/>
    <ConditionalRender/>
   <ValidateForm/>
   <PassFunctionProps data={getData} />
   <ArrayList/> */}
      {/* <MultipleArrayList/> */}
      {/* <DestructuringArray/> */}


      {/* 
<PropsFunctionalComp

user={{name:"alisha", address:"Balaju",city:"kathmandu"}} />  */}

      {/* <UsestateExample/> */}
      {/* <UseEffecthook1/> */}


      {/* <FormStyle/> */}
      {/* <ApiAxios1/> */}

      {/* <HomeBootStrap/> */}
      {/* <Routing/> */}

    
  <Provider store ={store}>
      <BrowserRouter>
        {/* <Navbar/> */}
        <ToastContainer></ToastContainer>
        <Routes>

          <Route path='/blog' element={<Blog />} />
          <Route path='/practise' element={<Practise/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/activate/:token' element={<ActivateUser />} />
          {/* <Route path ='/activate' element={<ActivateUser/>}  /> */}
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<FormStyle />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/admin' element={<Permission component={<Adminlayout />} role="admin" />} /> */}
                   <Route path='/banner' element={<BannerHomeComp />} />
          <Route index elemet={<Admincontent />} />

          <Route path='/user/:name' element={<User />} />

          {/* <Route path='/*' element={<Page404 />} /> */}
        </Routes>

        {/* ====================homelayout */}
        <Routes>
        <Route path='/' element={<Homelayout />}>
   <Route path ='/' element={<HomeBanner/>}/>
        </Route>
    
        
        
      
          </Routes>


      <Routes>
        <Route path='/addmin' element={<Adminlayout />} >
            {/* <Route index element={<Admin />} /> */}
            <Route index path ="banner" element={<Banner/>}/>
            <Route path ="bannerlist" element={<Bannerlist/>}/>
            <Route path ="banner/:id" element={<AdminBannerEdit/>}/>

            <Route path ="brand" element={<BrandCreate/>}/>
            <Route path ="brandlist" element={<Brandlist/>}/>
            <Route path ="brand/:id" element={<AdminBrandEdit/>}/>

            <Route path ="category" element={<CategoryCreate/>}/>
            <Route path ="categorylist" element={<Categorylist/>}/>
            <Route path ="category/:id" element={<AdminCategoryEdit/>}/>
       
       
            <Route path ="userslist" element={<AdminUserlist/>}/>
            <Route path ="users" element={<AdminUserCreate/>}/>
            <Route path ="category/:id" element={<AdminUserEdit/>}/>

            <Route path ="productlist" element={<ProductList/>}/>
            <Route path ="product" element={<ProductCreate/>}/>
            <Route path ="product/:id" element={<ProductEdit/>}/>
       </Route>
       </Routes>

      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
