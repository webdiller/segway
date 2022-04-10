import axios from "axios";
import { useState } from "react";

export default function useForm({fromWhere}) {

  const [curentRef, curentRefSet] = useState(null)
  const [loading, loadingSet] = useState(false)
  const [success, successSet] = useState(false)

  const onSubmit = async e => {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    formData = {...formData, fromWhere}

    let config = {
      method: "post",
      url: `/api/mail`,
      headers: {
        "Content-Type": "application/json"
      },
      data: formData
    };

    curentRef.current.innerHTML = "<span>Sending...</span>";
    curentRef.current.classList.add("loading");
    loadingSet(true)

    try {
      const response = await axios(config);

      if (response.status === 200) {
        curentRef.current.innerHTML = "<span>Success</span>";
        curentRef.current.classList.remove("loading");

        setTimeout(() => {
          curentRef.current.innerHTML = "<span>Send</span>";
        }, 3000);

        setTimeout(() => {
          successSet(true)
        }, 1500);

      }
    } catch (error) {
      console.log(error);
      alert('Error while sending form')
      curentRef.current.innerHTML = "<span>Error while sending</span>";
      setTimeout(() => {
        curentRef.current.innerHTML = "<span>Send</span>";
        curentRef.current.classList.remove("loading");
      }, 3000);
    } finally {
      loadingSet(false)
    }
    
  };

  return {
    onSubmit,
    curentRefSet,
    loading,
    success
  }
}
