const makeUrl = (base, params) => {
    const queryString = Object.keys(params)
        .map(key => key + "=" + params[key])
        .join("&")

    return `${base}?${queryString}`
}

export default makeUrl
