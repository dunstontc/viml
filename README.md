# VimL 
[![GitHub issues](https://img.shields.io/github/issues/dunstontc/viml.svg)](https://github.com/dunstontc/viml/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dunstontc/viml/blob/master/LICENSE) 

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

## Highlights

> To set a link:
> 
>     :hi[ghlight][!] [default] link {from-group} {to-group}
> 
> To remove a link:
> 
>     :hi[ghlight][!] [default] link {from-group} NONE


## NAMING CONVENTIONS  

> see `:h group-name`

- *Comment* any comment
- *Constant* any constant
  - String  a string constant: "this is a string"
  - Character a character constant: 'c', '\n'
  - Number  a number constant: 234, 0xff
  - Boolean a boolean constant: TRUE, false
  - Float  a floating point constant: 2.3e10
- *Identifier* any variable name
  - Function function name (also: methods for classes)
- *Statement* any statement
  - Conditional if, then, else, endif, switch, etc.
  - Repeat  for, do, while, etc.
  - Label  case, default, etc.
  - Operator "sizeof", "+", "*", etc.
  - Keyword any other keyword
  - Exception try, catch, throw
- *PreProc* generic Preprocessor
  - Include preprocessor #include
  - Define  preprocessor #define
  - Macro  same as Define
  - PreCondit preprocessor #if, #else, #endif, etc.
- *Type*  int, long, char, etc.
  - StorageClass static, register, volatile, etc.
  - Structure struct, union, enum, etc.
  - Typedef A typedef
- *Special* any special symbol
  - SpecialChar special character in a constant
  - Tag  you can use CTRL-] on this
  - Delimiter character that needs attention
  - SpecialComment special things inside a comment
  - Debug  debugging statements
- *Underlined* text that stands out, HTML links
- *Ignore*  left blank, hidden  |hl-Ignore|
- *Error*  any erroneous construct
- *Todo*  anything that needs extra attention; mostly the keywords TODO FIXME and XXX

## Highlight Groups

					*highlight-groups* *highlight-default*
These are the builtin highlighting groups.  Note that the highlighting depends
on the value of 'background'.  You can see the current settings with the
":highlight" command.
							*hl-ColorColumn*
ColorColumn	used for the columns set with 'colorcolumn'
							*hl-Conceal*
Conceal		placeholder characters substituted for concealed
		text (see 'conceallevel')
							*hl-Cursor*
Cursor		the character under the cursor
							*hl-CursorIM*
CursorIM	like Cursor, but used when in IME mode |CursorIM|
							*hl-CursorColumn*
CursorColumn	the screen column that the cursor is in when 'cursorcolumn' is
		set
							*hl-CursorLine*
CursorLine	the screen line that the cursor is in when 'cursorline' is
		set
							*hl-Directory*
Directory	directory names (and other special names in listings)
							*hl-DiffAdd*
DiffAdd		diff mode: Added line |diff.txt|
							*hl-DiffChange*
DiffChange	diff mode: Changed line |diff.txt|
							*hl-DiffDelete*
DiffDelete	diff mode: Deleted line |diff.txt|
							*hl-DiffText*
DiffText	diff mode: Changed text within a changed line |diff.txt|
						 {Nvim} *hl-EndOfBuffer*
EndOfBuffer	filler lines (~) after the end of the buffer.
		By default, this is highlighted like |hl-NonText|.
						 {Nvim} *hl-TermCursor*
TermCursor	cursor in a focused terminal
						 {Nvim} *hl-TermCursorNC*
TermCursorNC	cursor in an unfocused terminal
							*hl-ErrorMsg*
ErrorMsg	error messages on the command line
							*hl-VertSplit*
VertSplit	the column separating vertically split windows
							*hl-Folded*
Folded		line used for closed folds
							*hl-FoldColumn*
FoldColumn	'foldcolumn'
							*hl-SignColumn*
SignColumn	column where |signs| are displayed
							*hl-IncSearch*
IncSearch	'incsearch' highlighting; also used for the text replaced with
		":s///c"
							*hl-Substitute*
Substitute	|:substitute| replacement text highlighting

							*hl-LineNr*
LineNr		Line number for ":number" and ":#" commands, and when 'number'
		or 'relativenumber' option is set.
							*hl-CursorLineNr*
CursorLineNr	Like LineNr when 'cursorline' or 'relativenumber' is set for
		the cursor line.
							*hl-MatchParen*
MatchParen	The character under the cursor or just before it, if it
		is a paired bracket, and its match. |pi_paren.txt|

							*hl-ModeMsg*
ModeMsg		'showmode' message (e.g., "-- INSERT --")
							*hl-MoreMsg*
MoreMsg		|more-prompt|
							*hl-NonText*
NonText		'@' at the end of the window, characters from 'showbreak' 
		and other characters that do not really exist in the text 
		(e.g., ">" displayed when a double-wide character doesn't 
		fit at the end of the line). See also |hl-EndOfBuffer|.
							*hl-Normal*
Normal		normal text
							*hl-NormalNC*
NormalNC	normal text in non-current windows
							*hl-Pmenu*
Pmenu		Popup menu: normal item.
							*hl-PmenuSel*
PmenuSel	Popup menu: selected item.
							*hl-PmenuSbar*
PmenuSbar	Popup menu: scrollbar.
							*hl-PmenuThumb*
PmenuThumb	Popup menu: Thumb of the scrollbar.
							*hl-Question*
Question	|hit-enter| prompt and yes/no questions
							*hl-QuickFixLine*
QuickFixLine	Current |quickfix| item in the quickfix window. Combined with
                |hl-CursorLine| when the cursor is there.
							*hl-Search*
Search		Last search pattern highlighting (see 'hlsearch').
		Also used for similar items that need to stand out.
							*hl-SpecialKey*
SpecialKey	Unprintable characters: text displayed differently from what
		it really is. But not 'listchars' whitespace. |hl-Whitespace|
							*hl-SpellBad*
SpellBad	Word that is not recognized by the spellchecker. |spell|
		Combined with the highlighting used otherwise.
							*hl-SpellCap*
SpellCap	Word that should start with a capital. |spell|
		Combined with the highlighting used otherwise.
							*hl-SpellLocal*
SpellLocal	Word that is recognized by the spellchecker as one that is
		used in another region. |spell|
		Combined with the highlighting used otherwise.
							*hl-SpellRare*
SpellRare	Word that is recognized by the spellchecker as one that is
		hardly ever used. |spell|
		Combined with the highlighting used otherwise.
							*hl-StatusLine*
StatusLine	status line of current window
							*hl-StatusLineNC*
StatusLineNC	status lines of not-current windows
		Note: if this is equal to "StatusLine" Vim will use "^^^" in
		the status line of the current window.
							*hl-TabLine*
TabLine		tab pages line, not active tab page label
							*hl-TabLineFill*
TabLineFill	tab pages line, where there are no labels
							*hl-TabLineSel*
TabLineSel	tab pages line, active tab page label
							*hl-Title*
Title		titles for output from ":set all", ":autocmd" etc.
							*hl-Visual*
Visual		Visual mode selection
 							*hl-VisualNOS*
VisualNOS	Visual mode selection when vim is "Not Owning the Selection".
							*hl-WarningMsg*
WarningMsg	warning messages
							*hl-Whitespace*
Whitespace	"nbsp", "space", "tab" and "trail" in 'listchars'
							*hl-WildMenu*
WildMenu	current match in 'wildmenu' completion

					*hl-User1* *hl-User1..9* *hl-User9*
The 'statusline' syntax allows the use of 9 different highlights in the
statusline and ruler (via 'rulerformat').  The names are User1 to User9.

For the GUI you can use the following groups to set the colors for the menu,
scrollbars and tooltips.  They don't have defaults.  This doesn't work for the
Win32 GUI.  Only three highlight arguments have any effect here: font, guibg,
and guifg.

							*hl-Menu*
Menu		Current font, background and foreground colors of the menus.
		Also used for the toolbar.
		Applicable highlight arguments: font, guibg, guifg.

							*hl-Scrollbar*
Scrollbar	Current background and foreground of the main window's
		scrollbars.
		Applicable highlight arguments: guibg, guifg.

							*hl-Tooltip*
Tooltip		Current font, background and foreground of the tooltips.
		Applicable highlight arguments: font, guibg, guifg.

## [License](https://github.com/dunstontc/viml/blob/master/LICENSE)

Comment 
Constant
String
Character
Number
Boolean
Float
Identifier
Function 
Statement 
Conditional
Repeat
Label
Operator
Keyword
Exception
PreProc
Include
Define
Macro
PreCondit
Type
StorageClass
Structure
Typedef
Special
SpecialChar 
Tag  
Delimiter 
SpecialComment 
Debug  
Underlined
Ignore
Error
Todo
