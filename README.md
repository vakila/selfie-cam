[![Frontend Masters](https://static.frontendmasters.com/assets/brand/logos/full.png)](https://frontendmasters.com)

This is a companion repo for the [Vanilla JavaScript Projects](https://frontendmasters.com/courses/javascript-projects/) course on [Frontend Masters](https://frontendmasters.com).

Project demo: [anjana.dev/selfie-cam](https://anjana.dev/selfie-cam/)

## GitHub Pages Instructions

Follow the steps below to deploy your own version of this project to GitHub Pages.

1) Fork this Repository
2) In your fork, go to `Settings > Pages`
3) Select `GitHub Pages` as the source. 
4) Go to the `Actions` tab and enable workflows (they were disabled because this repo was forked)
5) Find the `Deploy static content to Pages` action and manually `run workflow` to trigger it
	- Note: Future runs of this workflow can be automatically triggered by pushing code changes to your repo
6) When the workflow is complete, visit `https://[your-username].github.io/selfie-cam`
	- Note: If you named the repo something other than `selfie-cam`, make sure the URL matches what you used
