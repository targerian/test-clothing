import { createSelector } from "reselect";
import memoize from 'lodash.memoize';


const selectShop = state => state.shop;
export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collections
);
export const selectCollectionOverview = createSelector(
    [selectShopCollection],
    collections => collections? Object.keys(collections).map(key => collections[key]):[]
)


export const selectCollection = memoize(collectionUrlParam => 
createSelector(
    [selectShopCollection],
    collections => collections[collectionUrlParam]))
    //this selector will search passing collection id as an input all the COLLECTION_ID_MAP and returns the collection part of the array where its collection.id === COLLECTION_ID_MAPexact ID