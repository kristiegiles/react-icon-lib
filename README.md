# react-icon-lib

This library includes an Icon component and an IconDocs component, intended to be imported for use in another project.

Assuming you've cloned this project and your other project is a sibling in the same directory, you will want to run:

```
cd react-icon-lib
yarn install
yarn link 
cd ../my-other-project
yarn link ../react-icon-lib
```

To start watching for changes, run

`yarn dev`


Then in your other project:

```
import {Icon, IconDocs} from 'react-icon-lib' 
```

And use the icons like this:

```
<Icon slug="your-filename-slug"/> 
```

Or the docs like this:

```
<IconDocs/>
```

And then to add/change the icons, just save them into the `src/Icon/icons` directory as a 24px by 24px SVG.

For a demo "other project" that imports this lib see my [svg-demo-project-react](https://github.com/kristiegiles/svg-demo-project-react) repos.

