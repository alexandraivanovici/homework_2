function addTokens(input, tokens) {
    if (typeof input !== 'string') {
        throw Error("Invalid input")
    }

    if (input.length < 6) {
        throw Error("Input should have at least 6 characters")
    }

    if (!tokens[0].hasOwnProperty('tokenName') || typeof tokens[0].tokenName !== 'string') {
        throw Error("Invalid array format")
    }

    if (!input.includes("...")) {
        return input;
    }

    let j = 0
    while (input.includes("...")) {
        input = input.replace('...', '${' + tokens[j].tokenName + '}')
        j++
    }
    return input;
}

const app = {
    addTokens: addTokens
}

module.exports = app;