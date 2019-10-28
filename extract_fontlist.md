# Extract Font List via InDesign's Report function

Make sure that the selected results from Find in Sublime Text match the amount of fonts used in the InDesign file.
If you have several INDD/INML files (like multiple chapters instead of 1 entire document with all the pages), I recommend creating a [book file](https://helpx.adobe.com/indesign/using/creating-book-files.html).

1. Go to `File > Package…` (If working from a Book / INDB, go to `= > Package Book for Print…`)
2. Click on `Report…` button
3. Open up [YOURFILENAME]_report.txt in Sublime Text
4. Ctrl+F / Cmd+F to pull up Find window and type in: `Full Name: [\w\d\- ]*`. Click Find All and copy the text
5. Select all the text and then paste the previous results.
6. Pull up Find again and type in `Full Name: ` and press delete/backspace.
7. Fontlist is complete! Rename your txt file to whatever you desire.
