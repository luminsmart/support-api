# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)
- [Netlify Functions](https://www.netlify.com/products/functions/)

## Netlify Setup

1. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```



## Development

The Remix dev server starts your app in development mode, rebuilding assets on file changes. To start the Remix dev server:

```sh
npm install
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

The Netlify CLI builds a production version of your Remix App Server and splits it into Netlify Functions that run locally. This includes any custom Netlify functions you've developed. The Netlify CLI runs all of this in its development mode.

```sh
netlify dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

Note: When running the Netlify CLI, file changes will rebuild assets, but you will not see the changes to the page you are on unless you do a browser refresh of the page. Due to how the Netlify CLI builds the Remix App Server, it does not support hot module reloading.

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
# preview deployment
netlify deploy --build

# production deployment
netlify deploy --build --prod
```


## Example JSON 

#### Dialog
```JSON
{
    "title": "Welcome to Lumin Edge",
    "description": "Hello. <b>world</b>",
    "url": "https://luminsmart.freshdesk.com/a/solutions/articles/72000551186",
    "platforms": [
        "android",
        "desktop"
    ],
    "versions": {
        "min": "0.0.1",
        "max": "0.0.3",
        "target": "0.0.2"
    }
}
```
#### Dialog Type
```JS
 {
    id: number;
    title: string;
    description: string;
    url: string | null;
    platforms: string[] | null;
    version: IVersion | null;
}
```


#### Banner

```JSON
{
    "title": "Example Banner",
    "description": "Example Description",
    "classes": "text-primary",
    "url": "",
    "closable": true
}
```

#### Banner Type
```JS
{
  id: number | string;
  title: string;
  description: string;
  classes?: string | null;
  url?: string | null;
  click?: () => void;
  icon?: string | null;
  platforms: string[] | null;
  version: Version | null;
  closable: boolean | null;
  isSupportStatus?: boolean | null;
  callout?: boolean;
}
```


### IVerson Type 
```JS
{
    min: string;
    max: string;
    target: string;
}
```
