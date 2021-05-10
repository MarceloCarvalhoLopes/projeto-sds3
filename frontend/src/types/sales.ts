import { type } from "node:os"

export type SalesSum =  {
    sellerName: string;
    sum: number;
}

export type SalesSuccess = 
{
    sellerName : string;
    visited: number;
    deals: number;  
}