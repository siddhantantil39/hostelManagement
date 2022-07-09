import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/survey/SurveyPage";
import Signup from "./components/signup/SignupPage";
import Login from "./components/login/LoginPage";
import RoomrecommendPage from "./components/roomrecommend/RoomrecommendPage";
import ProfilePage from './components/profile/ProfilePage'
import PaymentPage from './components/PaymentPage'
import Testpaymentpage from "./components/Testpaymentpage"



function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/payment" exact element={<PaymentPage />} />
			<Route path="/test" exact element={<Testpaymentpage />} />
			<Route path="/recommended" exact element={<RoomrecommendPage />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/profile" exact element={<ProfilePage />} />

		</Routes>
	);
}

export default App;