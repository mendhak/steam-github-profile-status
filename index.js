var SteamCommunity = require('steamcommunity');
var githubProfileStatus = require('github-profile-status');

let community = new SteamCommunity();
community.getSteamUser(new SteamCommunity.SteamID(process.env.STEAM_USER_ID), onGetSteamUser);

function onGetSteamUser(err, user){
    console.debug(user);

    if(user.onlineState === 'in-game'){

        var currentGame = user.stateMessage.split(">")[1]; // Get everything after the <br/>
        if(currentGame.length > 0){
            console.log(`User is in-game: ${currentGame}`);
            setGithubUserProfileStatus(currentGame);
        }
    }
}

function setGithubUserProfileStatus(currentGame){
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