insert into user_info (username, email, password, lastname, firstname) values ('serguney', 'e@xample.com', crypt('123456789',gen_salt('md5')),'Gumus', 'Serguney');
insert into user_info (username, email, password, lastname, firstname) values ('ibrahim','ibrahim@gmail.com',crypt('987654321',gen_salt('md5')),'Sarigoz','Ibrahim');
insert into user_info (username, email, password, lastname, firstname) values ('umut', 'umut@gmail.com',crypt('123456',gen_salt('md5')),'Baybece','Umut');
insert into user_info (username, email, password, lastname, firstname) values ('cagri', 'cagri@gmail.com',crypt('123456789',gen_salt('md5')),'Ozarpaci','Cagri');


INSERT INTO exercises (description, answer, feedback, exercise_name)
VALUES ('In this exercise, you will learn how to use the git commit command to save your changes to a Git repository. 
		Git is a version control system that allows you to track changes to your files and collaborate with others on projects. 
		When you make changes to your files and want to save them to your Git repository, 
		you use the git commit command. The git commit command takes a message that describes the changes you have made. 
		This message is important because it helps you and others understand what changes were made and why.',
		'', '','Make 1 commit with message');

INSERT INTO exercises (description, answer, feedback, exercise_name)
VALUES ('In this exercise, you will learn how to use the git checkout command to switch between different branches in a Git repository. 
		Git allows you to create multiple branches in a repository, and the git checkout command allows you to switch between these branches. 
		This is useful when you want to work on different features or bugs in isolation from each other. 
		Use the git checkout command with the -b option to create a new branch and switch to it in one step. 
		For example, git checkout -b another-feature.', '', '','Create a new feature branch');


INSERT INTO exercises (description, answer, feedback, exercise_name)
VALUES ('In this exercise, you will learn how to use the git merge command to merge a feature branch into the master branch of a Git repository.
		When you have finished working on a feature in a separate branch, you can use the git merge command to merge the changes back into the master branch.
		This allows you to incorporate your changes into the main codebase and make them available to others. 
		Use the git merge command to merge the feature branch into the master branch.
		For example, git merge new-feature.', '', '','Merge feature branch to master');