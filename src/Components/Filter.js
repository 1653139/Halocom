import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';


function Filter(props) {
    const [filter, setFilter] = useState(props.filterInit);

    const handleChange = (e) => {
        const { value, name } = e.target;
        // const value = e.target.value;
        // const name = e.target.name;
        const newFilter = { ...filter, [name]: value }
        setFilter(newFilter);
        props.onFilter(newFilter)
    }
    return (
        <div className="filter-section bg-white">
            <Container fluid>
                <Form inline>
                    <Form.Label className="my-1 mr-2" htmlFor="search">
                        Search
                </Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        as="select"
                        className="my-1 mr-sm-2"
                        id="search"
                        custom
                        name="search"
                        size="sm"
                    >
                        <option value="stories">Stories</option>
                        <option value="news">News</option>
                    </Form.Control>
                    <Form.Label className="my-1 mr-2" htmlFor="by">
                        by
                </Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        as="select"
                        className="my-1 mr-sm-2"
                        id="by"
                        custom
                        name="by"
                        size="sm"
                    >
                        <option value="popularity">Popularity</option>
                        <option value="newest">Newest</option>

                    </Form.Control>
                    <Form.Label className="my-1 mr-2" htmlFor="for">
                        for
                </Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        as="select"
                        className="my-1 mr-sm-2"
                        id="for"
                        custom
                        name="for"
                        size="sm"
                    >
                        <option value="all">All Time</option>
                        <option value="today">Today</option>
                    </Form.Control>

                </Form>

            </Container></div>

    )

}


export default Filter;