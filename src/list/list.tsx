import { useEffect } from "react";

import axios from "axios";

export default function List() {

  useEffect(() => {
    axios.get("/uiapi/AccountsAPI/v1/rest/configuration/")
    .then((res) => {
      console.log("then " + res)
    })
    .catch((res) => {
      console.log("catch " + res)
    })
  }, [])

  return (
    <div>
      <h2>List</h2>
    </div>
  );
}