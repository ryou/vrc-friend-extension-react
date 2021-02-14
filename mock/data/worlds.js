const makeWorld = (index) => {
  const thumbnailId = 1000 + index
  const thumbnailUrl = `https://picsum.photos/id/${thumbnailId}/500/500`

  return {
    id: `wrld_${index}`,
    name: `World ${index} long name long name long name`,
    imageUrl: thumbnailUrl,
    thumbnailImageUrl: thumbnailUrl,
    capacity: 1 + index,
  }
}

const worlds = []
for (let index = 0; index < 5; index++) {
  worlds.push(makeWorld(index))
}

module.exports = worlds
