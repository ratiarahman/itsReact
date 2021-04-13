const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>NAME</th>
                <th>TITLE</th>
            </tr>
        </thead>
    );
}

const TableBody = (Lists) => {
    Lists.map((item) => {
        return(
            <tbody>
            <tr>
                <td>{item.name}</td>
                <td>{item.job}</td>
            </tr>
            </tbody>
        );
    })
}
function Table(Lists){
    return(
        <table>
            <TableHead />
            <TableBody Lists={Lists}/>
        </table>
    );
}

export default Table;