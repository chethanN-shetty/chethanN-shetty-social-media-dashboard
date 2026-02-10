const BASE_URL = "http://127.0.0.1:8000";

export async function fetchComparison(user, competitor) {
  const response = await fetch(
    `${BASE_URL}/compare?user=${user}&competitor=${competitor}`
  );
  return response.json();
}
