export const getPeople = async () => {
    const res = await fetch('https://swapi.dev/api/people')
    const data = await res.json()
    return data
}

export const getCharacter = async (id) => {
    const res = await fetch(`https://swapi.dev/api/people/${ id }/`)
    const data = await res.json()
    console.log(id)
    return data
}