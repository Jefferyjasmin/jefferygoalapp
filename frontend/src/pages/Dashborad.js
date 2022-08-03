import React from "react";
import { useState, useEffect } from "react";
function Dashborad() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  return <div>Dashborad</div>;
}

export default Dashborad;
