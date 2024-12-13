const prepareDataFromQuery  = (records) => {
    return records.map(({keys,_fields})=>({
        [keys[0]]:_fields[0], [keys[1]]:_fields[1], [keys[2]]:_fields[2]
    }))
}

module.exports = {prepareDataFromQuery}