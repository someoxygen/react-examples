import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Click me to visit Google'
  }
  
  function MyApp(){
    return(
      <div>
        <h1>Custom React App</h1>
      </div>
    )
  }

  const AnotherElement = (
    <a href='http://google.com' target='_blank'>Visit Google</a>
  )


  const aReactElement = React.createElement(
    'a',
    {href:'https://google.com',target:"_blank"},
    'Click me to visit Google'
  )

createRoot(document.getElementById('root')).render(
    
    //change the descriptions and see the changes on your frontend...

    //aReactElement

    // AnotherElement
    
    //<MyApp />
    
    <App />
)
