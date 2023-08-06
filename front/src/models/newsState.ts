import { News } from "./type";


export type NewsState = {
    newsList: News[];
    currentTopic: string;
    loading: boolean;
    error: string | null
}