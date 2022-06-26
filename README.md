_Work in progress_

This script will attempt to update the [Github user profile status](https://github.blog/changelog/2019-01-09-set-your-status/) with the game currently being played on Steam.  

It's a NodeJS script so it should be able to run in a number of different ways. (TBC)

This script needs a [Github Access Token](https://github.com/settings/tokens) with the `user` scope.  

To run it as a script:

    export STEAM_USER_ID=76561197984170060
    export GITHUB_ACCESS_TOKEN=xxxxxxxxxxxxxxxxx
    node index.js


To run it in Docker:

    docker build -t steam-github-profile-status:latest .
    docker run --rm -e GITHUB_ACCESS_TOKEN=xxxxxxxxxxxxxxxxx -e STEAM_USER_ID=76561197984170060 steam-github-profile-status:latest

