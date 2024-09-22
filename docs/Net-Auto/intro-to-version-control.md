---
title: Introduction to Version Control
#template: custom_home.html 
icon: material/git
hide:
  #- footer
  #- navigation
#level:
tags:
    - Pending
---

## Coming Soon


## Pull Requests

A workflow that uses feature branches and pull requests (PRs) is a sane way to manage a codebase, collaborate with others, and maintain a clean main branch. 

1. Understanding the Workflow

In this workflow:

	•	Development happens in feature branches created from main.
	•	Pull requests are opened to merge changes from branches into main.
	•	Code review and testing occur before merging PRs.
	•	GitHub Actions can be configured to run on PRs for continuous integration (CI).
	•	Deployments happen when changes are merged into main.

2. Setting Up Feature Branches

Creating a New Branch

	1.	Create a New Branch Locally

  ```zsh
  git checkout -b feature/my-new-feature
  ```

  •	This command creates a new branch called feature/my-new-feature and switches to it.
	•	It’s a good practice to prefix your branch names with feature/, bugfix/, or hotfix/ to indicate the purpose.

  2.	Make Your Changes

	•	Edit files, add content, and make any necessary changes in this branch.

  3.	Commit Your Changes

  ```zsh
  git add .
  git commit -m "Add new feature X"
  ```

  4.	Push the Branch to GitHub Remote

  ```zsh
  git push origin feature/my-new-feature
  ```

3. Creating a Pull Request on GitHub

	1.	Navigate to Your Repository on GitHub
	2.	Create a Pull Request
	•	GitHub usually detects that you’ve pushed a new branch and will prompt you to open a pull request.
	•	Alternatively, you can go to the Pull requests tab and click New pull request.
	•	Select your feature branch as the compare branch and main as the base branch.
	3.	Fill Out PR Details
	•	Title: Brief summary of the changes.
	•	Description: Detailed explanation of what the PR does, any dependencies, or additional context.
	4.	Submit the Pull Request  

4. Adjusting GitHub Actions Workflow

To ensure your site builds correctly and passes any tests before merging, you can configure GitHub Actions to run on pull requests.

Modify Your GitHub Actions Workflow

Update your .github/workflows/ci.yml file to trigger on pull requests as well as pushes.

Updated ci.yml Trigger Section:

```yaml
name: ci

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```

•	The pull_request event triggers the workflow when a PR targeting the main branch is opened, synchronized, or reopened.
•	This allows your workflow to run CI checks on the changes in the PR before merging.

Ensure your workflow has the appropriate permissions:

```yaml
permissions:
  contents: write
```

5. Workflow Steps for Pull Requests

Your existing workflow steps should largely remain the same. However, you might want to adjust the deployment step to prevent deployments from PRs.

Prevent Deployment on Pull Requests

You don’t want to deploy the site when the PR is created or updated, only after it’s merged into main. To achieve this, you can add a conditional to the deployment step.

Modify the Deployment Step:

```yaml
- name: Build and Deploy MkDocs Site
  if: github.event_name == 'push' && github.ref == 'refs/heads/main'
  env:
    GH_TOKEN: ${{ secrets.GH_TOKEN }}
  run: |
    mkdocs gh-deploy --force --clean
```
	•	if: github.event_name == 'push' && github.ref == 'refs/heads/main' ensures that the deployment step only runs when there’s a push to the main branch.
	•	This prevents deployments from occurring during PRs.

6. Reviewing and Merging Pull Requests

Review the PR

	•	Automated Checks:
    •	GitHub Actions will run the workflow when the PR is opened or updated.
    •	You can check the Checks tab in the PR to see the status of the workflow.
    •	Ensure that all checks pass before merging.
	•	Code Review:
    •	Review the changes yourself or request a review from a collaborator.
    •	Look for correctness, style, and any potential issues.

Merge the PR

	1.	Ensure the PR is Up-to-Date
	  •	If there have been changes to main since you branched off, you might need to merge main into your feature branch or rebase.  

  ```zsh
  # Merge main into your feature branch
  git checkout feature/my-new-feature
  git fetch origin
  git merge origin/main
  ```

	•	Resolve any merge conflicts if they arise.
	•	Push the updated branch to GitHub.

  2.	Merge the PR on GitHub
	  •	Click the Merge pull request button in the PR.
	  •	Choose the merge method (e.g., Create a merge commit, Squash and merge, Rebase and merge).
	  •	Confirm the merge.
  
  3.	Delete the Branch (Optional)
	  •	After merging, you can delete the feature branch to keep your branch list clean.
	  •	GitHub provides an option to delete the branch in the PR interface.  

7. Post-Merge Actions

GitHub Actions Deployment

	•	Once the PR is merged into main, the GitHub Actions workflow will trigger again due to the push to main.
	•	The workflow will build and deploy your site as per the deployment step.

Monitor the Deployment

	•	Check the Actions tab to ensure the workflow runs successfully.
	•	Verify that your site is updated with the new changes.

8. Local Branch Management

Update Your Local main Branch

After merging the PR, update your local main branch:

```zsh
git checkout main
git pull origin main
```

Delete Local Feature Branch (Optional)

If you deleted the remote branch and want to delete your local feature branch:

```zsh
git branch -d feature/my-new-feature
```

9. Additional Tips

Branch Naming Conventions

	•	Use descriptive names for your branches to indicate their purpose.
	•	Examples: feature/user-authentication, bugfix/login-error, hotfix/critical-issue

Pull Request Templates

	•	You can create a PULL_REQUEST_TEMPLATE.md file in your repository to standardize PR descriptions.

Code Owners and Reviews

	•	If collaborating with others, you can use GitHub’s CODEOWNERS file to automatically request reviews from specific people.

Protected Branches

	•	Consider enabling branch protection rules on main to prevent direct pushes and enforce PR reviews and CI checks.

Continuous Integration and Testing

	•	Expand your GitHub Actions workflow to include tests, linting, and other checks to maintain code quality.

Documentation

	•	Update your project’s README or documentation to reflect your new workflow, so all contributors are aware.



