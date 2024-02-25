import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useDeleteKino } from "../hooks/useDeleteKino";

function KinoList({ kino }) {
  const { deleteKino } = useDeleteKino();
  const { user } = useGlobalContext();
  return (
    <div className="my-[10px] ">
      <ul className="flex flex-wrap gap-2">
        {kino &&
          kino
            .sort((a, b) => new Date(b.time) - new Date(a.time))
            .map((kin) => {
              return (
                <li key={kin.id}>
                  <Link to={`/kino/${kin.name}/${kin.id}`}>
                    <div className="card w-[280px] h-[370px] bg-base-100 shadow-lg">
                      <figure>
                        <img
                          src={kin.image}
                          alt="Shoes"
                          className="h-[300px] w-full "
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title">{kin.name}</h2>
                      </div>
                    </div>
                  </Link>

                  {user &&
                  user.email === "kinoizlovchi@gmail.com" &&
                  user.displayName === "kinoizlovchi" ? (
                    <button
                      onClick={() => deleteKino("kino", kin.id)}
                      className="btn btn-outline btn-dark w-full mt-2"
                    >
                      Delete
                    </button>
                  ) : (
                    <hr />
                  )}
                </li>
              );
            })}
      </ul>
    </div>
  );
}

export default KinoList;
