import knex from "../knex"

const getPartner = user_id => {
    return knex
        .select("user_id_right")
        .from("pairs")
        .where("user_id_left", user_id)
}

export default getPartner
