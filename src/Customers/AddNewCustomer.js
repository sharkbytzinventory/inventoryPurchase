import React, { useState } from "react";
import "./AddCustomer.css";
import formSection from "./FormSection";

function AddNewCustomer() {
  const initialFormData = {
    customerName: "",
    code: "",
    address: "",
    taxNo: "",
    phone: "",
    country: "",
    city: "",
    email: "",
    creditPeriod: "",
    creditLimit: "",
    openingBalance: "",
    countryCode: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Customer added successfully!!")
    setFormData({ ...initialFormData });
  };

  const handleCancel = () => {
    setFormData({ ...initialFormData });
  };

  return (
    <div className="customerpage">
      <p style={{ fontSize: "1.2rem" }}>Customer Add</p>
      <p style={{ color: "gray", fontSize: "0.9rem" }}>Create new Customer</p>

      <form className="form1" onSubmit={handleSubmit}>
        {formSection.map((section, index) => (
          <div key={index} style={{ display: "flex" }}>
            {section.map((field) => (
              <div key={field.name} style={{ flex: field.style.flex }}>
                <label htmlFor={field.name} style={{ marginBottom: "10px" }}>
                  {field.label}
                </label>
                <br />
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  style={{
                    width: field.style.width || "100%",
                    padding: ".5rem",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                />
                <br />
              </div>
            ))}
          </div>
        ))}

        <br />

        <div>
          <button type="submit" className="submit">
            Submit
          </button>
          <button type="button" className="cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewCustomer;
