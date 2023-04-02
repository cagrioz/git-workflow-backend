	DROP VIEW IF EXISTS workflow_details;
	DROP TABLE IF EXISTS Solve;
	DROP TABLE IF EXISTS Workflow_Exercise;
	DROP TABLE IF EXISTS Workflow_Creator;
	DROP TABLE IF EXISTS User_Info;
	DROP TABLE IF EXISTS Workflow;
	DROP TABLE IF EXISTS Exercises;
	DROP USER IF EXISTS GitWorkflowTeacherApp;

	CREATE TABLE Exercises (
		exercise_id SERIAL PRIMARY KEY,
		description TEXT,
		answer TEXT,
		feedback TEXT
	);

	CREATE TABLE Workflow (
		workflow_id SERIAL PRIMARY KEY,
		workflow_name TEXT,
		workflow_description TEXT
	);

	CREATE TABLE User_Info (
		user_id SERIAL PRIMARY KEY,
		username TEXT UNIQUE,
		email TEXT UNIQUE,
		password TEXT,
		lastname TEXT,
		firstname TEXT
	);

	CREATE TABLE Workflow_Creator (
		fk_user_id INTEGER REFERENCES Exercises(exercise_id),
		fk_workflow_id INTEGER REFERENCES Workflow(workflow_id),
		PRIMARY KEY (fk_user_id, fk_workflow_id)
	);

	CREATE TABLE Workflow_Exercise (
		fk_exercise_id INTEGER REFERENCES Exercises(exercise_id),
		fk_workflow_id INTEGER REFERENCES Workflow(workflow_id),
		explanation TEXT,
		order_ INTEGER,
		PRIMARY KEY (fk_exercise_id, fk_workflow_id)
	);

	CREATE TABLE Solve (
		fk_user_id INTEGER REFERENCES User_Info(user_id),
		fk_workflow_id INTEGER REFERENCES Workflow(workflow_id),
		score INTEGER,
		PRIMARY KEY (fk_user_id, fk_workflow_id)
	);
	
	ALTER TABLE exercises
ADD COLUMN exercise_name text COLLATE pg_catalog."default";