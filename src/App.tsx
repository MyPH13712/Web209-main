import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'

import AdminLayout from './components/Layout/admin'

import SigninPage from './pages/Auth/signin'
import ProductAdminPage from './pages/Admin/Product'
import ProductAdd from './pages/Admin/Product/add'
import ProductEdit from './pages/Admin/Product/edit'
import HomePage from './pages/Home'
import UserLayout from './components/Layout/user'
import CategoryAdd from './pages/Admin/Category/add'
import CategoryEdit from './pages/Admin/Category/edit'
import CategoryAdminPage from './pages/Admin/Category'
import ProductDetail from './pages/Home/productDetail'
import SignupPage from './pages/Auth/signup'
import CartPage from './pages/Cart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/product/detail/:id" element={<ProductDetail />} />
          <Route path="cart" element={<CartPage/>}/>
        </Route>

        <Route path='/signin' element={<SigninPage />} />
        <Route path='/signup' element={<SignupPage />} />

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<ProductAdminPage />} />
          <Route path='product/add' element={<ProductAdd />} />
          <Route path='product/edit/:id' element={<ProductEdit />} />
          <Route path="category" element={<CategoryAdminPage />} />
          <Route path="category/add" element={<CategoryAdd />} />
          <Route path="category/edit/:id" element={<CategoryEdit />} />
        </Route>
      </Routes>
    </Container>
  )
}
const Container = styled.div`
  text-align: center;
`


export default App
