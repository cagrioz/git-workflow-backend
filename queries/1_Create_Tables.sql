
	CREATE TABLE Exercises (
		exercise_id INTEGER PRIMARY KEY,
		description TEXT,
		answer TEXT,
		feedback TEXT
	);

	CREATE TABLE Workflow (
		workflow_id INTEGER PRIMARY KEY,
		workflow_name TEXT,
		workflow_description TEXT
	);

	CREATE TABLE User_Info (
		username TEXT PRIMARY KEY,
		email TEXT UNIQUE,
		lastname TEXT,
		firstname TEXT
	);

	CREATE TABLE Users (
		user_id INTEGER PRIMARY KEY,
		fk_username TEXT REFERENCES User_Info(username),
		fk_email TEXT REFERENCES User_Info(email)
	);

	CREATE TABLE Workflow_Creator (
		fk_exercise_id INTEGER REFERENCES Exercises(exercise_id),
		fk_workflow_id INTEGER REFERENCES Workflow(workflow_id),
		PRIMARY KEY (fk_exercise_id, fk_workflow_id)
	);

	CREATE TABLE Workflow_Exercise (
		fk_exercise_id INTEGER REFERENCES Exercises(exercise_id),
		fk_workflow_id INTEGER REFERENCES Workflow(workflow_id),
		explanation TEXT,
		order_ INTEGER,
		PRIMARY KEY (fk_exercise_id, fk_workflow_id)
	);

	CREATE TABLE Solve (
		fk_user_id INTEGER REFERENCES Users(user_id),
		fk_workflow_id INTEGER REFERENCES Workflow(workflow_id),
		score INTEGER,
		PRIMARY KEY (fk_user_id, fk_workflow_id)
	);
	
	ALTER TABLE exercises
ADD COLUMN exercise_name text COLLATE pg_catalog."default";