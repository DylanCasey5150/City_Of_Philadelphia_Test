# Before you start

Install all of the dependencies! You can do that by just running `yarn`. If you don't have yarn you can install it using the instructions [here!](https://yarnpkg.com/lang/en/docs/install/)

Once you install yarn, change directory and use:

`yarn start` - Runs the app and watches for changes

`CREATE-REACT-APP-README.md` - The original create-react-app readme. This project uses create-react-app as it's base.

# Components

`PostData` - Located in the Data-Container. Fetches data in the componentDidMount lifecycle hook.

`Posts` - makes sure `PostRow`'s for each data item is rendered as well as an `PostFilter` and `PostHeader`

`PostHeader` - renders the headers of the table.

`PostRow` - renders data in proper order for each post.

# Utils

`organizePosts` - filters, sorts and limits data
