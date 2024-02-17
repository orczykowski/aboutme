rm -rf docs;
ng build --output-path docs
mv  docs/browser/* docs/;
rm docs/browser
git add . ;
git commit -am "release";
git push;
