# VimL 
[![GitHub issues](https://img.shields.io/github/issues/dunstontc/viml.svg)](https://github.com/dunstontc/viml/issues)
[![License](https://img.shields.io/github/license/dunstontc/viml.svg)](https://github.com/dunstontc/viml/blob/master/LICENSE)

## Features
- Automatically sets filetype for:
  - `*.vim`
  - `*.vimrc`
  - `*.gvim`
  - `*.ideavim`
  

## Notes on Vim Script
> There are several name spaces for variables.  
> Which one is to be used is specified by what is prepended:
<!-- (nothing) In a function: local to a function; otherwise: global -->

| scope             | prefix | definition                                  |
|:------------------|:-------|:--------------------------------------------|
| buffer-variable   | `b:`   | Local to the current buffer.                |
| window-variable   | `w:`   | Local to the current window.                |
| tabpage-variable  | `t:`   | Local to the current tab page.              |
| global-variable   | `g:`   | Global.                                     |
| local-variable    | `l:`   | Local to a function.                        |
| script-variable   | `s:`   | Local to a `:source`ed Vim script.          |
| function-argument | `a:`   | Function argument (only inside a function). |
| vim-variable      | `v:`   | Global, predefined by Vim.                  |


## [License](https://github.com/dunstontc/viml/blob/master/LICENSE)

