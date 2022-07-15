import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

function ListAppointment(props) {

    const history = useHistory();

    const [data, setData] = useState([]);

    // getData

    const getData = () => {

        let localData = JSON.parse(localStorage.getItem("book_apt"));

        if (localData !== null) {
            setData(localData);
        }

    }

    // useEffect

    useEffect(() => {
        getData();
    }, []);

    // handleDelete

    const handleDelete = (id) => {
        let localData = JSON.parse(localStorage.getItem("book_apt"));

        let fData = localData.filter((l) => l.id !== id)

        localStorage.setItem("book_apt", JSON.stringify(fData));

        getData();
    }

    // handleEdit

    const handleEdit = (id) => {

        history.push("/BookAppointment", { id: id });

    }

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <NavLink to="/BookAppointment" exact>
                                Book-Appointment
                            </NavLink>
                        </div>
                        <div className="col-6">
                            <NavLink to="/ListAppointment" exact>
                                List-Appointment
                            </NavLink>
                        </div>
                    </div>
                    {
                        data.map((v) => {
                            return (
                                <div>
                                    <Card>
                                        <CardBody>
                                            <CardTitle tag="h5">
                                                {v.name}
                                            </CardTitle>
                                            <CardSubtitle
                                                className="mb-2 text-muted"
                                                tag="h6"
                                            >
                                                {v.email}
                                            </CardSubtitle>
                                            <CardText>
                                                {v.phone}
                                            </CardText>
                                            <CardText>
                                                {v.date}
                                            </CardText>
                                            <CardText>
                                                {v.department}
                                            </CardText>
                                            <CardText>
                                                {v.doctor}
                                            </CardText>
                                            <CardText>
                                                {v.message}
                                            </CardText>
                                            <Button onClick={() => handleEdit(v.id)}>
                                                Edit
                                            </Button>
                                            <Button onClick={() => handleDelete(v.id)}>
                                                Delete
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    );
}

export default ListAppointment;