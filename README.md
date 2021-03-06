# cm-inteview-task
Interview task to parse and analyze CSV file

----------------------------------
# Task
The purpose of this challenge is for us to get a better idea of how you think, organize code, and tackle the problems at hand. This challenge should not take you longer than 4 hours. Let us know if you have any questions.

----------------------------------

Attached is a csv file: posts.csv, which contains data related to message board posts. Your job is to write code that will load in posts.csv and analyze the data against the rules listed below. Your code should output the results into three files: 
1. top_posts.csv will contain a list of top post id's, according to the rules below.
2. other_posts.csv will contain a list of remaining post id's.
3. daily_top_posts.csv will contain the single highest scoring top post of the day, based on likes.

Top Posts Rules:
* The post must be public 
* The post must have over 10 comments and over 9000 views
* The post title must be under 40 characters

Your code should be modular and reusable. Assume this is the first pass at a tool to build on and maintain.

Bonus points:
* Add an option to output json instead of csv 
* Add an option to output the full record details in addition to the id (detailed mode)
* Write unit tests


# Solution
Please clone repo and run: npm start
Then check /reports/ for the reports in the specified in index TS format
Currently there are 3 formats maintained:

**JSON**:

const summaryJSON = Summary.postsAnalysisReport(new JSONReport()); 

**CSV**:

const summaryCSV = Summary.postsAnalysisReport(new CSVReport());

**Console Log**:

const consoleReport = Summary.postsAnalysisReport(new ConsoleReport());

Good luck!


