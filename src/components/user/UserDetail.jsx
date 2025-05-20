import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(`https://dummyjson.com/users/${id}`)
      .then(res => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Foydalanuvchini yuklashda xatolik yuz berdi!");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-10 text-center">⏳ Yuklanmoqda...</div>;
  if (error) return <div className="p-10 text-center text-red-500">{error}</div>;

  return (
    <div className="p-10 max-w-md mx-auto bg-white rounded shadow">
      <img src={user.image} alt={user.firstName} className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h1 className="text-2xl font-bold text-center mb-2">{user.firstName} {user.lastName}</h1>
      <p className="text-center text-gray-500 mb-2">{user.email}</p>
      <p><strong>Yoshi:</strong> {user.age}</p>
      <p><strong>Manzili:</strong> {user.address.address}, {user.address.city}</p>
      <p><strong>Kasbi:</strong> {user.company.title}</p>
    </div>
  );
}

export default  React.memo(UserDetail);
