import knex from "../knex"

const getPartner = async user_id => {
    const group = await knex
        .select("group_id")
        .from("users_to_groups")
        .where("user_id", user_id)

    const group_id = group[0].group_id

    const partner_id = await knex
        .select("user_id")
        .from("users_to_groups")
        .where("group_id", group_id)
        .whereNot("user_id", user_id)

    return partner_id
}

export default getPartner

// select from users_to_groups
