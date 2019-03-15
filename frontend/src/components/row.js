import TD from "./td";
import React from "react";


const Row = ({onChangeTable, person}) => {
    return (
        <tr className='table-tr'>
            <TD onChangeTable={onChangeTable} person={person}  type="id" />
            <TD onChangeTable={onChangeTable} person={person}  type="name" />
            <TD onChangeTable={onChangeTable} person={person}  type="email"     />
            <TD onChangeTable={onChangeTable} person={person}  type="funds"  />
            <TD onChangeTable={onChangeTable} person={person}  type="city"  />
            <TD onChangeTable={onChangeTable} person={person}  type="phone"/>
        </tr>
    )
}

export default Row