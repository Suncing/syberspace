import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Detail from './pages/detail'
import Header from './components/Header/Header'

const root = createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <div>
            {/* header永远展现 */}
            <Header />
            <Routes>
                {/* 注册路由 */}
                <Route path='/detail' element={<Detail />}></Route>
                <Route path='/app' element={<App />}></Route>
                {/* 进入localhost:3000默认就是进入/，进入/自动跳转到app组件 */}
                <Route path='/' element={<Navigate to='/app' />}></Route>
            </Routes>
        </div>
    </BrowserRouter>
)

