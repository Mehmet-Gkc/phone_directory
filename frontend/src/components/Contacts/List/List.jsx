import React, { useContext, useState } from "react";
import { PhoneContext } from "../../../context/PhoneContext";


function List() {
  const [filterText, setFilterText] = useState("");
  const { phones, deletePhone, updatePhone} = useContext(PhoneContext);


  // Searchbar
  const filtered = phones.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
    )
  })
  
  const handleDelete = (phoneId) => {
    deletePhone(phoneId);
  };

  const handleUpdate = (phoneId) => {
    updatePhone(phoneId);
  };

  return (
    <div className="contact-list-container">
      <input
        className="filter-input"
        type="text"
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="contact-list">
        {filtered.map((item, index) => (
            <li className="contact-item" key={index}>
              {item.fullname} - {item.phone_number} 
              <button className='delete-button' onClick={()=>handleDelete(item._id)}>Delete</button>
              <button className='change-button' onClick={()=>handleUpdate(item._id)}>Change</button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
