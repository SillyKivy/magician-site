/*
    display(parameter.html) - megjeleníti a weboldalt-t
    handleWrongData - a rosszul megadott adatot kezeljük le
*/


function display(req, res, next, site, data){
    res.render(site, data)
    return next()
}

function handleWrongData(req, res, next){

}
