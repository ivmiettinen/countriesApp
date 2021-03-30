export const images = importAll(
    require.context('../../images', false, /\.(png|jpe?g|svg)$/)
)



function importAll(r) {
    let images = {}
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item)
    })
    return images
}

// export const importAll = (r) => {
//     let images = {}
//     r.keys().map((item, index) => {
//         images[item.replace('./', '')] = r(item)
//     })
//     return images
// }
