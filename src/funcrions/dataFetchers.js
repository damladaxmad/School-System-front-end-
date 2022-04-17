import React, { useEffect} from "react";
import axios from "axios";

import { setFasalo } from "../redux/actions/fasalActions";


 

  export const fetchProducts = async () => {
    const response = await axios
      .get("/api/v1/classes")
      .catch((err) => {
        console.log("Err: ", err);
      });
      console.log(response)
      return {
          data: response.data.data.classes
      }
  };
