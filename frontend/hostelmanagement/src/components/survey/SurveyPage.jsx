import styles from "./style.module.css";
import { useState} from "react";

const Main = () => {
    const [data,setdata] = useState({
        usn:"",
        state: "",
        branch: "",
        nature: "",
        sleepEarly: "",
        sportslike: "",
        study: ""
    });
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Hostel Management</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
            <div>
                <h2>Please Complete A Small Survey</h2>  
            </div>
            <div>
                <h5>What is your Nature?</h5>
                <label>Intovert</label>
                <input type = "checkbox" placeholder = "Intovert" name = "intovert" value = "0"></input>
                <label>Extrovert</label>
                <input type = "checkbox" placeholder = "Extrovert" name = "extrovert" value = "1" required></input>
            </div>
		</div>
	);
};

export default Main;