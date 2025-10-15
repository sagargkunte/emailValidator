export const checkApiKey = (req,res,next) => {
    const apiKey = req.query.apiKey;

    const validKey = "API_KEY_GOES_HERE";
    if(!apiKey || (validKey != apiKey)) return res.status(403).json({message:"Forbidden: Invalid Api Key"});

    next();
}
