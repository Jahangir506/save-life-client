import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogle = ()=> {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res=> {
                console.log(res.data);
                navigate('/')
            })
        })
    }

  return (
    <>
      <div>
        <button onClick={handleGoogle} className="btn">
          <FaGoogle />
          Button
        </button>
      </div>
    </>
  );
};
export default SocialLogin;
