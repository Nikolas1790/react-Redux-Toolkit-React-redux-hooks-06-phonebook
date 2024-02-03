import { ContactForm } from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList"
import { Filter } from "./Filter/Filter"
import {FormContacts, WraperDiv } from "./App.styled"

export const App = () =>{
return (
    <WraperDiv>
        <h1>Phonebook</h1>
        <ContactForm /> 
        <h2>Contacts</h2>
        <FormContacts>
            <Filter  />  
            <ContactList />
        </FormContacts>
    </WraperDiv>
)
}
