import Login from "./Login";
import Register from "./Register";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mt-5">
      <h2 className="mb-3">
        Welcome {user ? user.name : "to E-Shop"}
      </h2>

      {/* {!user && (
        <div className="row">
          <div className="col-md-6">
            <Login />
          </div>
          <div className="col-md-6">
            <Register />
          </div>
        </div>
      )} */}

      {user && (
        <p className="alert alert-success">
          You are logged in as <strong>{user.role}</strong>
        </p>
      )}
    </div>
  );
}
