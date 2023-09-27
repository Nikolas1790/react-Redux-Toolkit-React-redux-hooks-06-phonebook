// import { FindContact } from "components/App.styled"
// import { useDispatch, useSelector } from 'react-redux';
// import { filterContact } from "redux/contactSlice";
// import { getFilter } from "redux/selectors";

// export const Filter =() => {
//     const dispatch = useDispatch();
//     const filterValue  = useSelector(getFilter);

//     const handleImputFilter = e => {
//         console.log('kkkkkkkkkkkkkkkkk')
//         dispatch(filterContact(e.currentTarget.value));
       
//     };

//         return(
//         <div>
//              <FindContact>Find contacts by name</FindContact>
//              <input type="text"
//                   name="filter"
//                   onChange={handleImputFilter}
//                   value={filterValue}
//                   pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"/>

//         </div>
//     )
// }







import { FindContact } from "components/App.styled"


export const Filter =({handleImputFilter, filter}) => {

        return(
        <div>
             <FindContact>Find contacts by name</FindContact>
             <input type="text"
                  name="filter"
                  onChange={handleImputFilter}
                  value={filter}
                  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"/>

        </div>
    )
}
