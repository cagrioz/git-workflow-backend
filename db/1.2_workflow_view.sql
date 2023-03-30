CREATE VIEW workflow_details AS
SELECT wf.workflow_id, wf.workflow_name, we.explanation, we.order_, e.exercise_id, e.description, e.answer,
e.feedback, e.exercise_name
FROM
workflow wf
INNER JOIN workflow_exercise we ON we.fk_workflow_id = wf.workflow_id
INNER JOIN exercises e ON e.exercise_id = we.fk_exercise_id;