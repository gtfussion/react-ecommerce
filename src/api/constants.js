export const BASEURL='https://dummyjson.com'

export const URL={
    getProducts :`${BASEURL}/products`,
    getProductsByCat:(cat)=>`${BASEURL}/products/category/${cat}`,
    getProductDetail:(id)=>`${BASEURL}/products/${id}`
}