# Extract Font List via InDesign's Report function

Make sure that the selected results from Find in Sublime Text match the amount of fonts used in the InDesign file.
If you have several INDD/INML files (like multiple chapters instead of 1 entire document with all the pages), I recommend creating a [book file](https://helpx.adobe.com/indesign/using/creating-book-files.html).

![alt text](https://github.com/kpossibles/Manga-Scripts/blob/master/images/InDesign_Package_Report_Button.png "InDesign Package Window")

1. Go to `File > Package…` (If working from a Book / INDB, go to the hamburger menu and click `Package Book for Print…`)
2. Click on `Report…` button
3. Open up [YOURFILENAME]_report.txt in Sublime Text
4. Ctrl+F / Cmd+F to pull up `Find` window and type in: `Full Name: [\w\d\- ]*`. Make sure your select `.*` button (Regular expression) in the window to enable regex options in Find. Click `Find All` and copy the text.
![alt text](https://github.com/kpossibles/Manga-Scripts/blob/master/images/SublimeText_Find_Window.png "Sublime Text Find Window")
5. Select all the text and then paste the previous results.
6. Pull up `Find` again and type in `Full Name: ` and press delete/backspace.
7. Font list is complete! Rename your txt file to whatever you desire.
