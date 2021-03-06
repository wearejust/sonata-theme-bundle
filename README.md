<p align="center"><a href="https://wearejust.com" target="_blank">
    <img src="https://user-images.githubusercontent.com/883497/32327075-89640c50-bfd5-11e7-91c8-6abed9964605.png">
</a></p>

# Sonata Theme Bundle
[![Latest Stable Version](https://img.shields.io/packagist/v/wearejust/sonata-theme-bundle.svg)](https://packagist.org/packages/wearejust/sonata-theme-bundle)

<p align="center"><a href="https://wearejust.com" target="_blank"><img src="https://user-images.githubusercontent.com/883497/32327076-898059be-bfd5-11e7-927e-69e75323c776.gif"></a></p>

Installation
============

__Hint:__ Coming from 1.x? Please check out our [upgrade guide](UPGRADE-2.0.md)

Step 1: Download the Bundle
---------------------------

Open a command console, enter your project directory and execute the
following command to download the latest stable version of this bundle:

```console
$ composer require wearejust/sonata-theme-bundle "^2"
```

This command requires you to have Composer installed globally, as explained
in the [installation chapter](https://getcomposer.org/doc/00-intro.md)
of the Composer documentation.

Step 2: Enable the Bundle
-------------------------

Then, enable the bundle by adding it to the list of registered bundles
in the `app/AppKernel.php` file of your project:

```php
<?php
// app/AppKernel.php

// ...
class AppKernel extends Kernel
{
    public function registerBundles()
    {
        $bundles = array(
            // ...

            new Wearejust\SonataThemeBundle\WearejustSonataThemeBundle(),
        );

        // ...
    }

    // ...
}
```

Also, enable the [pixSortableBehaviorBundle](https://github.com/pix-digital/pixSortableBehaviorBundle) by following their [installation guide](https://github.com/pix-digital/pixSortableBehaviorBundle).

Also, add routing in your ```routing.yml```

```yml
// routing.yml
_wearejust_sonata_theme:
    resource: "@WearejustSonataThemeBundle/Resources/config/routing.yml"
```


Step 3: Compile assets
-------------------------
The assets in this package has not een build yet. This means you have to build the assets yourself (Yarn is needed for this to work). There's webpack already configured for you, locked, loaded and ready to go. Add the following config to your own ```package.json``` file.

```json
{
  "scripts": {
    "build-cms": "cd ./vendor/wearejust/sonata-theme-bundle && yarn && yarn run build",
  }
}
```

You can now run ```yarn run build-cms``` and the assets will be published to the public dir, and symlinked automatically by the Symfony Framework.

Also add the following to your ```config.yml```.
```yml
framework:
    assets:
        packages:
            backend:
              json_manifest_path: '%kernel.root_dir%/../public/bundles/wearejustsonatatheme/build/manifest.json'
```


Step 4: Add extra config (optional)
-------------------------

It's possible to override the config we provide, you can specify an custom yml file ```(as Resources/config/theme.yml)``` the following way:

```yml
wearejust_sonata_theme:
    custom_theme: /path/to/custom/yml

```
As well as override our [config](https://github.com/wearejust/sonata-theme-bundle/blob/master/Resources/config/theme.yml) as well as specify an extra ```extra_css``` or ```extra_js``` key in your yml.

```yml
# example.yml

extra_css:
    - /path/to/extra/css.css

extra_js:
    - /path/to/extra/js.js
    
```
