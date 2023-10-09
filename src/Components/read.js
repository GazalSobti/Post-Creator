import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser,deleteUser } from "../store/userDataSlice";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2 className="w-50 mx-auto">Loading</h2>;
  }

  return (
    <div>
      <h2 className="w-50 mx-auto">All Data</h2>
      <div>
        {users &&
          users.map((ele) => (
            <div key={ele.id} className="card w-50 mx-auto">
              <div className="card-body">
                <h5 className="card-title ">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {ele.email}
                </h6>
                <p className="card-text">{ele.gender}</p>
                <Link to={`/edit/${ele.id}`} className="card-link">
                  Edit
                </Link>
                <Link
                  onClick={() => dispatch(deleteUser(ele.id))}
                  className="card-link"
                >
                  Delete
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Read;
