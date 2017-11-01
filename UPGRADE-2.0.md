UPGRADE FROM 1.x to 2.0
=======================

### Webpack 3 integration

 * `Webpack` is an requirement for 2.0. This means [Yarn](https://yarnpkg.com/lang/en/) is also an requirement. Because we don't commit compile assets anymore to this repository; we need an external compile tool to handle this job for us. In your own `package.json` file (your project) add the following scripts to your own project. After applying these changes you will be able to run `yarn run build-cms`

```json
// package.json
{
  "scripts": {
    "build-cms": "cd ./vendor/wearejust/sonata-theme-bundle && yarn && yarn run build",
  }
}
```

```yml
framework:
    assets:
        packages:
            backend:
              json_manifest_path: '%kernel.root_dir%/../public/bundles/justsonatatheme/build/manifest.json' 
```