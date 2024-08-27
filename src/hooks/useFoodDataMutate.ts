import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/FoodData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const fetchData = async (data: FoodData): AxiosPromise<any>=>{
    const response = axios.post("http://localhost:8080/produto")
    return response;
} 

export function useFoodDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({'food-data'})
        }
    })

    return mutate;
}