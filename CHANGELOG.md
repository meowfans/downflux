# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.0.0](https://github.com/meowfans/downflux/compare/v2.0.0...v3.0.0) (2026-09-23)


### ⚠ BREAKING CHANGES

* there is no root entry. Import from the package directory instead,
for example `downflux/providers` or `downflux/types`.

Importing downflux/types costs 4.9 KB against 269.8 KB for downflux/providers.

### Features

* expose each package directory as its own entry point ([#161](https://github.com/meowfans/downflux/issues/161)) ([f7dd144](https://github.com/meowfans/downflux/commit/f7dd1440199c38075be63c42419e44de9a00a1d5))


### Bug Fixes

* bring scripts/ into the tsconfig project ([#162](https://github.com/meowfans/downflux/issues/162)) ([faf64fd](https://github.com/meowfans/downflux/commit/faf64fde2cce30a13ffe97bf5f04d25574a7855c)), closes [#151](https://github.com/meowfans/downflux/issues/151)

## [2.0.0](https://github.com/meowfans/downflux/compare/v1.1.1...v2.0.0) (2026-09-23)


### Features

* added analrz provider and implemented defaultVideoOutput for generalization ([#89](https://github.com/meowfans/downflux/issues/89)) ([999d6dc](https://github.com/meowfans/downflux/commit/999d6dc0c23e544823a3460f260ebc6cd5c18565))
* added docs for the new providers with canDownload prop ([#91](https://github.com/meowfans/downflux/issues/91)) ([d1e8a21](https://github.com/meowfans/downflux/commit/d1e8a21d82953fd21329005a89d1121433f7c784))
* added new providers and created issues for them ([#139](https://github.com/meowfans/downflux/issues/139)) ([683faf3](https://github.com/meowfans/downflux/commit/683faf34299b475182ae45c917b109c0446d2d05))
* implement signal handling for graceful shutdown and abort support ([#151](https://github.com/meowfans/downflux/issues/151)) ([26aad8b](https://github.com/meowfans/downflux/commit/26aad8b9c69f57a48960887a5c1cf136b2a3204f))


### Bug Fixes

* add run.ts to gitignore ([4f276f8](https://github.com/meowfans/downflux/commit/4f276f8a857ecbfb4e1c04e691328f42e6585bea))
* invert provider wiring so core no longer imports providers ([#154](https://github.com/meowfans/downflux/issues/154)) ([542d80b](https://github.com/meowfans/downflux/commit/542d80b3f64d48fb6cabf23eb6476a53a9bec0d0)), closes [#153](https://github.com/meowfans/downflux/issues/153)
* repo remote url was outdated and ignore tgz files as it is default  released ([#155](https://github.com/meowfans/downflux/issues/155)) ([a1788c7](https://github.com/meowfans/downflux/commit/a1788c7a89c2fb76dba22f4e20e48efddcf3894a))
* resolve undefined package exports and shrink the published bundle ([#153](https://github.com/meowfans/downflux/issues/153)) ([957f174](https://github.com/meowfans/downflux/commit/957f1745d4a64f7ecab30dbc5b5f4a9a18aae096))
* update mermaid flowchart ([cb0e8fe](https://github.com/meowfans/downflux/commit/cb0e8fe47aa732346ef30d4063d0ce2d0c29b3fe))
* update mermaid graph ([5efca2e](https://github.com/meowfans/downflux/commit/5efca2ef75dcde54077f697ac650839042e172a5))
* update new provider import docs ([a58cbf6](https://github.com/meowfans/downflux/commit/a58cbf69141e6a193a1d482c6808f47352c586a8))
* updated Host and license ([253361a](https://github.com/meowfans/downflux/commit/253361a3e123d696770ad21a01ed33bd1967848a))
* updated markdown docs ([bf01ffb](https://github.com/meowfans/downflux/commit/bf01ffb4fc18f6edf5651927da4ef8688a6c666b))
