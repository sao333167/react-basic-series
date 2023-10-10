
export default function Employee(props) {
  return (
    <div>
          Employee <h3>{props.name} </h3>
          <p>Role: {props.role ? props.role : 'No role'}</p>
    </div>
  );
}
