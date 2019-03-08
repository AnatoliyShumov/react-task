import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class TD extends Component {
    constructor(props) {
        super(props)
        const { person, type} = props;
        this.state = {
            editing: false,
            prevValue: person[type],
            value: person[type],
            person
        }
    }
    //handleClickTD
    handleClick = () => {
        if (this.state.editing === false) {
            this.setState({editing: true})
        }
    }
    handleChange = (e) => {
        const value = e.target.value
        this.setState({value})
    }
    //props не чіпати, записати в стайт
    handleSubmit = (e) => {
        e.preventDefault();
        const {onChangeTable, person, type} = this.props;
        const {value} = this.state;
        // person[type] = value;
        onChangeTable(type, value);

        this.setState({
            editing: false,
            prevValue: value
        })
    }

    handleCancel = () => {
        this.setState({
            //деструктуризувати prev
            editing:false,
            value: this.state.prevValue
        })
    }

    render() {
        const {editing, value} = this.state;
        const {type} = this.props
        // винести в окрему функцію
        if(!!editing) {
            return (
                <td type={`td-${type}`} >
                    <form onSubmit={this.handleSubmit} >
                        <input type="text" value={value} onChange={this.handleChange}/>
                        <input type="submit"  value="save"/>
                        <input type="button" value="cancel" onClick={this.handleCancel}/>
                    </form>
                </td>
            )
        }
        else{
            return (
                <td type={`td-${type}`} onClick={this.handleClick}>{value}</td>
            )
        }
    }

}
// type розмапити
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

const Table = ({onChangeTable, persons}) => {
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
            { persons.map(person => (
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
export default class App extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios
            .get(`http://localhost:8080/`)
            .then(res => {
                const persons = res.data.data.sort(function(a, b){
                    let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
                    if (nameA < nameB) //sort string ascending
                        return -1;
                    if (nameA > nameB)
                        return 1;
                    return 0;
                })
//catch дописати
                this.setState({ persons });
            })
    }


    handleChangeTable = (type, person ) =>{
        axios({
            method: 'put',
            url: `http://localhost:8080/update/${person.id}`,
            data: person
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <Table
                    onChangeTable={this.handleChangeTable}
                    persons={this.state.persons}
                    //деструктуризувати
                />
            </React.Fragment>

        )
    }

}







