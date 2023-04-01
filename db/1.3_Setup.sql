create user GitWorkflowTeacherApp with password'123456789';

grant all privileges on exercises to GitWorkflowTeacherApp;
grant all privileges on solve to GitWorkflowTeacherApp;
grant all privileges on user_info to GitWorkflowTeacherApp;
grant all privileges on workflow to GitWorkflowTeacherApp;
grant all privileges on workflow_creator to GitWorkflowTeacherApp;
grant all privileges on workflow_exercise to GitWorkflowTeacherApp;
grant all privileges on workflow_details to GitWorkflowTeacherApp;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public to GitWorkflowTeacherApp;

