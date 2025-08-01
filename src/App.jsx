import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Index from './components/pages/layaut/Index'
import Todos from './components/pages/todos/Todos'
import Login from './components/pages/login/Login'
import Product from './components/pages/home/Product'
import Posts from './components/pages/posts/Posts'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>}>
          <Route index={true} element={<Home/>}/>
          <Route path='/users/:id' element={<Product/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path='/todos' element={<Todos/>}/>
        </Route>
        <Route path='/sign-in' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
