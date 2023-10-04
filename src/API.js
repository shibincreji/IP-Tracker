const URL =
	"https://geo.ipify.org/api/v1?apiKey=at_v7XSsB0jCeNUTTUOl2YK1JNGkhKLO&ipAddress=";

export const fetchIP = async (ip) => {
	const resp = await fetch(`${URL}${ip}`);
	const data = await resp.json();
	return data;
};

export const fetchUserIP = async () => {
	const resp = await fetch("https://api.ipify.org/?format=json");
	const data = await resp.json();
	return data;
};

