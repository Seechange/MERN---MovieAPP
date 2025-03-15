import AuthScreen from "../components/AuthScreen";
import HomeScreen from "../components/HomeScreen";
import { useAuthStore } from "../store/useAuthStore";

const HomePage = () => {
  const { user } = useAuthStore();
  console.log("check usser : ", user);
  return <div>{user ? <HomeScreen /> : <AuthScreen />}</div>;
};

export default HomePage;
