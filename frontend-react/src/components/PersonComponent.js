import React from 'react';
import PersonService from '../services/PersonService.js';
import { Card, Table, Button, InputGroup } from 'react-bootstrap';
import '../assets/Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faStepBackward, faStepForward, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';




class PersonComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            personnes: [],
            currentPage: this.currentPage,
            sizePage: this.sizePage,

        }
        this.sortAgeAsc = this.sortAgeAsc.bind(this)
        this.sortAgeDesc = this.sortAgeDesc.bind(this)

        this.onSortAsc = this.onSortAsc.bind(this)
        this.onSortDesc = this.onSortDesc.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.nextPage = this.nextPage.bind(this)





    }


    //calling the rest api
    componentDidMount() {
        this.currentPage = 0;
        this.sizePage = 5;
        PersonService.getPersonnes(this.currentPage, this.sizePage).then((response) => (
            this.setState({ personnes: response.data },
            )
        ))
    }

    previousPage() {
        this.currentPage = (this.currentPage - 1 >= 0) ? this.currentPage - 1 : this.currentPage;
        PersonService.getPersonnes(this.currentPage, this.sizePage).then((response) => (
            this.setState({ personnes: response.data }
            )
        ))

    }
    nextPage() {
        this.currentPage = (this.currentPage >= 3) ? this.currentPage : this.currentPage + 1;
        PersonService.getPersonnes(this.currentPage, this.sizePage).then((response) => (
            this.setState({ personnes: response.data }
            )
        ))

    }

    //sorting
    onSortAsc(event, sortKey) {
        const data = this.state.personnes;
        data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]))
        this.setState({ data })
    }
    onSortDesc(event, sortKey) {
        const data = this.state.personnes;
        data.sort((a, b) => b[sortKey].localeCompare(a[sortKey]))
        this.setState({ data })
    }
    sortAgeAsc(event, sortKey) {
        const data = this.state.personnes;
        data.sort((a, b) => b[sortKey] - a[sortKey]);
        this.setState({ data })
    }
    sortAgeDesc(event, sortKey) {
        const data = this.state.personnes;
        data.sort((a, b) => a[sortKey] - b[sortKey]);
        this.setState({ data })
    }




    render() {


        return (
            <div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header>
                        <FontAwesomeIcon icon={faUsers} />Personnes
                    </Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant="dark">

                            <thead >
                                <tr>
                                    <td>

                                        Nom
                                            <FontAwesomeIcon icon={faChevronUp} onClick={e => this.onSortAsc(e, 'nom')} />
                                        <FontAwesomeIcon icon={faChevronDown} onClick={e => this.onSortDesc(e, 'nom')} />


                                    </td>
                                    <td>Prénom
                                    <FontAwesomeIcon icon={faChevronUp} onClick={e => this.onSortAsc(e, 'prenom')} />
                                        <FontAwesomeIcon icon={faChevronDown} onClick={e => this.onSortDesc(e, 'prenom')} />

                                    </td>
                                    <td>Age
                                    <FontAwesomeIcon icon={faChevronUp} onClick={e => this.sortAgeAsc(e, 'age')} />
                                        <FontAwesomeIcon icon={faChevronDown} onClick={e => this.sortAgeDesc(e, 'age')} />
                                    </td>
                                    <td>Sexe
                                    <FontAwesomeIcon icon={faChevronUp} onClick={e => this.onSortAsc(e, 'sexe')} />
                                        <FontAwesomeIcon icon={faChevronDown} onClick={e => this.onSortDesc(e, 'sexe')} />
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.personnes.map(
                                        personne => (
                                            <tr key={personne.id}>
                                                <td>{personne.nom}</td>
                                                <td>{personne.prenom}</td>
                                                <td>{personne.age}</td>
                                                <td>{personne.sexe}</td>
                                            </tr>

                                        )
                                    )
                                }
                            </tbody>
                        </Table>
                    </Card.Body>
                    <Card.Footer>

                        <div style={{ "float": "right" }}>
                            <InputGroup size="sm">
                                <Button type="button" variant="outline-info" onClick={this.previousPage}>
                                    <FontAwesomeIcon icon={faStepBackward} />Previous


                                </Button>
                                <Button type="button" variant="outline-info" onClick={this.nextPage}>Next
                                <FontAwesomeIcon icon={faStepForward} />
                                </Button>


                            </InputGroup>

                        </div>
                    </Card.Footer>
                </Card>
            </div >
        )
    }

}
export default PersonComponent;