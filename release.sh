rm -rf docs;
ng build --output-path docs --base-href /aboutme/
git add . ;
git commit -am "release";
git push;
