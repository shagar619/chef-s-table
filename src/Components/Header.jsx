import { FaRegUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Header = () => {
    return (
        <nav className="w-11/12 mx-auto flex flex-col md:flex-row md:justify-between items-center my-8 space-y-4">

        <h1 className="text-[#150B2B] text-2xl font-bold">Recipe Calories</h1>

        <ul className="flex gap-6 text-gray-500 text-base font-normal">
            <li><a href="">Home</a></li>
            <li><a href="">Recipes</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Search</a></li>
        </ul>

        <div className="flex items-center gap-4">
        <div>
        <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
        </div>

        <div className="bg-green-500 h-12 w-12 rounded-full flex items-center justify-center">
            <FaRegUserCircle></FaRegUserCircle>
        </div>
        </div>
            
        </nav>
    );
};

export default Header;