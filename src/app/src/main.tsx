//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

document.documentElement.style.setProperty('--purple-base', '#eadcf5');
document.documentElement.style.setProperty('--purple-color', '#8c07f5');
//#7d12ff
ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />,
)
