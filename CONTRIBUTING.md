# Contributing

## Getting Started

ResuMake recommends making a fork of the main "blessed" repository at https://github.com/kevinb5617/ResuMake

You can make a local version of your fork with
```bash
$ git clone git@github.com:johndoe/ResuMake.git
```

* To use the above command, you will need to set up SSH keys in GitHub. See [this article](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account) for how to do that.

From there, we recommend setting up two "remotes", where one will point to your personal fork, and the other will point to the blessed repository.

```bash
$ git remote add upstream git@github.com:kevinb5617/ResuMake.git
```

## Common Workflow

Typically, when developing, you will make changes locally on a new git branch, then when you want to "save" this changes, you will push to your fork of the repository, which is your "origin" remote. When you think your changes are ready to be merged into the blessed repository, you will make a pull request from your personal repository, to the blessed repository. Your workflow may look something like this.

```bash
$ git checkout -b feature/new-branch
$ echo "Test File" > test_file
$ git add test_file
$ git commit -m "Added test file"
$ git push -u origin feature/new-branch
# Here you should make a pull request on your GitHub repository
```

When a pull request gets completed, you should incorporate those changes into your own codebase. Since the `master` branch is where almost all changes will appear in the blessed repository, you should do the following to include that new code.

```bash
$ git checkout master
$ git fetch upstream
$ git pull # if needed
```

## Working On An Issue

When assigning yourself to an issue to work on, make sure you understand the scope of the problem, and try reaching out to the reporter of the bug/feature to fully understand what the end state should look like.

### Branch Names

When making a branch to solve a bug or implement a feature, try to use the following naming convention:

    <issue-type>/<hyphen-separated-name>

For example:
    
    bugfix/remove-typo-in-headers
    feature/add-login-button