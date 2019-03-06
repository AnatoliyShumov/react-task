import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';



class TableInput extends React.Component{

    clickRow(e) {
        if (this.state.editing === false) {
            console.log("privet")
        }
    }
render() {
    return (
        <a>aaaaaaa</a>
    );
}
}


class Row extends React.Component  {

    render() {
        const { onChangeTable } = this.props;
        return (
            <tr className='table-tr'>
                <TD onChangeTable={onChangeTable} value={this.props.id} type="id" rowId={this.props.id} />
                <td className="td-name"  onClick={this.clickRow}>{this.props.name}</td>
                <td className="td-email" onClick={this.clickRow}>{this.props.email}</td>
                <td className="td-funds" onClick={this.clickRow}>{this.props.funds}</td>
                <td className="td-city"  onClick={this.clickRow}>{this.props.city}</td>
                <td className="td-phone" onClick={this.clickRow}>{this.props.phone}</td>
            </tr>
        )
    }
}

class TD extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            value: this.props.value
        }
    }
   handleClick = (e) =>{
        if(this.state.editing === false) {
            this.setState({editing:true})
        }
   }
   handleChange = (e)=> {
        const value = e.target.value
        this.setState({value})
   }
   handleSubmit = (e)=> {
       e.preventDefault();
       const {onChangeTable, rowId, type} = this.props;
       const {value} = this.state;
       onChangeTable(rowId, type, value);
       this.setState({editing: false})
   }

    render() {
        const {editing, value} = this.state;
        const {type} = this.props
        if(!!editing) {
            return (
                <td type={`td-${type}`} >
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={value} onChange={this.handleChange}/>
                        <input type="submit"  value="save"/>
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
const THead = () => {
    return(
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>FUNDS</th>
            <th>CITY</th>
            <th>PHONE</th>
        </tr>
    )

}

class TableRow extends React.Component{



    render() {
         // Деструктуризація обєкту
        const { onChangeTable } = this.props;

        // Теж саме що хуйня знизу
        // const onChangeTable = this.props.onChangeTable;

        return (
            <table>
                <tbody>

                <THead />
                    {/*{this.state.show && <p>hello!</p>}*/}
                    { this.props.persons.map(person => { return <Row key={person.id} onChangeTable={onChangeTable}  clickRow={this.clickRow} name={person.name} phone={person.phone}
                                                            id={person.id} email={person.email} funds={person.funds}
                                                            city={person.city}/>}
                    )}
                </tbody>
            </table>


        )
    }
}

export default class Table extends React.Component {
    state = {
        persons: [],
        show: false
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

                this.setState({ persons });
            })
    }
    handleChangeTable = (id,type,value, ) =>{
        console.log("id:", id)
        console.log("type:", type)
        console.log("value:", value)
    }
    render() {
        return (
            <React.Fragment>
                <TableRow key={TableRow} onChangeTable={this.handleChangeTable} persons={this.state.persons}/>
                <TableInput key='aaa' state={this.state}/>
            </React.Fragment>

        )
    }

}







