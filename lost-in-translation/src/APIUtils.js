
const apiUrl = 'https://lostintranslation-lb-api.glitch.me';

/**
 * Gets a user from the API.
 * @param  {[string]} username of the user
 * @return {[object]} {ok, response}
 */
export async function getUser(username){
    try{
        const result = await fetch(`${apiUrl}/translations?username=${username}`);
        const jsonResult = await result.json();

        if(result.ok && jsonResult.length > 0)
        {
            //user found, return first
            return {'ok': true, 'response': jsonResult[0]};
        }
    }
    catch(error)
    {
        console.log(error);
        return {'ok': false, 'response': null};
    }

    return {'ok': false, 'response': null};
}

/**
 * Authorizes a user.
 * @param  {[string]} username of the user
 * @return {[boolean]} true if authorized, false if not
 */
export async function authorize(username)
{
    const result = await getUser(username);
    return result.ok;
}

/**
 * Creates a user and posts it to the API.
 * @param  {[string]} username , user to create
 * @return {[object]} {ok, id}
 */
export async function createNewUser(username)
{
    const apiKey = 'noA+jgBPTEaCgn63IMJlGw==';

    create();

    async function create(){
        try{
        const result = await fetch(`
            ${apiUrl}/translations`, 
            {
                method: 'POST',
                headers: {
                'X-API-Key': apiKey,
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    username: username, 
                    translations: [] 
                })
            });

            if(result.ok)
            {
                console.log("user " + username + " created successfully!");

                const jsonResult = await result.json();
                return {ok:true, id:jsonResult.id};
            }
            else
            {
                console.log("failed to create user: " + username + "!");
            }
        }
        catch(error)
        {
            console.log(error);
        }
    }
}

/**
 * Creates a user and posts it to the API.
 * @param  {[string]} username to update
 * @param  {[Array]} translations to insert
 * @return {[object]} {ok, id}
 */
export async function updateUser(username, translations){
    const apiKey = 'noA+jgBPTEaCgn63IMJlGw==';

    await update();

    async function update(){

        const getUserResult = await getUser(username);                

        if(getUserResult.ok)
        {
            const arr = getUserResult.response.translations;
            arr.push(translations);

            const result = await fetch(`${apiUrl}/translations/${getUserResult.response.id}`, {
                method: 'PATCH',
                headers: {
                    'X-API-Key': apiKey,
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    translations: arr
                })
            });

            if(result.ok)
            {
                console.log(username + " successfullt updated!");
            }
            else
            {
                console.log(username + " failed to update!");
            }
        }
        else
        {
            console.log("User " + username + " does not exist!");
        }
    }
}

export async function deleteTranslationHistory(username)
{
    const apiKey = 'noA+jgBPTEaCgn63IMJlGw==';

    await update();

    async function update(){

        const getUserResult = await getUser(username);                

        if(getUserResult.ok)
        {
            const result = await fetch(`${apiUrl}/translations/${getUserResult.response.id}`, {
                method: 'PATCH',
                headers: {
                    'X-API-Key': apiKey,
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    translations: []
                })
            });

            if(result.ok)
            {
                console.log(username + " successfully deleted history!");
            }
            else
            {
                console.log(username + " failed to delete history!");
            }
        }
        else
        {
            console.log("User " + username + " does not exist!");
        }
    }
}