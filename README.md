# JG Learning Cities

Welcome to this app allowing to learn easily different things : 
- all the capital cities around the world.
- the Roman Empire

## Installation

- `npm install`    => install dep
- `npm run start`  => start dev server

## Releasing a new version on github

- Change `version` in `package.json`
- `git tag -a x.x.x -m "my tag description"`
- `git push origin --tags`
- Then draft a new release with the newly created tag on github.

## Deploying

- `npm run build`
- `firebase deploy`

and that's it !

If an error occured, try :
- `firebase login --reauth` to allow firebase CLI to relog and make  it able to fetch the projects list and deploy. 

deployed url : [capital-cities-7d034.web.app](https://capital-cities-7d034.web.app/) 
