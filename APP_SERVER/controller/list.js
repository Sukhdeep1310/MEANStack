/*phoneArray=[{name: "Apple iphone", model: "11 pro max"},{name: "Samsung", model:"S9"},{name: "Apple iphone", model:"11 pro"}];
const phoneList = function(req,res){
    res.render('list-display', {title : 'Phone List',phones:phoneArray});
};

module.exports = {phoneList };*/
var request=require('request');
var apiOptions = {
    server: 'http://localhost:3000'
};

const _renderHomepage= function(req,res,responseBody){
    res.render('list-display',{
        movies: responseBody
    });
};
const homelist= function(req,res){
    const path= '/api/movies';
    const requestOptions= {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };

    request(
        requestOptions,(err,response,body)=>{
            _renderHomepage(req,res,body);
        }
    );
};

const _renderDetailPage= function(req,res,responseBody){
    res.render('display',{
        currentMovies:responseBody
    });
};

const movieInfo= function(req,res){
    const path= `/api/movies/${req.params.movieid}`;
    const requestOptions ={
        url: apiOptions.server + path ,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,(err, response, body)=>{
            _renderDetailPage(req,res,body)
        }
    );
};

const _renderCreatePage=function(req,res){
    res.render('create-new-movie',{
        title:"Add New Movie"
    });
};
const addNewMovie=function(req,res){
    _renderCreatePage(req,res)
};

const doAddNewMovie=function(req,res){
    const path='/api/movies';
    const postdata= {
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        starcast: req.body.starcast,
        language:req.body.language,
        description:req.body.description
    };
    const requestOptions={
        url: apiOptions.server+path,
        method: 'POST',
        json: postdata
    };
    request(
        requestOptions,(err, response, body)=> {
            if(response.statusCode === 201){
                res.redirect('/list');
            }
        }
    );
};


module.exports = { homelist, movieInfo, doAddNewMovie, addNewMovie };