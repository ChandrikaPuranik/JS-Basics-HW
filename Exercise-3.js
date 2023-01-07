//3 write a function that returns boolean flag if a number is between 5000 and 9999

function isBoolean(num)
    {
    if (num>5000 && num<9999)
    return true;
    else
    return false;
    }
    console.log(isBoolean(10000))

    function isBoolean(num)
    {
    if (num>5000 && num<9999)
    return true;
    else
    return false;
    }
    console.log(isBoolean(6000))

    //4 write a function that accepts a number and returns the cube root of the number
           
    function cuberoot(x)
    {
    return Math.cbrt(x, 1/3)
    }
    console.log(cuberoot(55))