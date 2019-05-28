…or create a new repository on the command line
echo "# vue" >> README.md
git init
git status
git add .
git commit -m "init my project"
git remote add origin git@github.com:viljz/vue.git
git push -u origin master

…or push an existing repository from the command line
git remote add origin git@github.com:viljz/vue.git
git push -u origin master