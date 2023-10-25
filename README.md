# Territory Battle Tracker Tool
Track Territory Battle (TB) performance metrics over time.

### You MUST Enable TB Tracking in HotUtils
- A minimum of 4 guild members are required to have Chili Membership in HotUtils before TB Tracking Tools can be activated.
- Navigate to the `Guild` tab in the HotUtils interface.
- Select `Events`, then click on `TB`.
- Make sure to tick the checkbox labeled `Event is Enabled`.
- Once TB Tracking is enabled, HotUtils will automatically synchronize all Territory Battle (TB) mission data.

## Updating
- In hotutils navigate to TB tab then click Manage, in the top right corner you should see Export
- Rename the tb_data.csv from hotutils to "tb_1.csv" then increase the number to like tb_2.csv 
- Add the newly named .csv file from hotutils in tb_data folder
- OPTIONAL: Put reva data in reva folder
- Update the param.txt for latest tb. Each TB event text needs to be on its own line, with the newest at the top of the text file
- Run the python script
```python update.py```
- Check everything looks ok before pushing, 
- NOTE: You must do this proccess for each completed Teritory Battle. 

## How to Change Guild Name & Links
- Navigate to the `input_files` directory in your repository.
- Within this directory, you'll find a file named `index.html.in`.
- Open `index.html.in` using your preferred code editor.
- Edit the hyperlinks and text content as needed.
- Once you've made your edits, save the `index.html.in` file to commit your changes.

## Running update.py on macOS
- Ensure that Python 3 and `numpy` are installed on your macOS system.

1. Open Terminal: Launch the Terminal application on your Mac.
  
2. Navigate to Script Directory
    - Type `cd` followed by a space in the Terminal.
    - Drag and drop the `scripts` folder containing `update.py` into the Terminal window. 
    - Press `Enter` to navigate to that directory.
  
3. Run the Script
    - Execute the following command in Terminal: `python3 update.py`
     
4. **Verify Execution**:
    - After running the script for the first time, a list of player names should be displayed. 
    - If you see this list, the script has executed successfully.