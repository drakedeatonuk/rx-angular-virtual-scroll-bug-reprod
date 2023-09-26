# code reproduction

Issue:

to reproduce the issue:
1. install deps
2. run:
```
npx ng serve app --port 4200 --host localhost       
```
3. navigate to http://localhost:4200/
4. scroll up & down the page, and notice how NO console.log, 'in onIonInfinite' is printed to the console - thus no `ionInfinite` event is being triggered.

