# PhasmoTracker <!-- omit in toc -->
### Updated for patch 0.3.0.2. <!-- omit in toc -->

- [How To Use](#how-to-use)
- [Features](#features)
  - [Current](#current)
  - [To-Do](#to-do)
- [Contribution](#contribution)
  - [How to contribute](#how-to-contribute)
  - [Following My Naming Conventions](#following-my-naming-conventions)

A third party tracker for Phasmophobia that allows an easier hunting experience for players. This application is web based, with mobile in mind, and can be ran on another monitor or any other device with a capable web browser, such as a phone, with ease.

# How To Use
The application can be used without installation simply by going to [phasmotracker.steindelse.com](https://phasmotracker.steindelse.com/) or locally by downloading the source as a ZIP, extracting all files to a directory, and running the index.html from a modern, capable browser such as Google Chrome.

Once the tracker is running, simply select up to three pieces of evidence. As you do, possible ghost's cards will be displayed for you and evidence that is no longer possible will be struck through in red.

# Features
## Current
- Select evidence to mark green and filter down ghost types.
- Automatically mark evidence that contradicts other evidence as red.
- Save evidence to localStorage and loads upon page load incase of page refresh.
- Display ghost cards with evidence, strength, weakness, and additional notes for all possible ghosts.

## To-Do
- Filter out evidence no longer possible due to remaining ghosts.
- Add ability to Log current ghost and keep running statistics of ghosts hunted.

# Contribution
## How to contribute
If you wish to contribute to directly to the main project, use the following steps:
1. Fork the project
2. Make your changes
3. **Use Prettier to format the code**
4. Commit your changes to your fork
5. Create a pull request 

## Following My Naming Conventions
1. Variables and Functions are camelCase and aptly named, such as `ghostEventType` or `getUserLastSelection()`.
2. Filenames are all lower case and can contain underscores, such as `properties.json` or `london_bridge.jpg`.
3. Element IDs for programmatic use should include a 2-3 letter description of the element and be camelCase, such as `btnReset` or `txtUsername`.
4. Page IDs should be proceeded by `page-`, such as `page-disclaimer` or `page-user-info`.