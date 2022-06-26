
var SteamCommunity = require('steamcommunity');



let community = new SteamCommunity();
community.getSteamUser(new SteamCommunity.SteamID('76561197984170060'), (err, user) => {

    if(user.onlineState === 'in-game'){
        console.debug(user.stateMessage);
        var currentGame = user.stateMessage.split(">")[1];
        if(currentGame.length > 0){
            console.log(`User is in-game: ${currentGame}`);
        }
        
    }
    
});
