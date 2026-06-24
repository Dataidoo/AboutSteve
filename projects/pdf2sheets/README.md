# PDF2Sheets

The What & Why

What: A bat file you click, select a folder full of pdf's and it automatically generates an organized excel file, and a tracker doc. 

Why: I had many years of taxes, receipts, bank pdf files and paper e-transfer records to reconcile. As you can guess,
I wanted a quick but verifiable way to work through it all. Free and paid options didn't offer consistency and one system to follow all the info back
to the original pdf transaction data. Anyone who has dealt with bank records will know they are continuous and often abbreviated lines. 
This is my answer (feel free to pass it to an ai to get your setup more personally helpful)
when the script processes the folder on its first pass you will get an empty tracker (currently merchant tracker and made to handle CNDN Scotia Bank Pdfs)
Also you will get an excel file with the following columns:

Date | Name 1 | Name 2 | Main | Sub | Amount | Raw

Date: is the date data as it appears(scotia is month/day, the folder location creates year)
Name 1: carry over edits per run(*I Noticed this wasn't working last try but see my workflow for why i left it)
Name 2: Reset data meant for last edits before export(My use was locations as I have a small geographic area its the quickest to clean last)
Main: This is the main categories ( technically the term main only applies if you export into the dash i made, otherwise there are better thought of as tags)
Subs: These are branches or secondary search areas for me i simplified my food spending as Main(food) Sub(Groceries/Fast/Out)
Amount: Self explained
Raw: Your safety net. that being said nothing is locked. I use the most destructive means(fastest) to clean merchant names and locations. but I do so carefully or risk  repeating what hasn't been saved.

Workflow for me:
After initial run, excel file will have red rows identifying "unknown" line items(those not yet assigned a Main tag,  
I sort the data by a name column and by using the drop menus in the main or sub intersecting rows assign a few of each, 
Best practice on first go, is to get a few each of the most popular identical data rows. 
Then Run again to be sure its identifying them properly. 
Repeat the process until finished, All rows are labeled by Main or Sub.
I Then use text find in columns and begin removing the unwanted info from Name column 1 & 2. 
Leaving me with My transactions named and location info all assimilated and easy to follow as per my criteria.

*Next I load them through my Dash app *export .bat not needed but left in case others have issues i never ran into.



> Note: the PDF parsing logic was built around Scotiabank statement layouts.
> Other banks' formats may or may not parse cleanly out of the box.

**No paths are hard-coded.** The first time you run it, a folder picker pops up
and asks where your statements live. Your labels live in a `merchant_list.txt`
that the script creates next to itself.

---

## What's in the folder

- `pdf2sheets.py` — the script that does the work
- `run_parser.bat` — double-click to process your statements
- `export_to_dashboard.bat` — double-click when you're done labelling
- `README.md` — this file

(`merchant_list.txt` gets created automatically on first run.)

---

## One-time setup

1. Install Python 3 from https://www.python.org (during install, tick **Add
   Python to PATH**).
2. Open a Command Prompt and run:
   ```
   pip install pdfplumber pandas openpyxl
   ```

That's it.

---

## How to use it

1. Drop this whole folder anywhere on your PC.
2. Put your PDF statements anywhere you like — one folder, with subfolders by
   year if you want. They can sit somewhere completely separate from these
   scripts.
3. **Double-click `run_parser.bat`.** A folder picker will open — point it at
   the folder holding your statements.
4. When it finishes, open `PDF2Sheets_Review.xlsx` (created in your statements
   folder). Fill in the orange/unlabelled rows: type a clean name in **Name1**,
   pick a **Main** and **Sub** category from the dropdowns. Save and close.
5. Re-run `run_parser.bat` any time you add new statements — your labels are
   remembered automatically.
6. When the list is clean and you're ready to push it to your dashboard, polish
   the **Name2** column down to just the location, then **double-click
   `export_to_dashboard.bat`**. It writes `Dashboard_Export.xlsx` in the same
   folder.

---

## The review sheet columns

| Column | What it is | Remembered? |
|---|---|---|
| Date | Transaction date | — |
| Name1 | Clean merchant name you type | ✅ yes |
| Name2 | Raw text — trim down to a location before export | ❌ fresh each run |
| Main | Primary category (dropdown) | ✅ yes |
| Sub | Independent breakdown (dropdown) | ✅ yes |
| Amount | From the statement | — |
| Raw | Untouched bank string | — |

---

## Notes

- The script only reads your PDFs; it never edits them.
- All output files (`PDF2Sheets_Review.xlsx`, `Dashboard_Export.xlsx`,
  `merchant_list.txt`, `merchant_reference.md`) are written into the folder
  you picked, not into the script folder.
- If the bat files flash and close instantly, open Command Prompt, `cd` into
  this folder, and run `python pdf2sheets.py` directly — you'll see the
  error message.
