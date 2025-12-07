export interface ProductType{
    id:number;
    title:string;
    description:string;
    price:number;
    rating:number;
    tags:string[];
    subject:SubjectType,
    images:string[],
    brand:string,
    discountPercentage:number
}


type SubjectType="Computer"|"Science"|"S"

export interface FilterType{
 category: string;
    color: string;
    size: string;
    rating: number;
    searchText: string
}