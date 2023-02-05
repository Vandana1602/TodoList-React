import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import React, { useState, useEffect } from "react";
import styles from "./Edit.module.css";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase-config";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

function Edit() {
  const [title, setTitle] = useState("");
  const [space, setSpace] = useState("");
  const [newtitle, setNewtitle] = useState("");
  const [newspace, setNewspace] = useState("");
  const { itemId } = useParams();
  const allitems = collection(db, "todoList");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const itemDoc = doc(db, "todoList", itemId);
    const newItem = { title: newtitle, space: newspace };
    await updateDoc(itemDoc, newItem);
    console.log("updated");
    navigate("/");
  };

  useEffect(() => {
    const fetchItem = async () => {
      const itemDoc = doc(db, "todoList", itemId);
      const fetchDoc = await getDoc(itemDoc);
      console.log(fetchDoc.data());
      setTitle(fetchDoc.data().title);
      setSpace(fetchDoc.data().space);
    };
    console.log("id => ", itemId);
    fetchItem();
  }, []);

  return (
    <div className={styles["field"]}>
      <h1
      style={{
        margin: "4rem 24rem",
        fontFamily: "cursive",
        fontSize: "3rem",
      }}
      >
        Edit
      </h1>
      <form
        className="d-grid gap-2"
        // className = {styles["form"]}
        style={{
          marginTop: "3em",
          paddingLeft: "6em",
          paddingRight: "10px",
          paddingBottom: "5em",
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <p style={{ fontWeight: "bold", marginLeft: "0.5rem" }}>TASK</p>

          <InputText
            // className={styles["text"]}
            style={{ marginRight: "65.7rem", width: "750px", height: "3em" }}
            type="text"
            placeholder={title}
            onChange={(e) => {
              setNewtitle(e.target.value);
            }}
            value={newtitle ? newtitle : title}
            required
          />
        </div>
        <div>
          <p style={{ fontWeight: "bold", marginLeft: "0.5rem" }}>
            DESCRIPTION
          </p>
          <InputTextarea
          //  className={styles["input"]}
            style={{ width: "750px", height: "8em" }}
            placeholder={space}
            onChange={(e) => {
              setNewspace(e.target.value);
            }}
            value={newspace ? newspace : space}
            required
          />
        </div>
        <div>
          <Button
           // className = {styles["butt"]}
            style={{
              marginLeft: "38rem",
              width: "140px",
              fontSize: "18px",
              marginTop: "2em",
            }}
            onClick={handleSubmit}
            type="submit"
            className="p-button-warning"
          >
            UPDATE
          </Button>
        </div>
      </form>
    </div>
  );
}
export default Edit;
