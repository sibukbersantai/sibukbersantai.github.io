// Using JSON files from GitHub repository
export const fetchJson = async (filePath) => {
  const response = await fetch(filePath)
  if (!response.ok) {
    throw new Error(`Failed to load ${filePath}`)
  }
  return response.json()
}
