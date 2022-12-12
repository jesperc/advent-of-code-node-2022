const renderMap = (map) => {
    const keys = Object.keys(map)
    for (let y = keys.length - 1; y >= 0; y--) {
        let row = ""
        for (let x = 0; x < Object.keys(map[y]).length; ++x) {
            row += map[y][x]
        }
        console.log(row)
    }
}

module.exports = renderMap