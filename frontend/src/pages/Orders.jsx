import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Orders() {
  const { user } = useContext(AuthContext);

  if (!user) return <p>Please login</p>;

  return (
    <div className="container mt-4">
      <h3>{user.name}'s Orders</h3>
      <p>No orders yet (API coming next)</p>
    </div>
  );
}
