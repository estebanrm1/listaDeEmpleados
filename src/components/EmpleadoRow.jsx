import { ListGroupItem } from "react-bootstrap";
import Empleadoavatar from "./Empleadoavatar";


const EmpleadoRow = ({propEmpleado}) => {
    return (
        <ListGroupItem className="d-flex">
        <Empleadoavatar propEmpleado={propEmpleado}></Empleadoavatar>
        <div className="mx-2">
        <h4>{propEmpleado.fullName}</h4>
        <span className="d-flex">
        <h6>{propEmpleado.title}</h6>
        <p className="bg-info mx-3 my-1 p-1">{propEmpleado.department}</p>
        </span>
        </div>
        </ListGroupItem>
    );
};

export default EmpleadoRow;