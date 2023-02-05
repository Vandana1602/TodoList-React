import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import React, { useState } from "react";
import styles from "./Add.module.css";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";
import {db} from "../firebase-config"
import {collection, doc, getDocs, addDoc, updateDoc, deleteDoc} from 'firebase/firestore';

function Add() {
  const [title, setTitle] = useState(""); 
  const [space, setSpace] = useState("");
  const allitems = collection(db, "todoList");
  const navigate = useNavigate();

  const createItem = async() =>{
    const date = new Date();
    const showTime =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      console.log("hi", showTime);
    await addDoc(allitems,{title:title , space: space, time:showTime});
    console.log("created");
    }
   const handleSubmit = (e) => {
   navigate("/");
   console.log("helllllooo");
   };

  return (
    <div className={styles["field"]}>
      <h1
        style={{
          margin: "2rem 24rem",
          fontFamily: "cursive",
          fontSize: "3rem",
          
        }}
      >
        Create Task
      </h1>
      <form
        className="d-grid gap-2"
        onSubmit={handleSubmit}
        style={{ marginLeft: "11.5rem", marginTop: "1rem" }}
      >
        <div>
          <span style={{ fontWeight: "bold", marginLeft: "0.5rem" }}>TASK</span>
          <InputText
        //  className={['title']}
            style={{ marginRight: "65.7rem", width: "730px", height: "3em" }}
            type="text"
            placeholder="Enter Task"
            required
            onChange={(e)=>{setTitle(e.target.value)}}
          />
        </div>
        <br />
        <div>
          <p style={{ fontWeight: "bold", marginLeft: "0.5rem" }}>
            DESCRIPTION
          </p>
          <InputTextarea
          // className={styles["space"]}
            style={{ width: "730px", height: "8em" }}
            placeholder="Enter description"
            required
            onChange={(e)=>{setSpace(e.target.value)}}
          />
        </div>
        <br />
        <div>
          <Button
        //  className={styles["createTask"]}
            style={{
              marginLeft: "38.2rem",
              width: "120px",
            }}
            onClick={createItem}
            type="submit"
          >
            Create Item
          </Button>
        </div>
      </form>
    </div>
  );
}
export default Add;
