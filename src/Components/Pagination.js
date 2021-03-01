import React, { useState, useEffect } from 'react';
import Pagination from "react-js-pagination";
import { Container } from 'react-bootstrap';
function PaginationHome(props) {
    const [pageNumber, setPageNumber] = useState()
    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setPageNumber(pageNumber)
        props.onChange(pageNumber)

    }
    return (
        <div className="paging-section">
            <Container fluid>
                <Pagination
                    activePage={pageNumber}
                    itemsCountPerPage={props.itemPerPage}
                    totalItemsCount={props.total}
                    pageRangeDisplayed={5}
                    onChange={handlePageChange}
                    itemClass="page-item"
                    linkClass="page-link"
                />
            </Container>
        </div>


    )

}

export default PaginationHome;

