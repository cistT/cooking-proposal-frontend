import CATEGORYID from 'consts/categoryID'

export const getRandomRecipeCategoryID = () => {
  const categoryIDList = CATEGORYID
  const categoryIDListLength = categoryIDList.length
  const categoryID =
    categoryIDList[Math.floor(Math.random() * categoryIDListLength)]

  return categoryID
}
