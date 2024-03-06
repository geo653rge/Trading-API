import {
    GetTickersParamsV5,
    RestClientV5,
    TickerLinearInverseV5,
} from "bybit-api";

export class Bybit {

    client: RestClientV5;

    constructor(

        BYBIT_API_KEY: string,
        BYBIT_API_SECRET: string,
        testnet: boolean
    ) {

        this.client = new RestClientV5({
            key: BYBIT_API_KEY,
            secret: BYBIT_API_SECRET,
            testnet: true,

        });
    }
    // Get Price Function


    getPrice = async (params: GetTickersParamsV5<"linear">): Promise<TickerLinearInverseV5[] | null> => {
        try {
            const { retCode, result, retMsg } = await this.client.getTickers(params);
    
            if (retCode === 0 && retMsg === "OK" && result) {
                const category = result.category; // Assuming `result` contains `category`
    
                if (category === "linear") {
                    return result.list; // Assuming result.list is already TickerLinearInverseV5[]
                }
            }
        } catch (error) {
            console.log(`Error getting price: ${error}`);
        }
        return null;
    };
    
}    













