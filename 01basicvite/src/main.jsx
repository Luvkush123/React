import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type:'a',
    props: {
        href : "https://www.google.com",
        target :'_blank',
    },
   children :'Click me to  visit the google'
};

function MyApp(){
    return(
        <div>
            <h1>custom react app</h1>
        </div>

    )
}

const anotherElement = (
    <a href="http://www.google.com" target='_blank'>Visit google</a>

)



// const areactElement = React.createElement(
//     'a',
//     {href: 'https://google.com ', target: "_blank"},
//     'click to visit google'
// )

createRoot(document.getElementById('root')).render(
    // anotherElement
    reactElement
    // <MyApp />
)
