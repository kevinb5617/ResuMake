# Description

Summarize the bug that is being fixed (current state vs. desired state) or intended feature here. Ideally, the description is already well written in the associated issue, so that can be reused. If not, just make sure in this section that it is clear what is expected to happen if this code is merged, and what is different from the current version.

# Related Issue(s) and Pull Request(s)

Please include links to the issue this PR is addressing, and any other PRs associated with this pull request.

# Solution

Please put some high-level description of what you did to solve the bug or implement the desired feature.

# Steps to Test

Please put clear step-by-step instructions on how to recreate the bug and verify a working solution. If you are merging a new feature, make sure you include instructions for how to see the new capabilities enabled by your code.

## Example for Bugfix

### Recreate Bug

1. `git checkout master`
2. `make start_website`
3. Navigate to localhost:5555 in your browser of choice.
4. Verify the XYZ button does not work.

### Verify Solution

1. `git checkout bugfix/fix_XYZ_button`
2. `make start_website`
3. Navigate to localhost:5555 in your browser of choice.
4. Now the XYZ button should work as expected.

## Example for Feature

1. `git checkout feature/add_XYZ_button`
2. `make start_website`
3. Navigate to localhost:5555 in your browser of choice.
4. You should see the new XYZ button that functions as described in the issue.

# Known Issues

* Include any known issues with your implementation here
* If there are any glaring issues, submit this pull request as a WIP (Work in Progress)

# Checklist

* [ ] My code follows the style guidelines of this project
* [ ] I have performed a self-review of my own code
* [ ] I have commented my code, particularly in hard-to-understand areas
* [ ] I have made corresponding changes to the documentation
* [ ] My changes generate no new warnings
* [ ] I have added tests that prove my fix is effective or that my feature works
* [ ] New and existing unit tests pass locally with my changes
* [ ] Any dependent changes have been merged and published in downstream modules
* [ ] I have rebased my branch onto master, and squashed down small commits into a few meaningful messages