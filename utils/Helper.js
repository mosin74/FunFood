
export function filterData(searchText, restaurants) {
    const Data = restaurants.filter((restaurant) => restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
    return Data;
}


