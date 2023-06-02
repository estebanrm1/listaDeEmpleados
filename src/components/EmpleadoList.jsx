import ListGroup from 'react-bootstrap/ListGroup';
import EmpleadoRow from './EmpleadoRow';
import { useState } from "react";

const EmpleadoList = () => {

        const[empleados, setEmpleados] = useState([
            { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "empleado01.png" },
            { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "empleado01.png" },
            { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "empleado01.png" },
            { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "empleado04.png" },
            { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "empleado04.png" },
            { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "empleado01.png" },
            { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "empleado01.png" },
            { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "empleado01.png" },
            { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "empleado04.png" },
        ]);
    

        
    return (
        <ListGroup className='container'>
            {
                empleados.map((empleado, indiceEmpleado)=><EmpleadoRow propEmpleado={empleado} key={indiceEmpleado}></EmpleadoRow>)
            }
        </ListGroup>
    );
};

export default EmpleadoList;