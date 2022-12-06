import { createContext, useContext, useEffect, useState } from "react";
import { fetchIP, fetchUserIP } from "./API";
const AppContext = createContext();
const initialState = {
	ip: "____________",
	loc: "____________________",
	time: "_________________",
	isp: "______________________",
};

export const ContextProvider = ({ children }) => {
	const [state, setState] = useState(initialState);
	const [searchTerm, setSearchTerm] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [modal, setModal] = useState({
		modalOpen: false,
		modalContent: "",
	});
	const [userIP, setUserIp] = useState("");
	const errorMessages = ["Input can't be empty....", "Invalid IP"];
	let timeOut;

	const fetchUserIPAddr = async () => {
		try {
			const data = await fetchUserIP();
			setUserIp(data.ip);
			setSearchTerm(data.ip);
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	};

	const fetchIPDetails = async (ip) => {
		setIsLoading(true);
		try {
			const data = await fetchIP(ip);
			if (data.hasOwnProperty("code")) {
				throw errorMessages[1];
			}
			setState({
				ip: data.ip,
				loc: `${data.location.country}, ${data.location.region}`,
				time: `UTC ${data.location.timezone}`,
				isp: data.isp,
				city: data.location.city,
			});
		} catch (error) {
			clearTimeout(timeOut);
			setModal({
				modalOpen: true,
				modalContent:
					typeof error == "string"
						? error
						: "Something went wrong!! Try disabling Ad block",
			});
			timeOut = setTimeout(
				() => setModal({ ...modal, modalOpen: false }),
				5000
			);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		fetchUserIPAddr();
		fetchIPDetails(userIP);
		//eslint-disable-next-line
	}, []);

	return (
		<AppContext.Provider
			value={{
				state,
				fetchIPDetails,
				searchTerm,
				setSearchTerm,
				isLoading,
				modal,
				setModal,
				errorMessages,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
