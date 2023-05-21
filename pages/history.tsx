import React, { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
  const [diagnoses, setDiagnoses] = useState([]);

  useEffect(() => {
    const fetchDiagnoses = async () => {
      try {
        const res = await axios.get("/api/getData"); // Change to your endpoint
        setDiagnoses(res.data.diagnoses);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDiagnoses();
  }, []);

  return (
    <div className="flex-col items-center w-full justify-center pl-32">
      <h1 className="text-2xl">Previous Diagnoses</h1>
      <div className=" bg-blue-500 rounded-lg max-w-xl">
        <ul>
          {diagnoses.map((diagnosis, index) => (
            <li key={index}>{diagnosis}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default History;
