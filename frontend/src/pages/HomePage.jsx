import AuthScreen from "../components/AuthScreen";
import HomeScreen from "../components/HomeScreen";
import { useAuthStore } from "../store/useAuthStore";

const HomePage = () => {
  const { user } = useAuthStore();
  return <div>{user ? <HomeScreen /> : <AuthScreen />}

  </div>;
};

export default HomePage;
