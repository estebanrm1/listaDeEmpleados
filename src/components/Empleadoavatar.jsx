const Empleadoavatar = ({propEmpleado}) => {
    return (
        <img className="avatar" src={propEmpleado.pic} alt={propEmpleado.fullName} />
    );
};

export default Empleadoavatar;