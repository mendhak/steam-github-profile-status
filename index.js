var SteamCommunity = require('steamcommunity');
var githubProfileStatus = require('github-profile-status');

let community = new SteamCommunity();
community.getSteamUser(new SteamCommunity.SteamID(process.env.STEAM_USER_ID), onGetSteamUser);

let showAsBusy = String(process.env.GITHUB_STATUS_SHOW_BUSY || "false")
showAsBusy = showAsBusy.toLowerCase() === 'true'

function onGetSteamUser(err, user){
    console.debug(user);

    if(user.onlineState === 'in-game'){

        var currentGame = user.stateMessage.split(">")[1]; // Get everything after the <br/>
        if(currentGame.length > 0){
            console.log(`User is in-game: ${currentGame}`);
            setGithubUserProfileStatus(currentGame);
        }
        else {
            console.log('No game detected. Nothing to do.');
        }
    }
}

function setGithubUserProfileStatus(currentGame){
    const profileStatus = new githubProfileStatus.GitHubProfileStatus({
        token: process.env.GITHUB_ACCESS_TOKEN,
    });

    var expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + parseInt(process.env.GITHUB_STATUS_EXPIRES_AFTER || 1));
    console.log(expiresAt);

    profileStatus.set({
        emoji: ':video_game:',
        message: currentGame,
        limitedAvailability: showAsBusy,
        expiresAt: expiresAt,
    }).then((stat) => {
        console.log(stat);
    });
}