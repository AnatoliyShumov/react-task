import React from "react";
import Row from "./row"


const Table = ({persons, onChangeTable, pageOfItems}) => {
    return (
        <table>
            <tbody>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>FUNDS</th>
                <th>CITY</th>
                <th>PHONE</th>
            </tr>
            { pageOfItems.map(person => (
                <Row
                    key={person.id}
                    onChangeTable={onChangeTable}
                    person={person}
                />)
            )}
            </tbody>
        </table>
    )
}

export default Table