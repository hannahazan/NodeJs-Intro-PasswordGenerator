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
                if(password[0]>="0" && password[0]<="9")
                {
                    console.log(ansicolor.red(password[0])+password.slice(1))
                }
                else
                {
                    console.log(ansicolor.blue(password[0])+password.slice(1)) 
                }
            }
            else
            {
                    console.log(password)
            }

        }
        
        else
        {
            if(arg.s)
            {   
                 if(password[0]>="0" && password[0]<="9")
                 {
                    clipboard.write(ansicolor.red(password[0]))
                 }
                elses
                {
                    clipboard.write(ansicolor.blue(password[0])) 
                }
            }
            clipboard.write(password)
        }
    }
    
    function passwordGenerator(length) 
    {
        let possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let possibleNumbers=`0123456789/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/`;
      
        if(arg.lengthArg)
        {
            length = arg.lengthArg
            for(let i = 0;i < arg.lengthArg; i++)
            {
                
                if (arg.s && i==0)
                {
                    password += possibleNumbers.charAt(Math.floor(Math.random() * possibleNumbers.length))
                   
                } 
                password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
            }
            
        }
        else
        {
            for(let i = 0;i < length; i++)
            {
                
                if (arg.s && i==0)
                {
                    password += possibleNumbers.charAt(Math.floor(Math.random() * possibleNumbers.length))
                    
                } 
                password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
            }
        }
        
    }

    passwordGenerator(10)
    passwordDisplayed(password)
  
  
