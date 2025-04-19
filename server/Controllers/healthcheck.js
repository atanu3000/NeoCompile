import { ApiResponse } from "../Utils/ApiResponse.js";

export const healthCheck = async(req, res) => {
    return res
        .status(200)
        .json(new ApiResponse( 200, "OK", "NeoCompile server is running" ));
}