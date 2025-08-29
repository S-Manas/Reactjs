function customRender(ReactElement,Container){
    
    // const domElement = document.createElement(ReactElement.type)
    // domElement.innerHTML = ReactElement.children 
    // domElement.setAttribute('href',ReactElement.props.href)
    // domElement.setAttribute('target',ReactElement.props.target)
    // Container.appendChild(domElement)
    const domElement =document.createElement(ReactElement.type)
    domElement.innerHTML = ReactElement.children
    for(const prop in ReactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop,ReactElement.props[prop]) 

    }
    Container.appendChild(domElement)
}
const ReactElement = {
    type: 'a',
    props:{
        href: 'https://www.google.com',
        target: '_blank'
    },
    children:'click me to visit google'
}
const mainContainer = document.querySelector('#root')

customRender(ReactElement,mainContainer)