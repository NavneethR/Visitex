import "../../assets/css/styles.css"

const TableComponent = () => {
    return (
        <table className="table-component">
            <tr>
                <th>S.no</th>
                <th>Visiter name</th>
                <th>Employee name</th>
                <th>reason</th>
                <th>enter time</th>
                <th>leave time</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Akila S</td>
                <td>Navneeth Ramesh</td>
                <td>love</td>
                <td>12: 00am</td>
                <td>1: 30pm</td>
            </tr>
        </table>
    )
};

export default TableComponent;