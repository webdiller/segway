import axios from "axios";
import { useState } from "react";

export default function useForm({ additionFields, fromWhere, endpoint = "/api/mail" }) {

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
    formData = { ...additionFields, ...formData, fromWhere }

    let config = {
      method: "post",
      url: endpoint,
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
          try {
            curentRef.current.innerHTML = "<span>Send</span>";
          } catch (error) {
            console.log('error: ', error);
          }
        }, 1500);

        setTimeout(() => {
          successSet(true)
        }, 3000);

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
