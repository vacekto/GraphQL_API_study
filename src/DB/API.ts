import { Character, Nemesis, Secret } from "../graphql/generated-types"
import { client } from "./util"

/**
 * @param charIds list of character ids to search by, searches for all nemeses if charIds is not provided
 */

export const getCharacters = async (charIds?: number[] | null) => {
    const query = charIds ?
        `SELECT * FROM character WHERE id = ANY($1);` :
        'SELECT * FROM character;'

    const args = charIds ? [charIds] : []
    const res = await client.query<Character>(query, args)
    return res.rows
}

/**
 * @param charIds list of character ids to search by, searches for all nemeses if charIds is provided
 */
export const getNemeses = async (charIds?: number[] | null) => {
    if (charIds?.length === 0) return []
    const args = charIds ? [charIds] : []
    const query = charIds ?
        `SELECT * FROM nemesis WHERE character_id = ANY($1);` :
        'SELECT * FROM nemesis;'

    const res = await client.query<Nemesis>(query, args)
    return res.rows
}

export const getCharacterById = async (character_id: number) => {
    const query = `SELECT * FROM character WHERE id = $1 LIMIT 1;`
    const res = await client.query<Character>(query, [character_id])
    return res.rows[0]
}

export const getNemesesById = async (character_id: number): Promise<Nemesis[]> => {
    const query = `SELECT * FROM nemesis WHERE character_id = $1;`
    const res = await client.query(query, [character_id])
    return res.rows
}

export const getSecrets = async (nemesis_id: number): Promise<Secret[]> => {
    const query = `SELECT * FROM secret WHERE id = $1 ;`
    const res = await client.query(query, [nemesis_id])
    return res.rows
}

export const getAverageCharactersAge = async () => {
    const query = `SELECT AVG(EXTRACT(YEAR FROM AGE(born))) AS avg FROM character;`
    const res = await client.query<{ avg: string }>(query)
    return Number(res.rows[0].avg)
}

export const getAverageNemesesAge = async () => {
    const query = `SELECT AVG(years) AS avg FROM nemesis;`
    const res = await client.query<{ avg: string }>(query)
    return Number(res.rows[0].avg)
}

export const getAverageCharacterWeight = async () => {
    const query = `SELECT AVG(weight) AS avg FROM character;`
    const res = await client.query<{ avg: string }>(query)
    return Number(res.rows[0].avg)
}

export const getCharactersCount = async () => {
    const query = `SELECT COUNT(*) AS count FROM character;`
    const res = await client.query<{ count: string }>(query)
    return Number(res.rows[0].count)
}


