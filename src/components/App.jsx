import { useState, useEffect } from "react"
import { ContactForm } from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList"
import { Filter } from "./Filter/Filter"


const getInitialFilters= () => {
    return  JSON.parse(window.localStorage.getItem('contacts')) ?? [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ]
}
export const App = () =>{
      const [contacts, setContacts] =useState(getInitialFilters)
      const [filter, setFilter] = useState('')

      const formSubmitHendle = data => {
            const returnContact = contacts.find(contact => contact.name.toLowerCase().includes(data.name.toLowerCase()) );

      if(returnContact){
         return alert(`${data.name} is already in contacts`)
        }
        setContacts(prevState => ([...prevState, data]))
        }
      
      const handleImputFilter = e => {
            const {value} = e.target;
            setFilter(value)        
      }

      const getVisibleItems = () => {
          return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())      
            )
        } 

      const deleteItem = (itemId) => {
            setContacts(prevState =>prevState.filter(contact => contact.id !== itemId),
            )
        }

 
       useEffect(() => {
             window.localStorage.setItem('contacts', JSON.stringify(contacts))
       }, [contacts])


return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHendle}/> 
        <h2>Contacts</h2>
        <Filter handleImputFilter={handleImputFilter} value={filter}/>  
        <ContactList options={getVisibleItems()} onDeleteContact={deleteItem}/>
      </div>
)
}
