import { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipe = () => {
  const [addCurrentlycook, SetCurrentlyCook] = useState([]);
  const [addCooks, SetaddCooks] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [num, Setnum] = useState(0);
  const [show, Setshow] = useState(false);
  const [showtime, SetShowTime] = useState([]);
  const [showCal, SetshowCal] = useState([]);
  const calculateTotals = (list) => {
    let totalTime = 0;

    list.forEach((recipe) => {
      const time = parseInt(recipe.Preparing_time.split(" ")[0]);
      totalTime += time;
    });
    return totalTime;
  };
  const calculateCal = (Calorirecipe) => {
    let totalCal = 0;
    Calorirecipe.forEach((recipe) => {
      const calaories = parseInt(recipe.Calories.split(" ")[0]);
      totalCal += calaories;
    });
    return totalCal;
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
      });
  }, []);

  const addwantTocook = (recipe) => {
    const newAdd = [...addCooks, recipe];
    if (newAdd.length !== 1) {
      toast.error("Select only one");
      return;
    }
    SetaddCooks(newAdd); // console.log(newAdd);
  };

  const addCurrently = (recipe) => {
    const oldadd = [...addCurrentlycook, recipe];

    SetCurrentlyCook(oldadd);
    SetaddCooks([]);
    Setnum(num + 1);
    Setshow(!show !== 1);
    SetShowTime(calculateTotals(oldadd));
    SetshowCal(calculateCal(oldadd));
  };
  return (
    <div className="mt-10 md:mx-32">
      <h1 className="text-center text-4xl font-bold">Our Recipe</h1>
      <p className="text-center mt-5 sm:text-base text-sm">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget
        <br /> urna volutpat curabitur elementum mauris aenean neque.
      </p>
      <div className="flex justify-between gap-2">
        <div className="w-2/3 sm:w-2/3 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {recipes.slice(0, 6).map((recipe) => (
            <MenuCard
              addwantTocook={addwantTocook}
              recipe={recipe}
              key={recipe.Recipe_id}
            />
          ))}
        </div>
        <div className=" shadow rounded border w-2/3 md:w-2/3 lg:w-1/3 sm:w-2/3 relative ">
          {addCooks.map((cook, i) => (
            <div key={i}>
              <h2 className="text-center my-4 font-bold text-xl">
                Want to cook: 01
              </h2>
              <hr className="mx-8 my-5" />
              <div className="bg-slate-50 text-slate-600">
                <span className="absolute top-[117px] sm:block ml-2 hidden">
                  1
                </span>
                <ul className="mx-4 sm:mx-8 sm:text-base gap-1  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 sm:grid-cols-4 text-xs">
                  <li>
                    <li className="mb-2 font-bold ">Name</li>
                    <li> {cook.Recipe_name}</li>
                  </li>
                  <li>
                    <li className="mb-2 font-bold ">Time</li>
                    <li>{cook.Preparing_time}</li>
                  </li>
                  <li>
                    <li className="mb-2 font-bold ">Calories</li>
                    <li>{cook.Calories}</li>
                  </li>
                  <li>
                    <button
                      onClick={() => addCurrently(cook)}
                      className="btn bg-green-400 font-semibold text-black px-4 my-6 py-2 rounded-full"
                    >
                      preparing
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ))}
          <div>
            <div>
              <div>
                {show && (
                  <div>
                    <h2 className=" text-center my-4 font-bold text-xl">
                      Currently cooking: 0{num}
                    </h2>
                    <hr className="mx-8 my-5" />
                  </div>
                )}
                {addCurrentlycook
                  .filter((cooking) => {
                    return cooking.Recipe_id;
                  })
                  .map((cooking, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 relative text-slate-600"
                    >
                      <span className="absolute top-[35px] sm:block ml-2 hidden">
                        1
                      </span>
                      <ul className="mx-4 sm:mx-8 gap-5 grid grid-cols-3 text-xs sm:text-base">
                        <li>
                          <li className="mb-2 font-bold ">Name</li>
                          <li> {cooking.Recipe_name}</li>
                        </li>
                        <li>
                          <li className="mb-2 font-bold ">Time</li>
                          <li>{cooking.Preparing_time}</li>
                        </li>
                        <li>
                          <li className="mb-2 font-bold ">Calories</li>
                          <li>{cooking.Calories}</li>
                        </li>
                      </ul>
                    </div>
                  ))}
              </div>
              {show && (
                <div className="grid grid-flow-col gap-2 float-right pr-7 sm:gap-0 sm:grid-cols-none md:grid-cols-2  lg:grid-cols-2 sm:mx-0 mx-4 sm:text-base text-xs text-slate-500 mt-4 ">
                  <div>
                    <h2>
                      Total Time = <br />
                      {showtime} Min
                    </h2>
                  </div>
                  <div>
                    <h2>
                      Total Calaories = <br /> {showCal} Calaories
                    </h2>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
