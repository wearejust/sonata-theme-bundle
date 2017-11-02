UPGRADE FROM 1.x to 2.0
=======================

### Webpack 3 integration

 * `Webpack` is an requirement for 2.0. This means [Yarn](https://yarnpkg.com/lang/en/) is also an requirement. Because we don't commit compile assets anymore to this repository; we need an external compile tool to handle this job for us. In your own `package.json` file (your project) add the following scripts to your own project. After applying these changes you will be able to run `yarn run build-cms`
    ```json
    # package.json
    {
        "scripts": {
            "build-cms": "cd ./vendor/wearejust/sonata-theme-bundle && yarn && yarn run build",
        }
    }
    ```

    ```yml
    # config.yml
    framework:
        assets:
            packages:
                backend:
                  json_manifest_path: '%kernel.root_dir%/../public/bundles/wearejustsonatatheme/build/manifest.json' 
    ```
    
    Please bear in mind that if you use your project in a deploy pipeline (example: [GitLab Pipelines](https://docs.gitlab.com/ee/ci/pipelines.html)) you don't forget to build these assets in this process.

### Added custom template controller
 * The JS uses an modal which provides some new HTML. A new Controller has been added to make this feature work. Please add the following to your routing.

    ```yml
    # routing.yml
    _wearejust_sonata_theme:
        resource: "@WearejustSonataThemeBundle/Resources/config/routing.yml"
    ```

### Namespace change

```php
<?php
    // app/AppKernel.php
    class AppKernel extends Kernel
    {
        public function registerBundles()
        {
            $bundles = array(
            // ...
                // Before
                new Just\SonataThemeBundle\JustSonataThemeBundle(),
                
                // After
                new Wearejust\SonataThemeBundle\WearejustSonataThemeBundle(),
          );

          // ...
      }

      // ...
  }
  ```
  
This means also in the `config.yml` you need to change the base config key
```yml
# app/config.yml

# Before:
just_sonata_theme:

# After
wearejust_sonata_theme:
```


### Finally, change your composer.json
 * Don't forget to add the new version to your own composer.json file

    ```json
    # composer.json
    {
        "require": {
            "wearejust/sonata-theme-bundle": "^2"
        }
    }
    ```
    
    And run the following command:
    
    ```composer update wearejust/sonata-theme-bundle --with-dependencies```
