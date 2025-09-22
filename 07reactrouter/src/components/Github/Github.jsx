import React,{use, useEffect,useState} from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data=useLoaderData();
//   const  [data,setData]=useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/S-Manas")
//       .then((res) => res.json())
//       .then((data) => {console.log(data)
//       setData(data);
//   })
// }, []);
  return (
    <div className="bg-gray-600 text-white-3xl p-4 rounded-2xl">
      Github Followers :{data.followers}
      <img className="text-center"src={data.avatar_url} alt="" width={300} />
    </div>
  );
}
export default Github;
export const Infoloader=async()=>{
  const response =await fetch("https://api.github.com/users/S-Manas")
  return response.json()
}