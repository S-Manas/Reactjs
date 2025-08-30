import React from "react";
function Card(props) {
    
    console.log(props.channel);
    console.log(props.tunnel);
    
    return( 
        <>
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black bg-size-300 bg-origin-border bg-clip-border bg-no-repeat" style={{backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}>
        <img
          src="https://images.unsplash.com/photo-1756312148347-611b60723c7a?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Love
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{props.channel}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
        
      </div>
      </>

    )
}
export default Card;