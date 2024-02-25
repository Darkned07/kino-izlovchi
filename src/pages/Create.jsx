import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { toast } from "react-toastify";
import { useAddKino } from "../hooks/useAddKino";
import { useNavigate } from "react-router-dom";
import { useTime } from "../hooks/useTime";

function Create() {
  const navigate = useNavigate();
  const { user } = useGlobalContext();
  const { addKino, isPending, newKino } = useAddKino();
  const { getTime } = useTime();
  const kName = useRef();
  const kDav = useRef();
  const kRasm = useRef();
  const jan = useRef();
  const [janr, setJanr] = useState(["all"]);
  const kOnKo = useRef();
  const kTil = useRef();
  const kYukOne = useRef();
  const kYukTwo = useRef();
  const kTime = useRef();
  const kVid = useRef();

  const handleCreate = (e) => {
    e.preventDefault();
    addKino("kino", {
      name: kName.current.value,
      davlati: kDav.current.value,
      image: kRasm.current.value,
      janri: janr,
      online: kOnKo.current.value,
      tili: kTil.current.value,
      yuklashone: kYukOne.current.value,
      yuklashtwo: kYukTwo.current.value,
      davomiyligi: kTime.current.value,
      trailer: kVid.current.value,
      time: getTime(),
      uid: user.uid,
    });
  };

  const handleJanr = (e) => {
    e.preventDefault();
    const jv = jan.current.value;
    if (!janr.includes(jv)) {
      setJanr((prev) => {
        return [...prev, jv];
      });
    } else {
      toast.error("bu malumot avval kiritilgan!");
    }
    jan.current.value = "";
  };

  useEffect(() => {
    if (!isPending && newKino) {
      navigate("/");
    }
  }, [isPending, newKino]);

  return user &&
    user.email === "kinoizlovchi@gmail.com" &&
    user.displayName === "kinoizlovchi" ? (
    <div className="my-[10px]">
      <h2 className="text-center font-semibold md:text-[30px] text-[25px]">
        Yangi kino qo'shish!
      </h2>
      <form
        onSubmit={handleCreate}
        className="2xl-[800px] xl-[700px] lg:w-[600px] md:w-[400px]  sm:w-[280px] w-[200px] flex flex-col gap-2 my-[10px]"
      >
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Kino nomi</span>
          </div>
          <input
            ref={kName}
            type="text"
            placeholder="Kino nomini kiriting"
            className="input input-bordered w-full max-w-full"
          />
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Kino Davlati</span>
          </div>
          <input
            ref={kDav}
            type="text"
            placeholder="kino davlatini kiriting"
            className="input input-bordered w-full max-w-full"
          />
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Kino Rasmi</span>
          </div>
          <input
            ref={kRasm}
            type="url"
            placeholder="kino rasmini silkasini kiriting"
            className="input input-bordered w-full max-w-full"
          />
        </label>
        <label className="form-control  w-full max-w-xl">
          <div className="label">
            <span className="label-text">Kino Janri</span>
          </div>
          <div className="flex flex-row gap-2">
            <input
              type="text"
              placeholder="kino janrini kiriting"
              className="input input-bordered w-full max-w-full"
              ref={jan}
            />
            <button
              type="button"
              className="btn  btn-secondary"
              onClick={handleJanr}
            >
              Add
            </button>
          </div>
          <div className="label flex flex-row gap-1">
            <span className="label-text">Kino Janri:</span>

            {janr &&
              janr.map((j) => {
                return (
                  <span key={j} className="label-text flex flex-wrap gap-1">
                    {j}
                  </span>
                );
              })}
          </div>
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Kino online korish </span>
          </div>
          <input
            ref={kOnKo}
            type="url"
            placeholder="kinoni online korish uchun silkasini kiriting!"
            className="input input-bordered w-full max-w-full"
          />
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Kino tili</span>
          </div>
          <input
            ref={kTil}
            type="text"
            placeholder="kino tilini kiriting"
            className="input input-bordered w-full max-w-full"
          />
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Kino yuklash 1</span>
          </div>
          <input
            ref={kYukOne}
            type="url"
            placeholder="Kinoni telegram silkasini kiriting"
            className="input input-bordered w-full max-w-full"
          />
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Kino yuklash 2</span>
          </div>
          <input
            ref={kYukTwo}
            type="url"
            placeholder="kino yuklash uchun silka"
            className="input input-bordered w-full max-w-full"
          />
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Kino Vaqti</span>
          </div>
          <input
            ref={kTime}
            type="text"
            placeholder="kino vaqtini kiriting"
            className="input input-bordered w-full max-w-full"
          />
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Kino traileri</span>
          </div>
          <input
            ref={kVid}
            type="url"
            placeholder="kino trailerini silkasi"
            className="input input-bordered w-full max-w-full"
          />
        </label>
        <div>
          <button className="w-full btn btn-outline btn-dark ">
            kino qo'shish
          </button>
        </div>
      </form>
    </div>
  ) : (
    <h2>Siz admin emassiz!</h2>
  );
}

export default Create;
