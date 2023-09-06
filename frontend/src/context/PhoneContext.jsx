import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PhoneContext = createContext();

const PhoneProvider = ({ children }) => {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);

  // fetch phone
  const fetchPhones = async () => {
    const response = await axios.get(`http://localhost:4004/phones`);
    const data = response.data;
    console.log(data);
    setPhones(data);
  };
  useEffect(() => {
    fetchPhones();
  }, []);

  // add phone
  const addPhone = async (form) => {
    try {
      const response = await axios.post("http://localhost:4004/phones", form);
      console.log("res", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // delete phone
  const deletePhone = async (phoneId) => {
    try {
      await axios.delete(`http://localhost:4004/phones/${phoneId}`);
      fetchPhones();
    } catch (error) {
      console.log(error);
    }
  };

  // update phone
  const updatePhone = async (phoneData) => {
    try {
      await axios.put(`http://localhost:4004/phones/${selectedPhone._id}`, phoneData);
      setPhones((prevPhones) => {
        return prevPhones.map((phone)=>{
          if(phone._id === selectedPhone._id) {
            return {...phone, ...phoneData}
          }
          return phone;
        });
      });
      setSelectedPhone(null)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PhoneContext.Provider
      value={{ phones, selectedPhone, setSelectedPhone, fetchPhones, deletePhone, addPhone, updatePhone }}
    >
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneProvider;
