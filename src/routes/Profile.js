import { authService } from "fbase";
import { useHistory } from "react-router-dom";

const Profile = () => {
    const history = useHistory();
 
    const OnLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };

 return (
    <>
        <button onClick={OnLogOutClick}>Log Out</button>
    </>
 );
};

export default Profile;