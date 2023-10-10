import "./App.css";
import Employee from "./components/Employee";
import { useState } from 'react';

function App() {
  const [role, setRole] = useState();
  const showEmployee = true;
  return (
    <div className="App">
      {showEmployee ? (
        <>
          <input type="text" onChange={(e) => {
            setRole(e.target.value)
          }}  />
          <Employee name="Thoeun" role="Dev" />
          <Employee name="Jone" role={ role } />
          <Employee name="Andy" />
          <Employee name="AJ" />
        </>
      ) : (
        <p> You cannot see Employee</p>
      )}
    </div>
  );
}

export default App;
