import { TContext } from "./context";
import { Resolvers } from "./generated-types";

const resolvers: Resolvers<TContext> = {
    Query: {
        characters: async (_, args, context) => {
            const [chars, nemeses] = await Promise.all([
                context.DB.getCharacters(args.ids),
                context.DB.getNemeses(args.ids)
            ])

            for (let char of chars)
                char.nemeses = nemeses.filter(n => n.character_id === char.id)

            return chars
        },
        character: async (_, args, context) => {
            const [char, nemeses] = await Promise.all([
                context.DB.getCharacterById(args.id),
                context.DB.getNemesesById(args.id)
            ])
            char.nemeses = nemeses
            return char
        },
        average_character_age: (_, __, contenxt) => contenxt.DB.getAverageCharactersAge(),
        average_nemesis_age: (_, __, contenxt) => contenxt.DB.getAverageNemesesAge(),
        average_character_weight: (_, __, contenxt) => contenxt.DB.getAverageCharacterWeight(),
        characters_count: (_, __, contenxt) => contenxt.DB.getCharactersCount()


    },
    Nemesis: {
        id: obj => obj.id,
        character_id: obj => obj.character_id,
        is_alive: obj => obj.is_alive,
        years: obj => obj.years,
        secrets: (obj, _, context) => context.DB.getSecrets(obj.id)
    },
    Secret: {
        id: obj => obj.id,
        nemesis_id: obj => obj.nemesis_id,
        secret_code: obj => obj.secret_code
    }
}

export default resolvers