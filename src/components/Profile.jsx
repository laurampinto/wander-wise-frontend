import { useContext } from "react";
import { AuthContext } from "../contexts/Auth.context";
import Navbar2 from "./Navbar-2";

const Profile = () => {
  const ourContext = useContext(AuthContext);
  console.log("here is the name", ourContext);
  return (
    <div>
      <Navbar2 />
      <h2>{ourContext.user.name}'s Profile</h2>
    </div>
  );
};
export default Profile;