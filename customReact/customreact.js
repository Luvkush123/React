    // const domElem = document.createElement (reactElement.type)
    // domElem.innerHTML = reactElement.childen
    // domElem.setAttribute('href',reactElement.props.href)
    // domElem.setAttribute('target', reactElement.props.target)
    // Container.appendChild(domElement)

function customRender(reactElement, Container){

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const props in reactElement) {
    if (props === "children") continue
    domElement.setAttribute(props , reactElement.props[props] );

    }

    Container.appendChild(domElement);
}


const reactElement = {
    type:'a',
    props: {
        href : "https://www.google.co.in",
        target :'_blank',
    },
   children :'Click me to  visit the google'
};


const mainContainer = document.querySelector('#root')

customRender (reactElement, mainContainer)