rm -rf docs;
ng build --output-path docs
git add . ;
git commit -am "release";
git push;
