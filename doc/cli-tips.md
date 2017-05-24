#Angular-cli Tips

## Specific module or module dir as flag

When generating components you can specify in which module you like them to appear.

For example:
```
$ ng g m messages
installing module
  create src/app/messages/messages.module.ts

$ ng g c messages/list
installing component
  create src/app/messages/list/list.component.ts
  update src/app/messages/messages.module.ts

$ ng g c messages/view
installing component
  create src/app/messages/view/view.component.ts
  update src/app/messages/messages.module.ts
```
And you can even go further in-depth:

```
$ ng g c messages/list/item
installing component
  create src/app/messages/list/item/item.component.ts
  update src/app/messages/messages.module.ts

$ ng g c messages/list/item/date
installing component
  create src/app/messages/list/item/date/date.component.ts
  update src/app/messages/messages.module.ts
```

## Replace css in favor of sass/scss

#### New projects

For new projects we can set the options ```--style=sass``` or ```--style=scss``` according to the desired flavor SASS/SCSS

* Use SASS syntax
```ng new project --style=sass ```
* Use SCSS syntax
```ng new project --style=scss ```
then install node-sass,

```npm install node-sass --save-dev ```


### Updating existing projects

To make angular-cli to compile sass files with node-sass, I had to run,

```npm install node-sass --save-dev ```
which installs node-sass. Then

for SASS syntax
``` ng set defaults.styleExt sass ```
for SCSS syntax
``` ng set defaults.styleExt scss ```
to set the default styleExt to sass

(or)

change styleExt to sass or scss for desired syntax in .angular-cli.json,

for SASS syntax

```json
"defaults": {
     "styleExt": "sass",
}
```
for SCSS syntax
```json
"defaults": {
     "styleExt": "scss",
}
```
Although it generated compiler errors.
ERROR in multi styles
Module not found: Error: Can't resolve '/home/USER/projects/project/src/styles.css' in '/home/USER/projects/project'
 @ multi styles 
which was fixed by changing the lines of .angular-cli.json,
```json
"styles": [
        styles.scss
      ],
```
to either,

for SASS syntax
```json
"styles": [
        "styles.sass"
      ],
```
for SCSS syntax
```json
"styles": [
        "styles.scss"
      ],
```
