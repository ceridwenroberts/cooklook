const api = 'https://www.themealdb.com/api/json/v1/1'
export const fetchRecipeById = async (id: string) => {
	try {
		const response = await fetch(`${api}/lookup.php?i=${id}`)
		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`)
		}
		return response.json()
	} catch (error) {
		console.error(`Error fetching recipe with ID ${id}:`, error)
		throw error
	}
}

export const fetchCategories = async () => {
	try {
		const response = await fetch(`${api}/categories.php`)
		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`)
		}
		return response.json()
	} catch (error) {
		console.error('Error fetching categories:', error)
		throw error
	}
}

export const fetchByCategory = async (category: string) => {
	try {
		const response = await fetch(`${api}/filter.php?c=${category}`)
		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`)
		}
		return response.json()
	} catch (error) {
		console.error('Error fetching random recipe:', error)
		throw error
	}
}

export const fetchRandom = async () => {
	try {
		const response = await fetch(`${api}/random.php`)
		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`)
		}
		return response.json()
	} catch (error) {
		console.error('Error fetching random recipe:', error)
		throw error
	}
}
