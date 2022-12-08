# Changelog



## [4.0.0](https://github.com/patternslib/pat-code-editor/compare/3.0.0...4.0.0) (2022-12-08)


### Features


* **Build:** Include the build in the npm package. ([f14bd97](https://github.com/patternslib/pat-code-editor/commit/f14bd970aa02206001ba04d2b0af314231ae578a))The compiled build is now included in npm packages by including the dist
directory in .npmignore. To not increase the package size too much the
JavaScript map files are not included. Now you can include Patternslib
by using unpkg or jsDelivr like so:

https://unpkg.com/@patternslib/pat-code-editor@4.0.0/dist/bundle.min.js
or
https://cdn.jsdelivr.net/npm/@patternslib/pat-code-editor@4.0.0/dist/bundle.min.js


### Maintenance


* Add HTML example to demo. ([2c94b6c](https://github.com/patternslib/pat-code-editor/commit/2c94b6c9a0575ac16e34d9523a2131e618331e73))

* Update bundle in demo to correct URL. ([4d14b05](https://github.com/patternslib/pat-code-editor/commit/4d14b05828d79ae0a01fd9e8b088588de783f52d))

* Update webpack and bundle config. ([0ff2c88](https://github.com/patternslib/pat-code-editor/commit/0ff2c886b83e92dae1f250d2b9f0178ce4ea138e))

* Upgrade to class based pattern. ([e7ebe0b](https://github.com/patternslib/pat-code-editor/commit/e7ebe0b75d8afad214fd0994e095e9f6556b29ce))


### Breaking Changes


* Re-implement using highlight.js. ([9b3fb47](https://github.com/patternslib/pat-code-editor/commit/9b3fb477284bb3a88a43832fc9a580f559ee467c))

## [3.0.0](https://github.com/patternslib/pat-code-editor/compare/3.0.0-alpha.0...3.0.0) (2022-06-28)


### Maintenance


* @patternslib/patternslib needs to be installed. Adding to devDependencies to avoid version clashes with other packages depending on it. ([acad414](https://github.com/patternslib/pat-code-editor/commit/acad41482c2382aa237f9dbe72eee507994ae139))

* Upgrade to @patternslib/dev 2.2.0 and adapt module federation config. ([095ae11](https://github.com/patternslib/pat-code-editor/commit/095ae111590d89f3195bac5eeeb058f9ae6f1bb8))

## [3.0.0-alpha.0](https://github.com/patternslib/pat-code-editor/compare/2.1.2...3.0.0-alpha.0) (2022-06-15)


### Features


* **Build:** Build module federation enabled bundles. ([55c279a](https://github.com/patternslib/pat-code-editor/commit/55c279a36e15c7d9ebd9e5ede85ff0de9abb7d4d))


### Breaking Changes


* Depend on @patternslib/dev and extend config from there. ([e5fa5fb](https://github.com/patternslib/pat-code-editor/commit/e5fa5fb983ff2a68687dcbf054ee014149f756dd))

* Extend babel config from @patternslib/dev. ([0953950](https://github.com/patternslib/pat-code-editor/commit/095395029ece249e651a70959dee226da30af59b))

* Extend commitlint config from @patternslib/dev. ([d60483d](https://github.com/patternslib/pat-code-editor/commit/d60483d7f47b7298088ac421b8f9a54b8cfba462))

* Extend eslint config from @patternslib/dev. ([c81f0b8](https://github.com/patternslib/pat-code-editor/commit/c81f0b8109e74227e8659d329104f9ef6a942064))

* Extend jest config from @patternslib/dev. ([e0261e9](https://github.com/patternslib/pat-code-editor/commit/e0261e964f864e54507c49e7e23a5a771f972487))

* Extend Makefile from @patternslib/dev. ([88f26d6](https://github.com/patternslib/pat-code-editor/commit/88f26d61232cfdf703655204f2e1f3c89def0b18))

* Extend prettier config from @patternslib/dev. ([6967292](https://github.com/patternslib/pat-code-editor/commit/696729242da0a0702f03b43468a0526162bdbc98))

* Extend release-it config from @patternslib/dev. ([f5f6667](https://github.com/patternslib/pat-code-editor/commit/f5f66675e30d68282f63b9f4ad08754999c7dc8e))

* Extend webpack config from @patternslib/dev. ([6f50d8d](https://github.com/patternslib/pat-code-editor/commit/6f50d8dc2a39b8b195d2e7a00dd43e0a9b65dd0b))


### Maintenance


* **build:** Add build:dev script to package.json to create a unminified development build. ([74b25b9](https://github.com/patternslib/pat-code-editor/commit/74b25b9434fe1bbe861bf408b3d2609e44ea4f95))

* **Build:** @patternslib/patternslib as peerDependency. ([6fb7778](https://github.com/patternslib/pat-code-editor/commit/6fb77784f9acd9f627651a5749daafb0e29a7a4c))Move @patternslib/patternslib dependency to peerDependencies and set to any version to avoid version conflicts when this package is a dependency of another Patternslib based package.

* **Build:** Add @patternslib/patternslib also to devDependencies so that we get it installed. ([afd04d6](https://github.com/patternslib/pat-code-editor/commit/afd04d6403a8a69725c3c37049a9e2616ea5e003))

* **Build:** Add keyword "patternslib" to package.json. ([9edac4c](https://github.com/patternslib/pat-code-editor/commit/9edac4ccd42982b662bb663a5aaa5217f80b2f04))

* **Build:** Extend jest.config.js from Patternslib and reuse their setupTests file too. ([3f2fcd0](https://github.com/patternslib/pat-code-editor/commit/3f2fcd0b7684aa730159c223ad543f2bd8160d77))

* **Build:** Keep yarn.lock in repository. ([5762dab](https://github.com/patternslib/pat-code-editor/commit/5762dab299c80ef6355bea5ad2337e6e07528ffa))

* **Build:** Makefile - Allow OTP when publishing to npm, build bundles and publish them on GitHub, add pre-release targets. ([9fabaea](https://github.com/patternslib/pat-code-editor/commit/9fabaeae4857bb658ab2a508b27f43a9dcb7cb21))

* **Build:** Remove dependency regenerator-runtime except from test setup. The async/await runtime handling is already built-in in current Babel. ([2ed4cb2](https://github.com/patternslib/pat-code-editor/commit/2ed4cb25a587951d8d76466a7a8e3f041d1154c4))

* **Build:** Update GitHub actions setup. ([3a8bbab](https://github.com/patternslib/pat-code-editor/commit/3a8bbab739fdaaecb04ef44cb85accd60323c0c0))

* **Build:** Upgrade and cleanup dependencies. ([20fb5db](https://github.com/patternslib/pat-code-editor/commit/20fb5db11deec8de8e260f0980eecaeeb9a31ef3))

* **Build:** Upgrade codejar and prismjs. ([663e3b6](https://github.com/patternslib/pat-code-editor/commit/663e3b6b3e2ae237c299dfdfac18c54cad0b83ba))

### [2.1.2](https://github.com/patternslib/pat-code-editor/compare/2.1.1...2.1.2) (2022-04-09)


### Bug Fixes

* Dispatch input event after content has changed. This is also necessary for pat-autosubmit to work. ([602fd86](https://github.com/patternslib/pat-code-editor/commit/602fd86b7d3b6544219f7f1cc3acb1989fd1a7cf))### [2.1.1](https://github.com/patternslib/pat-code-editor/compare/2.1.0...2.1.1) (2022-03-30)


### Bug Fixes

* Fix demo for correct bundle location. ([88fafab](https://github.com/patternslib/pat-code-editor/commit/88fafab775ab728ede30dfdf39694ee5de14f6c2))

* Set the editor to display-block to always show a cursor, even with not contents. ([3b32570](https://github.com/patternslib/pat-code-editor/commit/3b325709c8e5e83fe598043232526ac3ae44930f))



### Maintenance

* Add but don't use code-editor.scss which should show line-numbers but is not working yet. ([e6989ef](https://github.com/patternslib/pat-code-editor/commit/e6989ef1a5017c99acd06c0ab788c0a0ac0af4a7))

* Upgrade dependencies. ([8228097](https://github.com/patternslib/pat-code-editor/commit/8228097f1d15edb023efd47b1bfb5386c2e45b80))

* **webpack:** Configure devServer static directory. ([b9ef4c7](https://github.com/patternslib/pat-code-editor/commit/b9ef4c792e1570dcab54e8f4ca2c5d1d43007d4b))## [2.1.0](https://github.com/patternslib/pat-code-editor/compare/2.0.0...2.1.0) (2021-12-03)


### Bug Fixes

* Deactivate line numbers - They do not work nicely with a <pre><code> structure yet. ([250149f](https://github.com/patternslib/pat-code-editor/commit/250149f6f9c364c7e468ff110f4053c49c4b172f))

* Escape HTML when initializing the editor. ([dcef878](https://github.com/patternslib/pat-code-editor/commit/dcef87852148109363dc83badcdfff03a58e873f))

* Fix the tab option and allow tabs as \t and spaces in quotes as values. ([a01aedb](https://github.com/patternslib/pat-code-editor/commit/a01aedb8534159f5b30485266b2b30577372635c))



### Maintenance

* Better examples. ([b2bcb31](https://github.com/patternslib/pat-code-editor/commit/b2bcb3197b1250b94fb9744f7de750ada7f1b404))

* **dependencies:** Upgrade dependencies. ([82ce7fb](https://github.com/patternslib/pat-code-editor/commit/82ce7fbc627b5de77ef9e9f4948d58efda53bf71))

* **dependencies:** Upgrade Patternslib to 6.2.0 due to dependency on escape/unescape utility methods. ([6e14809](https://github.com/patternslib/pat-code-editor/commit/6e14809cfda6aad4ac7f5b892351b18ced5d0080))

* **tests:** Improve tests. ([19f9c2e](https://github.com/patternslib/pat-code-editor/commit/19f9c2e96e9c0f8f5cc2a7614f544a88432c7387))

## [2.0.0](https://github.com/patternslib/pat-code-editor/compare/1.2.0...2.0.0) (2021-11-17)


### Breaking Changes

* Upgrade to Webpack 5. ([8390e34](https://github.com/patternslib/pat-code-editor/commit/8390e34fee927d67218607e0f9d36d114ad4fb08))



### Maintenance

* **build:** Extend Patternslib release-it config file. ([b017c64](https://github.com/patternslib/pat-code-editor/commit/b017c644965c92eb13dd7dfb5297ce1cd41dc6e8))

* **build:** Release on GitHub releases. ([dcd3718](https://github.com/patternslib/pat-code-editor/commit/dcd371839a80b259a15b98be45c3f442ee5ab81d))

## [1.2.0](https://github.com/patternslib/pat-code-editor/compare/1.1.0...1.2.0) (2021-09-22)


### Maintenance

* Align with build changes from Patternslib v5. ([1d6cf58](https://github.com/patternslib/pat-code-editor/commit/1d6cf58187b6927f1e268265c520edf8e98c5e59))
* Set json also to 4-space indentation. ([c9cf8ef](https://github.com/patternslib/pat-code-editor/commit/c9cf8efc8b20c4d88ebd4e8b815bff638d2244c2))
* Upgrade dependencies. ([95d899e](https://github.com/patternslib/pat-code-editor/commit/95d899ea0846f6fc851f8aded531ebb0ca2ccf70))
* Use babel config from Patternslib directly. ([7da4f83](https://github.com/patternslib/pat-code-editor/commit/7da4f8349106a07e574b0588e65dbdd7068cf6b8))

## [1.1.0](https://github.com/patternslib/pat-code-editor/compare/1.0.1...1.1.0) (2021-06-15)


### Maintenance

* Test updates after jest upgrade. ([728fb34](https://github.com/patternslib/pat-code-editor/commit/728fb34723b8892660eacee86e745f98cf963b95))
* **dependencies:** Depend on Patternslib v4.4.0. ([05d6d16](https://github.com/patternslib/pat-code-editor/commit/05d6d16c75199ec21341f5b42a30d36b62defa4b))
* **dependencies:** Upgrade dependencies on minor+patch level. ([f40a3a4](https://github.com/patternslib/pat-code-editor/commit/f40a3a4bfd9c0242ce5c444f9240675747a7f7de))
* **webpack:** Adapt start script to recent dependency changes. ([3815a2d](https://github.com/patternslib/pat-code-editor/commit/3815a2ddbb5e4724d8d90d834db85a9544f38dd8))
* **webpack:** Simplify webpack. ([422d190](https://github.com/patternslib/pat-code-editor/commit/422d190b49cd1972813d9d194c208870c2da37f8))

### [1.0.1](https://github.com/patternslib/pat-code-editor/compare/1.0.0...1.0.1) (2021-04-23)


### Maintenance

* **make release-patch:** Add missing patch for patch level releases. ([1115166](https://github.com/patternslib/pat-code-editor/commit/1115166862a7bf9b6127bb46ccf5d6abd9f2d8f4))
* **Release:** Remove the release-web target. Only Patternslib releases are pushed to Patterns-releases on Github. ([b516b50](https://github.com/patternslib/pat-code-editor/commit/b516b50149232925faf57817a16d1d0608f099c6))
* **Release process:** Do not include the release commit in the changelog. ([60870cb](https://github.com/patternslib/pat-code-editor/commit/60870cb1a0f7b77e757b0f5bbbd981321d18a623))

## 1.0.0 (2021-04-20)


### Features

* Upgrade CodeJar to 3.4.0. ([22aebc7](https://github.com/patternslib/pat-code-editor/commit/22aebc731997d27253495526ab7f61f6d24b63b2))


### Bug Fixes

* indentOn needs to be a RegExp. Make it so. ([00cecdb](https://github.com/patternslib/pat-code-editor/commit/00cecdb28870d6951f185d3021384620b1e7ec51))


### Maintenance

* Add/fix basic tests. ([f51f0be](https://github.com/patternslib/pat-code-editor/commit/f51f0bec4d0cd08a5f33761fd4de983a3566aad2))
* Upgrade to Patternslib v4 final - code-editor customizations. ([fa91f15](https://github.com/patternslib/pat-code-editor/commit/fa91f154c48364edf30a2feac11e9b6399d627e5))
* Upgrade to Patternslib v4 final. ([a2a1e1f](https://github.com/patternslib/pat-code-editor/commit/a2a1e1fabe33a3f0ba15abf14ebb1787c6807e66))


- Initial release.