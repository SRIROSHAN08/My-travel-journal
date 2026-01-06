import React from 'react'
import { createElement } from 'react'
import Header from './components/Header'
import './App.css'
import MainContent from './components/Content'



export default function App() {
  return(
    <>
    <Header />
    <div style={{padding:"20px 40px",maxWidth:"900px",margin:"0 auto"}}>
    <MainContent />
    </div>
    </>
  )
}