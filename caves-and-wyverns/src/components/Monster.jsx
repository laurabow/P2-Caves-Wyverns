// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// import api2 from "../services/apiConfig/index2";

// export default function Monster() {

//   const navigate = useNavigate();

//   const [monster, setMonster] = useState([]);

//   useEffect(() => {
//     const fetchMonster = async () => {
//       const res = await api2.get("/");
//       console.log(res.data.records);
//       setMonster(res.data.records);
//     }
//     fetchMonster();
//   }, []);

//   return (
//     <div>
//       {monster.map((monster) => {
//             return (
              
//                 <div key={monster.id}>
//                   <h2>{monster.fields?.name}</h2>
//                   <img id={monster.id} style={{width: "200px"}} src={monster.fields?.image} alt={monster.fields?.name} />
//                   <h3>{monster.fields?.class}</h3>
//                   <p>{monster.fields?.description}</p>
//                 </div>
//             )
//           })}
//     </div>
//   )
// }
