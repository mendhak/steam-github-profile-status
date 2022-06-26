var SteamCommunity = require('steamcommunity');
var githubProfileStatus = require('github-profile-status');

let community = new SteamCommunity();
community.getSteamUser(new SteamCommunity.SteamID('76561197962020667'), (err, user) => {
    console.debug(user);

    if(user.onlineState === 'in-game'){

        var currentGame = user.stateMessage.split(">")[1];
        if(currentGame.length > 0){
            console.log(`User is in-game: ${currentGame}`);
            const profileStatus = new githubProfileStatus.GitHubProfileStatus({
                token: process.env.GITHUB_ACCESS_TOKEN,
            });

            var expiresAt = new Date();
            expiresAt.setHours(expiresAt.getHours() + 1);

            profileStatus.set({
                emoji: ':video_game:',
                message: currentGame,
                limitedAvailability: true,
                expiresAt: expiresAt,
            }).then((stat) => {
                console.log(stat);
            });

        }
        
    }
    
});
