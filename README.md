This script will attempt to update your [Github user profile status](https://github.blog/changelog/2019-01-09-set-your-status/) with the game currently being played on Steam.  

* Your Steam Profile page must be set to public.  
* The status is set to expire after 1 hour, and the user is marked as Busy.  Making this configurable could be a future improvement. 

![screenshot](screenshot.png)

## How to use

To use this script, you'll first need to generate a [Github Access Token](https://github.com/settings/tokens) with the `user` scope.  

### Run it as a Github Action

You can consider running it [on a Github Action schedule](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule).  


      - name: Set My Github Status From Steam
        uses: mendhak/steam-github-profile-status@v1
        env:
          STEAM_USER_ID: "YOUR_STEAM_USER_ID"
          GITHUB_ACCESS_TOKEN: "${{ secrets.MY_GITHUB_ACCESS_TOKEN }}"

Where `MY_GITHUB_ACCESS_TOKEN` is an Actions Secret in your repository, and it contains the Github Access Token value generated above.

### Run it in a Docker container

To run it in a Docker container:

    docker run --rm -e GITHUB_ACCESS_TOKEN=xxxxxxxxxxxxxxxxx -e STEAM_USER_ID=76561197984170060 mendhak/steam-github-profile-status:latest

### Run it standalone

To run it as a standalone NodeJS script:

    export STEAM_USER_ID=76561197984170060
    export GITHUB_ACCESS_TOKEN=xxxxxxxxxxxxxxxxx
    node index.js

