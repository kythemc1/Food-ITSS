export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }
    //Get JWT token
    
    fetch('https://food-monster-server.vercel.app/jwt',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res=> res.json())
    .then(data=>{
        localStorage.setItem('FoodMonster', data.token);
    })
}