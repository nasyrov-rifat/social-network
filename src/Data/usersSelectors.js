export const usersSelector = (state) => {
    return state.usersPage.users
}
export const pageSizeSelector = (state) => {
    return state.usersPage.pageSize
}
export const totalCountSelector = (state) => {
    return state.usersPage.totalCount
}
export const currentPageSelector = (state) => {
    return state.usersPage.currentPage
}
export const isFetchingSelector = (state) => {
    return state.usersPage.isFetching
}