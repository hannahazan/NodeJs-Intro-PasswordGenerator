console.log("Node rocks!")
    import ansicolor from 'ansicolor'
    import clipboard from 'clipboardy';
    import yargs from 'yargs'
    import { hideBin } from 'yargs/helpers'
    const arg = yargs(hideBin(process.argv)).argv
    let password=""

    function passwordDisplayed(password)
    {   
        if(!arg.c)
        {
            if(arg.s)
            {   
                for(let j=0;j<password.length;j++)
                {
                    if(password[j]>="0" && password[j]<="9")
                    {
                       process.stdout.write(ansicolor.red(password[j]))
                    }
                    if((password[j]>='!'&& password[j]<='/')||(password[j]>=':'&& password[j]<='@')
                    ||(password[j]>='\\'&& password[j]<='`')||(password[j]>='{'&& password[j]<='~'))
                    {
                        process.stdout.write(ansicolor.blue(password[j]))
                    }
                    else
                    {
                       process.stdout.write(password[j])
                    }
                }
                process.stdout.write("\n")   
            }  
        }
        
        else
        {
            
            clipboard.write(password)
        }
    }
    
    function passwordGenerator(length) //une fonction qui génère un password avec un nombre de caracteres en paramètre
    {
        let possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let possibleNumbers="0123456789";
        let possibleSymbols="/.,?§!*$}=+])°@^_`|-[({'#\"~&%#";
       
      
        if(arg.lengthArg)
        {   
            length = arg.lengthArg
            let indexAleatoireNumber= Math.floor(Math.random() *length)
            let indexAleatoireSymbol= Math.floor(Math.random() *length)
            for(let i = 0;i < arg.lengthArg; i++)
            {
                
                if (arg.s && i==indexAleatoireNumber)
                {
                    password += possibleNumbers.charAt(Math.floor(Math.random() * possibleNumbers.length))   
                }
                if (arg.s && i==indexAleatoireSymbol)
                {
                    password += possibleSymbols.charAt(Math.floor(Math.random() * possibleSymbols.length))
                } 
                password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length))    
            }
        }
        else
        {   
            let indexAleatoireNumber= Math.floor(Math.random() *length)
            let indexAleatoireSymbol= Math.floor(Math.random() *length)
            for(let i = 0;i < length; i++)
            {
                if (arg.s && i==indexAleatoireNumber)
                {
                    password += possibleNumbers.charAt(Math.floor(Math.random() * possibleNumbers.length))   
                }
                if (arg.s && i==indexAleatoireSymbol)
                {
                    password += possibleSymbols.charAt(Math.floor(Math.random() * possibleSymbols.length))
                } 
                password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
            }
        }  
    }

    passwordGenerator(8)
    passwordDisplayed(password)


  
  
