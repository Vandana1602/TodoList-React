import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import React from "react";
import styles from "./Readmore.module.css"
import { Link, useNavigate } from "react-router-dom";


function Readmore() {
  const navigate = useNavigate();

  navigate("/");
  return (<div>hello</div>
  
  );
}

export default Readmore;















// <%- include('../partials/header.ejs') %>
//   <title>
//     <%= post.title %>
//   </title>
//   <%- include('../partials/navbar.ejs') %>

//     <div class="container mt-5 m-auto">
//       <div class="card">
//         <h6 class="card-header">Created on: <%= post.date %>
//         </h6>
//         <div class="card-body">
//           <h3 class="card-title">
//             <%=post.title%>
//           </h3>
//           <p class="card-text">
//             <%=post.content%>
//           </p>
//           <div>
//             <h5> Post By: <%=post.author.name%>
//             </h5>
//           </div><br>
//           <div>
//             <h6 class="card-subtitle mb-2 "><b> hashtags: </b>
//               <% for (let hash of post.hashtags){%>
//                 #<%= hash %>
//                   <% } %>
//             </h6>
//           </div>
//           <% if(user_id == post.author._id) { %>
//             <div style="padding-top:15px;">

//               <a href="/posts/<%=post._id%>/edit" class="btn btn-info">Edit</a>&nbsp;
//               <a href="/delete/<%=post._id%>" class="btn btn-danger">Delete</a>
//             </div>
//             <% } %>
//         </div>
//       </div>
//     </div>

//     <%- include('../partials/footer.ejs') %>
