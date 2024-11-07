import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const MenuCard = ({ recipe, addwantTocook }) => {
  return (
    <div className="shadow rounded border">
      <div>
        <img
          src={recipe.Recipeiamge}
          className="w-full px-1 sm:px-10 py-3 sm:py-3 h-48 object-cover rounded-[15%]"
          alt=""
        />
        <div className="mx-9">
          <h3 className="text-lg my-4 font-semibold">{recipe.Recipe_name}</h3>

          <p className="text-gray-500">{recipe.Short_description}</p>
          <hr className="my-4" />
          <h2 className="my-4 font-semibold">Ingredients: 6</h2>
          <ul className="text-gray-500">
            <li>
              <span className="dot mb-1"></span> {recipe.Ingredients[0]}
            </li>
            <li>
              <span className="dot mb-1 "></span> {recipe.Ingredients[1]}
            </li>
            <li>
              <span className="dot mb-1"></span> {recipe.Ingredients[2]}
            </li>
          </ul>
          <hr className="my-4" />
          <span className="text-gray-500">
            <FontAwesomeIcon icon={faClock} /> {recipe.Preparing_time}
          </span>
          <span className="text-gray-500 ">
            <FontAwesomeIcon icon={faFire} className="ml-5" /> {recipe.Calories}
          </span>
          <div className="text-black my-4 text-sm ">
            <button
              onClick={() => addwantTocook(recipe)}
              className="btn bg-green-400 text-sm sm:text-lg font-semibold px-4 py-2  rounded-full"
            >
              Want to cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
MenuCard.propTypes = {
  recipe: PropTypes.object,
  addwantTocook: PropTypes.func,
};
export default MenuCard;
