

export const isAuthenticated = (req, res, next) =>{
    const token = req.cookies["connect.sid"];

    if(!token){
        return next(new Error("Not Logged In", 401));
    }

    next();
}

export const authorizeAdmin = (req, res, next) =>{
    
    if(req.user.role !== "admin"){
        return next(new Error("only admin allowed", 405));
    }

    next();
}