# 📂 File Explorer Component

A simple React component that displays files and directories in a **hierarchical tree format**.  
Supports expand/collapse for directories, alphabetical sorting, and a clean UI with minimal styling.

---

## ✨ Features
- 📁 **Directories**
  - Expandable / collapsible
  - Directories shown before files
  - Alphabetically sorted
  - Can be empty
- 📄 **Files**
  - Leaf nodes (not expandable)
  - Displayed under their parent directory
- 🔀 Sorting
  - Directories first, then files
  - Each group sorted alphabetically
- 🖱️ User Experience
  - Click a directory to toggle open/close
  - Prevents accidental text selection

---

## 🚀 Structure

```bash
src/
  ├── App.js
  ├── FileExplorer.js
  ├── data.js

