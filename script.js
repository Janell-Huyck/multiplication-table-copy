function createVariables()
{
    for ( i=0; i<=20; i++ )
    {
        var str ="account"+ i+" = undefined";
        //Declaring and Setting dynamic variable to undefined using eval
        eval(str);
    }
}
createVariables();