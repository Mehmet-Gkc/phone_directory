import PhoneBookModel from '../models/phoneBookSchema.js'

export const getPhoneBooks = async (req,res) => {
    try {
        const phoneBooks = await PhoneBookModel.find();
        res.send(phoneBooks)
    } catch (error) {
        res.send(`The name you searched for could not be found: ${error.message}`)
    }
}

export const getPhoneBook = async (req,res) => {
    const id = req.params.id;
    const phoneBook = await PhoneBookModel.findById(id);

    if(phoneBook) {
        res.send(phoneBook)
    } else {
        res.status(404).send("There is no reservation with this ID")
    }
}

export const postPhoneBook = async (req,res) => {
    try {
        const newPhoneBook = new PhoneBookModel(req.body)
        await newPhoneBook.save()
        res.status(200).send(newPhoneBook)
    } catch (error) {
      res.send("book could not be saved. " + error.message);        
    }
}

export const updateBook = async (req,res) => {
    const phoneBookId = req.params.id
    const updatedPhone = req.body
    updatedPhone.lastChangedAt = Date.now();
    updatedPhone.lastChangedUser = req.body.createdUser;

    try {
        const updatePhoneBook = await PhoneBookModel.findByIdAndUpdate(phoneBookId,updatedPhone, {new:true});
        res.status(200).send(`Phone updated: ${updatePhoneBook}`)
    } catch (error) {
        res.send("Phone could not be patched. " + error.message);
    }
}

export const deletePhoneBook = async (req,res) => {
    const phoneBookId = req.params.id
    try {
        const deletePhoneBook = await PhoneBookModel.findByIdAndDelete(phoneBookId)
        res.send('Phone deleted')
    } catch (error) {
      res.send("Phone could not be deleted. " + error.message);        
    }

}

