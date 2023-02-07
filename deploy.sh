npm run build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ddshiyu/techblog.git master

# cd ../
# rm -rf public
