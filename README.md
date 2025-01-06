# DriveX_project
### Steps to Install and Run
1. **Download the files**:
   - Place the `index.html` and `index.js` files in the same directory.

2. **Install Dependencies**:
   - Open a terminal and navigate to the directory containing the files.
   - Run the following command to initialize a Node.js project:
     ```bash
     npm init -y
     ```
   - Install the required dependencies:
     ```bash
     npm install express multer cors
     ```

3. **Run the Server**:
   - Start the server by running:
     ```bash
     node index.js
     ```

4. **Access the Application**:
   - Open a web browser and navigate to `http://localhost:3000/`.

5. **Upload and Process Files**:
   - Use the form on the webpage to upload a file. The server will read the file and return its contents.

### Directory Structure
Ensure your directory looks like this:
```
/project-directory
  ├── index.js
  ├── index.html
  └── node_modules/ (created after `npm install`)
```

Let me know if you face any issues during setup!
