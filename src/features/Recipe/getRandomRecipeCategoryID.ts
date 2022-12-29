import CATEGORYID from 'data/recipe/categoryID'

const getRandomRecipeCategoryID = (): string => {
  const categoryIDList = CATEGORYID
  const categoryIDListLength = categoryIDList.length
  const categoryID =
    categoryIDList[Math.floor(Math.random() * categoryIDListLength)]

  return categoryID
}

export default getRandomRecipeCategoryID
