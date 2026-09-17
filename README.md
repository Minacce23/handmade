# Handmade by Kennedy

Portfolio of sewing, crochet, and knitting projects.
Live at https://minacce23.github.io/handmade/

## Editing projects (admin page)
Go to https://minacce23.github.io/handmade/admin/ and sign in with your GitHub key.
From there you can rename projects, change categories and date, group or split photos,
label single photos (for example crochet vs. knit in a mixed project),
choose cover photos, upload new photos, reorder, hide, and delete projects.
Nothing goes live until you click Save changes. The site updates a minute or two later.

Deleting a project never deletes its photos; they move to "Loose photos" at the bottom.

### Getting a GitHub key
GitHub > profile picture > Settings > Developer settings > Personal access tokens >
Fine-grained tokens > Generate new token. Repository access: only "handmade".
Permissions: Contents = Read and write. When it expires, make a new one the same way.

## Editing by hand
All project info lives in `projects.js`; photos live in `images`.

## Custom domain later
Add a file named `CNAME` containing just your domain (e.g. `handmadebykennedy.com`),
then point the domain's DNS at GitHub Pages and set the domain under Settings > Pages.
