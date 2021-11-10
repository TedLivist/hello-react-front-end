export const getGreeting = async () => {
  const response = await fetch(`http://localhost:3000/api/v1/greeting.json`)
  return response.json()
}