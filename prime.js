let num=13;
let count=1;
    for(let i=1;i<=num;i++)
    {
        if(num%i==1)
        {
            count++
        }
    }
    if(count==1)
    {
       console.log(Yes)
    }
    else
    {
        console.log("No")
    }