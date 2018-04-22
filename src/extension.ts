/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

'use strict';

import * as vscode from 'vscode';
import { data as longOptions } from './completions/json/options.long.json';

export function activate(context: vscode.ExtensionContext) {

	vscode.languages.registerCompletionItemProvider('viml', {
        provideCompletionItems(document: vscode.TextDocument,
                               position: vscode.Position,
                               token: vscode.CancellationToken,
                               context: vscode.CompletionContext) {
            let itemz = longOptions;
            return itemz;
			// return [
				// createSnippetItem(),
				// new vscode.CompletionItem('Hello Code!'),
			// ];
		}
	});

	function createSnippetItem(): vscode.CompletionItem {

        /**
         * Read more here:
		 * https://code.visualstudio.com/docs/extensionAPI/vscode-api#CompletionItem
		 * https://code.visualstudio.com/docs/extensionAPI/vscode-api#SnippetString
		 * For SnippetString syntax look here:
         * https://code.visualstudio.com/docs/editor/userdefinedsnippets#_creating-your-own-snippets
         */
		let item = new vscode.CompletionItem('Good part of the day', vscode.CompletionItemKind.Snippet);
		item.insertText = new vscode.SnippetString("Good ${1|morning,afternoon,evening|}. It is ${1}, right?");
		item.detail = "Inserts a snippet that lets you select the _appropriate_ part of the day for your greeting.";
        item.documentation = new vscode.MarkdownString("Inserts a snippet that lets you select the _appropriate_ part of the day for your greeting.");
        item.label = "SNIPP";

		return item;
    }

    function createCompletionItem(argObj): vscode.CompletionItem {
        let item = argObj;
        return item;
    }
}
