import { apiURL } from "../data"

export const getTopCompetitions = async (setState, limit, setLoading, setEmpty, setError) => {
    setLoading(true)
    setEmpty(false)
    setError(false)
    try {
        const response = await fetch(`${apiURL}/competition?action=getTopCompetitions&limit=${limit}`)
        if( response.status !== 200 ) throw 'Could not fetch matches!';
        const data = await response.json()
        setEmpty(data.length <= 0)
        setState(data)
        setLoading(false)
    } catch (error) {
        setError(true)
        setLoading(false)
        console.log('error: ', error)
    }
}

export const getMatches = async (setState, filter, setLoading, setEmpty, setError) => {
    setLoading(true)
    setEmpty(false)
    setError(false)
    try {
        const response = await fetch(`${apiURL}/match?action=getAllMatches&option=${filter}`)
        if( response.status !== 200 ) throw 'Could not fetch live matches';
        const data = await response.json();
        setEmpty(data.length <= 0)
        setState(data)
    } catch (error) {
        setError(true)
        console.log('error: ', error)
    }
    setLoading(false)
}