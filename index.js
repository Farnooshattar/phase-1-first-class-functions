function receivesAFunction(cb)
{
    return cb()
}
//receivesAFunction(function(){return 0})
function  returnsANamedFunction()
{
    return (function foo(){return 0})
}
function returnsAnAnonymousFunction()
{
     return (function(){return 0})
}