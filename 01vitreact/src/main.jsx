import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}
//  const ReactElement1 = {
//      type: 'a',
//      props:{
//          href: 'https://www.google.com',
//         target: '_blank'
//      },
//      children:'click me to visit google'
//  }
const anotherElement = (
    <a href='https://www.google.com' target='_blank'>Click me to visit google</a>
)
const ReactElement = React.createElement(
    'a',
    {
        href: 'https://www.google.com',
        target: '_blank'
    },
    'Click me to visit google'
)
ReactDom.createRoot(document.getElementById('root')).render(
  
    // <MyApp />
    //ReactElement1
    // anotherElement
    // ReactElement
    <App />
)
