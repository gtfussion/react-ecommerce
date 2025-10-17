export const BASEURL='https://dummyjson.com'

export const URL={
    getProducts :`${BASEURL}/products`,
    getProductsByCat:(cat)=>`${BASEURL}/products/category/${cat}`,
    getProductDetail:(id)=>`${BASEURL}/products/${id}`
}


export const users = [
{
    name:'Prashant',
    email:"xyza@gmail.com",
    password:"12345",
    token:'adjfklj4lw;34rj9difnfoai03fp30fodsnojf3'
},
{
    name:'Sushant',
    email:"xyzb@gmail.com",
    password:"12345",
    token:'kajsdf78njoshdf;5+551654affe;34rj9difnfoai03fp30fodsnojf3'

},{
    name:'Rashant',
    email:"xyzc@gmail.com",
    password:"12345",
        token:'kajsdf78njoshdf;5+551654affe;dfasdsdfsdfsdfsdfsefwefwf23fe'

},
]