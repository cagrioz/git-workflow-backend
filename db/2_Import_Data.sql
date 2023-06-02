insert into user_info (username, email, password, lastname, firstname) values ('serguney', 'e@xample.com', crypt('123456789',gen_salt('md5')),'Gumus', 'Serguney');
insert into user_info (username, email, password, lastname, firstname) values ('ibrahim','ibrahim@gmail.com',crypt('987654321',gen_salt('md5')),'Sarigoz','Ibrahim');
insert into user_info (username, email, password, lastname, firstname) values ('umut', 'umut@gmail.com',crypt('123456',gen_salt('md5')),'Baybece','Umut');
insert into user_info (username, email, password, lastname, firstname) values ('cagri', 'cagri@gmail.com',crypt('123456789',gen_salt('md5')),'Ozarpaci','Cagri');


INSERT INTO exercises (description, answer, feedback, exercise_name)
VALUES ('In this exercise, you will learn how to use the `git clone` command to create a local copy of a remote repository called "git-workflow".
To begin, open your terminal or command prompt and navigate to the directory where you want to clone the repository.
Next, execute the `git clone` command followed by the URL or SSH link of the remote repository. In this case, run `git clone git-workflow`. 
This command will create a new directory named "git-workflow" and clone the contents of the remote repository into it. Once the cloning process is complete, 
you will have a local copy of the "git-workflow" repository on your machine. You can now navigate into the cloned directory and start working with the repository''s files and version control.'
'By using the git clone command, you can easily create a local copy of a remote repository, allowing you to collaborate, contribute, and work with the project''s codebase on your own machine.', '', '', 'Git Clone Exercise');

INSERT INTO exercises (description, answer, feedback, exercise_name)
VALUES ('In this exercise, you will learn how to use the git checkout command to switch between different branches in a Git repository. 
		Git allows you to create multiple branches in a repository, and the git checkout command allows you to switch between these branches. 
		This is useful when you want to work on different features or bugs in isolation from each other. 
		Use the git checkout command with the -b option to create a new branch and switch to it in one step. 
		For example, git checkout -b another-feature.', '', '','Create a new feature branch');


INSERT INTO exercises (description, answer, feedback, exercise_name)
VALUES ('In this exercise, you will learn how to use the git commit command to save your changes to a Git repository. 
		Git is a version control system that allows you to track changes to your files and collaborate with others on projects. 
		When you make changes to your files and want to save them to your Git repository, 
		you use the git commit command. The git commit command takes a message that describes the changes you have made. 
		This message is important because it helps you and others understand what changes were made and why.',
		'', '','Make 1 commit with message');



INSERT INTO exercises (description, answer, feedback, exercise_name)
VALUES ('In this exercise, you will learn how to use the git merge command to merge a feature branch into the master branch of a Git repository.
		When you have finished working on a feature in a separate branch, you can use the git merge command to merge the changes back into the master branch.
		This allows you to incorporate your changes into the main codebase and make them available to others. 
		Use the git merge command to merge the feature branch into the master branch.
		For example, git merge new-feature.', '', '','Merge feature branch to master');

INSERT INTO exercises (description, answer, feedback, exercise_name)
VALUES ('In this exercise, you will perform three essential Git commands: `git checkout -b`, `git commit -m`, and `git merge`. 
		First, use `git checkout -b` followed by the desired branch name to create a new feature branch and switch to it in one 
		step. This allows you to work on the new feature or bug fix in isolation from other branches. For example, `git checkout -b new-feature` 
		creates a branch called "new-feature" and switches to it. Once you are on the new branch, use `git commit -m` to make commits 
		and record your changes. Provide a descriptive message within the quotes to explain the purpose of each commit. 
		For instance, `git commit -m "Implemented new functionality"`. After completing your work on the feature branch, 
		you can merge it back into the main branch or another target branch using `git merge`. Switch to the target branch, such as the main branch,
		with `git checkout` and then run `git merge` followed by the name of the feature branch to merge its changes. 
		For example, `git merge master` merges the changes from the "new-feature" branch into the current branch. 
		By following these steps, you can create a new feature branch, make commits to record your changes, 
		and merge the feature branch back into the main branch or another target branch, ensuring your work becomes part of the project''s main development line.', 
		'', '','Git Branching and Merging Exercise');

INSERT INTO exercises (description, answer, feedback, exercise_name)
VALUES ('In this exercise, you will learn how to create a new feature branch, stage changes, commit them, and merge the branch back into the main branch using Git commands.Use the `git checkout -b` command followed by the desired branch name to create a new feature branch and switch to it in one step. For example: `git checkout -b feature-branch`. Make the necessary changes to the project files. Use the `git add .` command to stage all the changes in the current directory. This prepares the changes for the commit. Commit the staged changes with a descriptive message using the `git commit -m` command. For example: `git commit -m "Implemented new feature"`. Switch back to the main branch, such as `master`, using the `git checkout` command. For example: `git checkout master`. Merge the changes from the feature branch into the main branch using the `git merge` command. For example: `git merge feature-branch`. By following these steps, you can create a new feature branch, stage and commit changes, and merge the branch back into the main branch, ensuring the incorporation of your work into the main development line. Good luck!', '', '', 'Git Branching and Merging Exercise (Advanced)');	

INSERT INTO exercises (description, answer, feedback, exercise_name)
VALUES ('In this exercise, you will learn how to use various Git commands to incorporate changes from the remote `master` branch into a new branch called `dev`.
		Execute the command `git pull origin master` to fetch and merge the latest changes from the remote `master` branch into your local repository.
		Create a new branch named `dev` and switch to it using `git checkout -b dev`. This command creates the `dev` branch and sets it as your current working branch.
		Make the desired changes to the project files. Use `git add .` to stage all the changes in the current directory, preparing them for commit.
		Commit the staged changes with a descriptive message using `git commit -m ''dev''`. This will create a commit on the `dev` branch with the provided message, such as "dev", to signify the changes made specifically on this branch.
		Switch back to the `master` branch using `git checkout master`, which sets the `master` branch as your current working branch.
		Merge the latest changes from the `master` branch into the `dev` branch by running `git merge master`. This command incorporates the changes from `master` into your `dev` branch, 
		ensuring that your `dev` branch stays updated with the latest developments from the main branch.
		By following these steps, you will be able to pull changes from the remote `master` branch, create a new branch named `dev`, stage and commit changes on the `dev` branch, and merge the latest changes from `master` into `dev`. 
		This allows you to work on new features or bug fixes in isolation and keep your `dev` branch synchronized with the main development branch.', '', '', 'Syncing Changes from Master to Dev Branch');

INSERT INTO exercises (description, answer, feedback, exercise_name)
VALUES ('In this exercise, you will learn how to create and delete branches using Git commands. To create a new branch called `dev`, use the command `git branch dev`. 
		This will create a new branch named `dev` based on your current branch. However, please note that this command only creates the branch and does not switch to it.
		To switch to the newly created `dev` branch, execute `git checkout dev`. This command will switch your working branch to `dev` so that you can start working on it.
		If you want to delete the `dev` branch, use the command `git branch -d dev`. This command will delete the branch if it has been fully merged into the current branch.
		However, if the branch has unmerged changes, Git will prevent you from deleting it. 
		If you want to force the deletion of the branch, even with unmerged changes, you can use `git branch -D dev`. Be cautious when using this command as it permanently 
		removes the branch and its history. By using these commands, you can create new branches and switch between them to work on different features or bug fixes, 
		and also delete branches when they are no longer needed. This allows you to manage your codebase effectively and keep your repository organized.', '', '', 'Git Branching and Branch Deletion Exercise');

INSERT INTO exercises (description, answer, feedback, exercise_name)
VALUES ('In this exercise, you will learn how to use Git commands to stage and commit changes to a specific file, `index.js`, with a commit message of "dev".
To start, use the command `git add index.js` to stage the changes made to the `index.js` file. This command adds the file to the staging area, preparing it for the upcoming commit.
Once the changes are staged, commit them with a descriptive message using the `git commit -m "dev"` command. Replace "dev" with a meaningful message that describes the changes made to the file.
This command creates a commit with the specified message, incorporating the changes made to the `index.js` file. By following these steps, you can stage the specific file `index.js` using `git add` 
and commit the changes with the message "dev" using `git commit`. This allows you to record your changes to the file and keep track of the development progress.', '', '', 'Staging and Committing Specific File Exercise');



INSERT INTO exercises (description, answer, feedback, exercise_name)
VALUES ('In this exercise, you will learn how to use Git commands to pull changes from the remote master branch, commit your changes with a message, and push the changes back to the remote master branch.
To begin, use the command `git pull origin master` to fetch and merge the latest changes from the remote master branch into your local repository. This ensures that you have the most up-to-date codebase to 
work with and resolves any conflicts that may arise. Next, commit your changes with a descriptive message using the `git commit -m ''dev''` command. Replace `dev` with a meaningful message that describes the 
changes you made. This command records your changes in a commit on your local branch. Finally, push your local commits to the remote master branch using `git push origin master`. 
This command uploads your local changes to the remote repository, making them accessible to others working on the project.
By following these steps, you can pull the latest changes from the remote master branch, commit your changes with a descriptive message, and push your local commits back to the remote master branch, 
ensuring that your changes are incorporated into the main codebase.', '', '', 'Pull, Commit, and Push Exercise');



INSERT INTO exercises (description, answer, feedback, exercise_name)
VALUES ('In this exercise, you will learn how to use Git commands to update your local repository, stage and commit changes, push the commits to a remote repository, and create a new tag.
To begin, execute the command `git pull origin master` to fetch and merge the latest changes from the remote `master` branch into your local repository. 
This ensures that your local repository is up to date with the latest codebase. Next, use the command `git add .` to stage all the changes in the current directory. 
This command prepares the changes for the upcoming commit. Commit your changes with a descriptive message by running `git commit -m ''dev''`. 
This command creates a commit with the message ''dev'', which helps describe the changes you made in the commit. To push your local commits to the remote repository, use `git push origin master`. 
This command uploads your local commits to the remote repository, making them available to others working on the project. Finally, create a new tag called `v1.0.0` by using `git tag v1.0.0`. 
This command adds a tag to the current commit, marking it as a significant milestone or release point in your project. By following these steps, you can update your local repository with the latest changes, 
stage and commit your changes with a descriptive message, push the commits to the remote repository, and create a new tag to mark a significant version or release. These actions help maintain a structured and 
organized version control system for your project.', '', '', 'Git Update, Stage, Commit, Push, and Tag Exercise');