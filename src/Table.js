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

const TableBody = ({listOfEmployee}) => {
    return listOfEmployee.map((item) => 
        (
            <tbody >
            <tr>
                <td>{item.name}</td>
                <td>{item.job}</td>
            </tr>
            </tbody>)
    
    );
}
function Table({Lists}){
    return(
        <table>
            <TableHead />
            <TableBody listOfEmployee={Lists}/>
        </table>
    );
}

export default Table;