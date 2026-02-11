const BASE_URL = "https://chethann-shetty-social-media-dashboard.onrender.com";

export async function fetchComparison(user, competitor) {
  const response = await fetch(
    `${BASE_URL}/compare?user=${user}&competitor=${competitor}`
  );
  return response.json();
}
