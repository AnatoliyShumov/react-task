import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Pagination from './components/pagination'
import Table from './components/table'


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageOfItems: [],
            persons: []
        };
        this.onChangePage = this.onChangePage.bind(this);
        }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
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
        const {persons,pageOfItems} = this.state;
        return (
            <React.Fragment>
                <Table
                    onChangeTable={this.handleChangeTable}
                    persons={persons}
                    pageOfItems={pageOfItems}
                />
                <Pagination items={this.state.persons} onChangePage={this.onChangePage} />
            </React.Fragment>
        )
    }
}







