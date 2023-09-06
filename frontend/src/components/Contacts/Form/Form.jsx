import React, {useState, useContext} from 'react'
import { PhoneContext } from '../../../context/PhoneContext'

const initialForm = {fullname:"", phone_number:""}

function Form() {
    const {addPhone, fetchPhones} = useContext(PhoneContext)
    const [form, setForm] = useState(initialForm)
    const [message, setMessage] = useState()

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }


    const onSubmit = async (e) => {
        e.preventDefault()
        await addPhone(form)

        if(form.fullname === "" || form.phone_number === "") {
            return setMessage(false)
        }
        // addContacts([...contacts, form])
        console.log(form)

        setForm(initialForm)
        fetchPhones()
    }

  
  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" name="fullname" value={form.fullname} placeholder="Fullname" className="form-input" onChange={onChangeInput}/>
        </div>
        <div className="form-group">
          <input type="text" name="phone_number" value={form.phone_number} placeholder="Phone number" className="form-input" onChange={onChangeInput}/>
        </div>

        {message ? <p className="error-message">successfully added to the book</p> : <p className="error-message">Bitte Fullname und Phone Number hinzufügen</p>}

        <div className="form-group">
          <button className="form-button">Add</button>
        </div>
      </form>
    </div>
  )
}

export default Form
