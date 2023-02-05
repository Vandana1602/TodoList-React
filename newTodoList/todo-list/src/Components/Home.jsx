import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { db } from "../firebase-config";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

function Home() {
  const [listitems, setListitems] = useState([]);
  const [listitems2, setListitems2] = useState([]);
  const [searchText, setSearchText] = useState("");
  const allitems = collection(db, "todoList");

  const navigate = useNavigate();

  const footer = (item) => {
    return (
      <div className="flex flex-wrap justify-content-end gap-2">
        <Link to={`/edit/${item.id}`} style={{ textDecoration: "none" }}>
          <Button
            label="Edit"
            icon="pi pi-pencil"
            className="p-button-warning"
          />
        </Link>
        <Link to={`/delete`} style={{ textDecoration: "none" }}>
          <Button
            icon="pi pi-trash"
            label="Delete"
            className="p-button-danger"
            onClick={() => {
              deleteItem(item.id);
            }}
          />
        </Link>
      </div>
    );
  };

  const deleteItem = async (id) => {
    const itemDoc = doc(db, "todoList", id);
    await deleteDoc(itemDoc);
  };

  const search = (val) => {
    console.log("searchtext", searchText);
    console.log("title", listitems.title);
    setSearchText(val);
    setListitems(
      listitems2.filter((val1) => {
        return val1.title.toLowerCase().includes(val.toLowerCase());
      })
    );

    console.log("kuch toh hua h");
  };

  useEffect(() => {
    console.log("hello");
    const getAllitems = async () => {
      const data = await getDocs(allitems);
      setListitems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setListitems2(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAllitems();
  }, []);

  return (
    <div>
      <div className={styles["header"]}>
        <h4> TODO LIST</h4>
        <InputText
          className={styles["search"]}
          type="text"
          placeholder="   search here"
          onChange={(e) => search(e.target.value)}
          value={searchText}
        ></InputText>

        <Button
          className={styles["button"]}
          icon="pi pi-search"
          onClick={() => {
            search(searchText);
          }}
          type="button"
        ></Button>
      </div>

      <div className={styles["container"]} style={{ padding: "2em" }}>
        {listitems.map((item) => {
          return (
            <div className={styles["card"]}>
              <Card
                title={item.title}
                subTitle={item.time}
                footer={footer(item)}
                className={styles["card1"]}
              >
                <p className={styles["sp"]}>{item.space}</p>
                <Link
                  className="d-grid gap-2"
                  to="/readmore"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    style={{
                      marginLeft: "21rem",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.1)",
                      color: "black",
                      border: "none",
                    }}
                    icon="pi pi-ellipsis-h"
                    type="button"
                  ></Button>
                </Link>
              </Card>
            </div>
          );
        })}
      </div>

      <div className={styles["footer"]}>
        <p
          style={{ color: "white", textAlign: "center" }}
          className={styles["b"]}
        >
          copy right @Vandana Kumari 2023
        </p>

        <Link
          className="d-grid gap-2"
          to="/create"
          style={{ textDecoration: "none" }}
        >
          <Button className={styles["addnew b"]}>AddNew(+)</Button>
        </Link>
      </div>
    </div>
  );
}
export default Home;
