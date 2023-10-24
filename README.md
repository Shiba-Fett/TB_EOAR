# TB_EOAR
Data Tracking for EOAR TB performance over time.


## Updating
- Add the tb data from hotutils in tb_data dir
- Put reva data in reva dir
- Update the params file for latest tb
- Run the python script
```python update.py```
- Check everything looks ok before pushing


## Sync with HotUtils
- Timing: Ensure you sync the data on HotUtils 10 minutes before each round ends.
- Automation: This process can be automated for convenience.


## How to Run update.py on macOS
- Open the Terminal application on your computer.
- Navigate to the directory where update.py is located by typing cd followed by a space. Then drag and drop the folder containing update.py into the Terminal window. Press Enter.
- In the Terminal, type python3 update.py and press Enter.
- Upon execution, a list of player names should appear. If this happens, the script is running correctly.