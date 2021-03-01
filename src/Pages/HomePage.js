import React, { useEffect, useState } from 'react';
import Header from '../Components/Header'
import ListPost from '../Components/ListPost'
import Filter from '../Components/Filter'
import PaginationHome from '../Components/Pagination'
import { data } from '../Data/index.js'
const pageSize = 4;
const filterInit = {
    search: 'stories',
    by: 'popularity',
    for: 'alltime',
}
function HomePage() {
    const [result, setResult] = useState();

    useEffect(() => {
        const dataresutl = data.sort(function (a, b) {
            return b.points - a.points;
        });
        const dataInit = paginate(dataresutl, pageSize, 1);
        setResult(dataInit)
    }, []);

    const handleSearch = (change) => {
        if (change.value === "") {
            setResult(data)
        }
        else {
            const dataresult = data.filter(post => (post.title.toLocaleLowerCase().localeCompare(change.value.toLocaleLowerCase()) >= 0))
            setResult(dataresult)
        }
    }
    const handleFilter = (filter) => {

        if (filter.by === "popularity") {
            const dataresutl = data.sort(function (a, b) {
                return b.points - a.points;
            });
            const dataInit = paginate(dataresutl, pageSize, 1);
            setResult(dataInit)

        }
        if (filter.by === "newest") {
            const dataresutl = data.sort(function (a, b) {
                return a.time - b.time;
            });
            const dataInit = paginate(dataresutl, pageSize, 1);
            setResult(dataInit)

        }


    }
    const handlePageChange = (pageNumber) => {

        const dataResult = paginate(data, pageSize, pageNumber)
        setResult(dataResult)

    }

    if (result) {
        return (
            <div>
                <Header isHomePage={1} onSearch={handleSearch} ></Header>
                <Filter
                    filterInit={filterInit}
                    onFilter={handleFilter}
                ></Filter>
                <ListPost data={result}></ListPost>
                <PaginationHome
                    total={data.length}
                    itemPerPage={pageSize}
                    onChange={handlePageChange}
                ></PaginationHome>
            </div>
        );
    }
    return null

}

function paginate(array, page_size, page_number) {

    return array.slice((page_number - 1) * page_size, page_number * page_size);

}

export default HomePage;