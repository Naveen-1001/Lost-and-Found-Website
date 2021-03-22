const get_homepage=(req,res)=>{
    res.render('Homepage');
}

const get_login=(req,res)=>{
    res.render('login',{qs:req.query});
}

const post_login=(req,res)=>{
    res.render('available_items',{details: req.body});
}

const get_signup=(req,res)=>{
    res.render('signup');
}

const post_signup=(req,res)=>{
    res.render('login', {details: req.body});
}

const get_report=(req,res)=>{
    res.render('report');
}

const post_report=(req,res)=>{
    res.render('report_success',{data: req.body});
}

const get_Available_items=(req,res)=>{
    res.render('available_items',{qs:req.query});
}

const post_Available_items=(req,res)=>{
    res.render('Homepage',{data: req.body});
}

module.exports={
    get_homepage,
    get_login,
    get_Available_items,
    get_report,
    get_signup,
    post_Available_items,
    post_login,
    post_report,
    post_signup
}