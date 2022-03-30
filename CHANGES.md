

### [2.1.1](https://github.com/patternslib/pat-code-editor/compare/2.1.0...2.1.1) (2022-03-30)


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