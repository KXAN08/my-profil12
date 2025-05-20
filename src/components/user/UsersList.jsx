import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/users")
      .then(res => {
        setUsers(res.data.users);
        setLoading(false);
      })
      .catch(err => {
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi!");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-10 text-center"> Yuklanmoqda...</div>;
  if (error) return <div className="p-10 text-center text-red-500">{error}</div>;

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {users.map(user => (
        <Link to={`/user/${user.id}`} key={user.id} className="bg-white rounded shadow hover:shadow-lg transition p-6">
          <img src={user.image} alt={user.firstName} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h2 className="text-xl font-bold text-center">{user.firstName} {user.lastName}</h2>
          <p className="text-center text-gray-500">{user.email}</p>
        </Link>
      ))}
    </div>
  );
}

export default  React.memo(UsersList);
