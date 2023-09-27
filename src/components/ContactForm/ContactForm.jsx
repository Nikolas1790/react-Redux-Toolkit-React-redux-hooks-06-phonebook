import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getItems} from "redux/selectors";
import { addTask } from "redux/contactSlice";
import { nanoid } from 'nanoid'
import { ButtonAddContact, FormTable, InputInfToAdd, Label } from "components/App.styled";


export const ContactForm = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const dispatch = useDispatch()
  const itemValue = useSelector(getItems)

 const handleImputChange = e => {
    const {name, value} = e.target;
    
    switch(name){
      case 'name':
        setName(value);
        break;
        case 'number':
        setNumber(value);
        break;

        default:
          return;
    }
  }

  const handleAddContact = e => {
    e.preventDefault();
    const id = nanoid();
    const returnContact = itemValue.find(contact => contact.name.toLowerCase().includes(name.toLowerCase()) );

    if(returnContact){
      reset()
       return alert(`${name} is already in contacts`)      
      }
    
    dispatch(addTask({name, number, id}))  
    reset();
  }

  const reset = () => {
    setName('')
    setNumber('')
  }

  return (
    <div>              
         <FormTable onSubmit={handleAddContact}>        
                 <Label htmlFor="">
                       Name
                       <InputInfToAdd
                          type="text"
                         name="name"
                         value={name}
                          onChange={handleImputChange}
                         pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                          required
                         />
                 </Label>         
  
                 <Label htmlFor="">Number
                        <InputInfToAdd
                             type="tel"
                            name="number"
                             value={number}
                             onChange={handleImputChange}
                             pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                           required
                                              />
                    </Label>
   
                <ButtonAddContact type="submit" >Add contact</ButtonAddContact>
                </FormTable>
            </div>
  )
}


// import { useState } from "react";
// import { nanoid } from 'nanoid'
// import { ButtonAddContact, FormTable, InputInfToAdd, Label } from "components/App.styled";

// export const ContactForm = ({onSubmit}) => {
//   const [name, setName] = useState('')
//   const [number, setNumber] = useState('')

//  const handleImputChange = e => {
//     const {name, value} = e.target;
    
//     switch(name){
//       case 'name':
//         setName(value);
//         break;
//         case 'number':
//         setNumber(value);
//         break;

//         default:
//           return;
//     }
//   }

//   const handleAddContact = e => {
//     e.preventDefault();
//     const id = nanoid();
//     onSubmit({name, number, id});
//     reset();
//   }

//   const reset = () => {
//     setName('')
//     setNumber('')
//   }

//   return (
//     <div>              
//          <FormTable onSubmit={handleAddContact}>        
//                  <Label htmlFor="">
//                        Name
//                        <InputInfToAdd
//                           type="text"
//                          name="name"
//                          value={name}
//                           onChange={handleImputChange}
//                          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                           required
//                          />
//                  </Label>         
  
//                  <Label htmlFor="">Number
//                         <InputInfToAdd
//                              type="tel"
//                             name="number"
//                              value={number}
//                              onChange={handleImputChange}
//                              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//                              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                            required
//                                               />
//                     </Label>
   
//                 <ButtonAddContact type="submit" >Add contact</ButtonAddContact>
//                 </FormTable>
//             </div>
//   )
// }

