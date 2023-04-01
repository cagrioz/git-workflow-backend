
INSERT INTO Workflow (workflow_name, workflow_description)
VALUES ('feature', '<p><b>The Feature Branch Workflow</b> is a flexible and efficient workflow for managing and collaborating on software development projects. 
It is based on the use of feature branches, which allow developers to work on new features or bug fixes in isolation from the main codebase.</p>
<p><b>Why should you learn Feature Branch Workflow?</b></p>
<ul>
  <li>Promotes collaboration and code review</li>
  <li>Supports continuous integration and delivery</li>
  <li>Provides a clear and consistent way to manage and organize code changes</li>
  <li>Addresses the issues of conflicts and merge errors in basic git workflow.</li>
</ul>
<p><b>Beneficial for:</b></p>
<ul>
  <li>Developers who want to improve their collaboration and code review skills</li>
  <li>Teams that want to implement continuous integration and delivery practices</li>
  <li>Projects that require a consistent and organized approach to managing code changes</li>
</ul>
<p><b>Usage:</b></p>
<ul>
  <li>Create a new feature branch for each new feature or bug fix</li>
  <li>Share the feature branch with others for feedback and review</li>
  <li>Test and integrate code changes on the feature branch before merging into the main branch</li>
  <li>The Feature Branch Workflow can be used in conjunction with other workflows like Git Flow.</li>
</ul>
<p><b>Advantages:</b></p>
<ul>
    <li>Suitable for <b>Continuous Delivery</b> and <b>Continuous Integration</b></li>
    <li>A more straightforward alternative to <b>Git Flow</b></li>
    <li>Optimal for maintaining a single version in production</li>
</ul>
<p><b>Disadvantages:</b></p>
<ul>
    <li>The production code can become unreliable</li>
    <li>Not ideal for release planning</li>
    <li>Does not address deployment, environments, releases and issues</li>
    <li>Not suitable for maintaining multiple versions in production.</li>
</ul>');

INSERT INTO Workflow (workflow_name, workflow_description)
VALUES ('Gitflow', '<p><b>The Gitflow Workflow</b> is a branching strategy that specifies certain roles for various branches and how they should interact. To manage releases, prepare, maintain, and record releases, it makes use of numerous primary branches, long-lived feature branches, and long-lived feature branches.The Gitflow Workflow offers a clear and consistent method for managing and organizing code changes by outlining particular tasks for each branch. </p>
<p><b>Why should you learn Gitflow Workflow?</b></p>
<ul>
  <li>Appropriate for projects with predetermined release schedules</li>
  <li>Enables the continuous delivery (best practice recommended by DevOps)</li>
  <li>Specifies precise branch functions, as well as how and when those branches should engage</li>
</ul>
<p><b>Beneficial for:</b></p>
<ul>
  <li>Developers who work on projects with scheduled release cycles</li>
  <li>Teams that want to implement continuous delivery and DevOps practices</li>
  <li>Projects that require a specific structure for managing branches and releases</li>
</ul>
<p><b>Usage:</b></p>
<ul>
  <li>For each new feature or bug repair, create a develop branch and a feature branch</li>
  <li>When finished and tested, merge feature branches to the develop branch</li>
  <li>To be ready for production releases, create release branches</li>
  <li>When ready for production, merge release branches into the main and develop branches</li>
</ul>
<p><b>Advantages:</b></p>
<ul>
    <li>Appropriate for projects with predetermined release schedules</li>
    <li>Offers a structured method for controlling branches and releases</li>
    <li>Allows for DevOps and continuous delivery</li>
    <li>Allows for the concurrent creation of features without incompatible upgrades</li>
</ul>
<p><b>Disadvantages:</b></p>
<ul>
    <li>To integrate long-lived feature branches, more people must work together</li>
    <li>Greater likelihood of leaving the stem branch</li>
    <li>Managing large commits may be difficult</li>
</ul>');


INSERT INTO Workflow (workflow_name, workflow_description)
VALUES ('Cactus', '<p><b>The Cactus Workflow</b> is a branching architecture that guarantees continuous integration rules are maintained while maintaining the usual method of working with Git. Developers routinely rebase their modifications to adhere to the most recent origin/master, where all development takes place. Short-lived local branches are permitted, but whenever something has to be shared, they should be merged with origin/master.</p>
<p><b>Why should you use the Cactus Workflow?</b></p>
<ul>
  <li>Maintains the concept of continuous integration</li>
  <li>Reduces merging mistakes and conflicts</li>
  <li>Relies on a single master branch to streamline development</li>
</ul>
<p><b>Beneficial for:</b></p>
<ul>
  <li>Developers seeking a straightforward and effective process</li>
  <li>Teams want to use continuous integration and delivery techniques</li>
  <li>Projects that demand a systematic method for handling code changes</li>
</ul>
<p><b>Usage:</b></p>
<ul>
  <li>The master branch is where all development takes place</li>
  <li>To keep up with the most recent origin/master, developers ought to often reformat their modifications</li>
  <li>Short-lived local branches works well, but when something has to be shared, they should be merged with origin/master</li>
  <li>Need to avoid usage of shared remote branches. </li>
  <li>Use either rebase or cherry-pick instead of standard merges as fast-forward merges are not allowed </li>
</ul>
<p><b>Advantages:</b></p>
<ul>
  <li>Conforms to the natural approach of working with Git</li>
  <li>Ensures that the concepts of continuous integration are kept properly</li>
  <li>Enables quick and frequent releases</li>
  <li>Provides a clear and straightforward commit history.</li>
</ul>
<p><b>Disadvantages:<b></p>
<ul>
  <li>It could be difficult to deploy for bigger teams or complicated projects</li>
  <li>Requires developers to follow certain rules and work together</li>
  <li>Maintaining numerous versions in production may be challenging</li>
</ul>');