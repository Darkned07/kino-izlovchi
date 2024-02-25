import { Link, useParams } from "react-router-dom";
import { useGetKino } from "../hooks/useGetKino";
import { useEffect, useState } from "react";

function Kino() {
  const { getKino } = useGetKino();
  const [datas, setData] = useState(null);
  const { id } = useParams();
  getKino("kino", id)
    .then((data) => setData(data))
    .catch((error) => console.log(error));

  return (
    <>
      {datas && (
        <div className="sm:my-[20px] my-[10px]">
          <div className="card lg:card-side bg-base-100 shadow-xl my-[20px] h-full lg:h-[500px] ">
            <figure>
              <img src={datas.image} alt="Album" className="w-full h-full" />
            </figure>
            <div className="card-body">
              <div className="overflow-x-auto flex flex-row">
                <table className="table ">
                  {/* head */}

                  <tbody>
                    {/* row 1 */}
                    <tr className="bg-base-200">
                      <th>Kino Nomi</th>
                      <td>{datas.name}</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>Tili</th>
                      <td>{datas.tili}</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>Janri</th>
                      {datas &&
                        datas.janri.map((d) => {
                          return <td key={d}>{d}</td>;
                        })}
                    </tr>
                    <tr>
                      <th>Davomiyligi</th>
                      <td>{datas.davomiyligi}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex md:flex-row flex-col gap-2 my-[10px]">
                <Link
                  target="_blank"
                  to={datas.yuklashtwo}
                  className="btn btn-outline btn-secondary"
                >
                  Yuklab olish
                </Link>
                <Link
                  to={datas.yuklashtwo}
                  target="_blank"
                  className="btn btn-outline bt-dark"
                >
                  Telegramdan yuklash
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {!datas && (
        <div className="flex flex-row gap-1 items-center">
          <h2 className="font-bold text-lg">Loading</h2>
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      )}
    </>
  );
}

export default Kino;
