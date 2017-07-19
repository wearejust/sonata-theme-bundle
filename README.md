Installation
============

Step 1: Download the Bundle
---------------------------

Open a command console, enter your project directory and execute the
following command to download the latest stable version of this bundle:

```console
$ composer require wearejust/sonata-theme-bundle "~1"
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

            new Just\SonataThemeBundle\JustSonataThemeBundle(),
        );

        // ...
    }

    // ...
}
```

Also, enable the [pixSortableBehaviorBundle](https://github.com/pix-digital/pixSortableBehaviorBundle) by following their [installation guide](https://github.com/pix-digital/pixSortableBehaviorBundle).

Step 3: Add extra config (optional)
-------------------------

It's possible to override the config we provide, you can specify an custom yml file ```(as Resources/config/theme.yml)``` the following way:

```yml
just_sonata_theme:
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
