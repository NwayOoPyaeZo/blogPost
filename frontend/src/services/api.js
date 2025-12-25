const API_BASE_URL = "http://localhost:5000";

export const fetchPosts = async () => {
	const response = await fetch(`${API_BASE_URL}/posts`);

	if (!response.ok) {
		throw new Error("Failed to fetch posts");
	}

	return response.json();
};
