const getAllTests = async () => {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || ''
    const endpoint = `${API_URL}/admin/test`
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      console.error(
        'API call failed with status:',
        response.status,
        response.statusText
      )
      return [] // Return an empty array if the response is not ok
    }
  } catch (error) {
    console.error(error)
    return [] // Return an empty array in case of error
  }
}

export default getAllTests
