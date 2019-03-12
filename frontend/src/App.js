import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class TD extends Component {
    constructor(props) {
        super(props)
        const{type, person} = props;
        this.state = {
            type,
            person,
            editing: false,
            prevValue: this.props.person[type],
            value: this.props.person[type],
        }
        // по ідеї на момент інціалізації обєкта ми не можемо перезаписувати властивість обєкта в іншшу властивість як параметр загуглити як це правильно зробити,
        // коли деструктеризуємо обєкт і потім записуємо його з пропс в стайт всі зміни ідуть і в пропс, це неправильно.
        // походу значення передається по силці і у пропс, розібратись
    }

    handleClickTD = () => {
        if (this.state.editing === false) {
            this.setState({editing: true})
        }
    }
    handleChangeInput = (e) => {
        const value = e.target.value
        this.setState({value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {type, value} = this.state;
        this.setState({
            editing: false,
            prevValue: value
        })

        this.setState(prevState => ({
            person: {
                ...prevState.person,
                [type]: value
            }
        }))
    }

    handleCancel = () => {
        const{prevValue} = this.state;
        this.setState({
            editing:false,
            value: prevValue
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const{person} = this.state;
        const{onChangeTable} = this.props;
        if(person !== prevState.person) {
            onChangeTable(person)
        }
    }

    render() {
        const {editing, value, type} = this.state
        // винести в окрему функцію
        if(!!editing) {
            return (
                <td type={`td-${type}`}>
                    <form onSubmit={this.handleSubmit} >
                        <input type="text" value={value} onChange={this.handleChangeInput}/>
                        <input type="submit"  value="save"/>
                        <input type="button" value="cancel" onClick={this.handleCancel}/>
                    </form>
                </td>
            )
        }
        else{
            return (
                <td type={`td-${type}`} onClick={this.handleClickTD}>{value}</td>
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

const Table = ({persons, onChangeTable}) => {
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
                this.setState({ persons });
            })
            .catch((error) => {
                console.log(error);
            })
    }


    handleChangeTable = (person) =>{
        axios({
            method: 'put',
            url: `http://localhost:8080/update/${person.id}`,
            data: person
        });
    }
    
    render() {
        const {persons} = this.state;
        return (
            <React.Fragment>
                <Table
                    onChangeTable={this.handleChangeTable}
                    persons={persons}
                />
            </React.Fragment>

        )
    }

}







