Welcome to the **QuickScan**!

This is a practice project aiming to explore Angular2 and Web-API. The main purpose of this project is to upload/generate a question, send it to a candidate via email (a simple pdf or a form-url) to scan his ability very quickly.

**To run the QuickScan project:**

**Run API:**
1. Create database in your SQL Server by runnig quickscandb.sql from api/QuickQcan/DB folder
2. Open api/QuickScan/QuickScan.sln solution in visual studio
3. Change connection string QuickScanDbConnection in web.config
4. Hit F5. That's it

**Run Angular2 Project:**
1. Open front-end/QuickScan folder in code editor (I used visual studio code) Change the running url in app/service/category.service.ts and question.service.ts files
2. Open terminal in front-end/QuickScan folder
3. run command 'npm start'. This should start the QuickScan front-end application with the backend api support!

If you are all successful, you should get the initial page like this:

![Home](QuickScan/images/Home.jpg?raw=true "Home Page")

The Browse Question page should be like this:

![Browse Question](QuickScan/images/BrowseQuestion.jpg?raw=true "Browse Question Page")
