const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    const terminal = vscode.window.createTerminal(`Midsi terminal`);

	disposable = vscode.commands.registerCommand('wsml.loadOntology', function () {
        var currentlyOpenTabfilePath = vscode.window.activeTextEditor.document.fileName;

        if (currentlyOpenTabfilePath.endsWith('.wsml')) {
            terminal.show();
            terminal.sendText(`python3 /home/daniel/Documentos/midsi/service/midsi-client.py --ontology ${currentlyOpenTabfilePath}`);
        } else {
            vscode.window.showInformationMessage(`This file is not a valid WSML file.`);
        }
        
	});
    context.subscriptions.push(disposable);
    
	disposable = vscode.commands.registerCommand('wsml.executeQuery', async function () {
        let query = await vscode.window.showInputBox({
            "placeHolder": "Digit the query"
        });
        if (query) {
            terminal.show();
            terminal.sendText(`python3 /home/daniel/Documentos/midsi/service/midsi-client.py --query "${query}"`);
        }
	});
	context.subscriptions.push(disposable);
    
	disposable = vscode.commands.registerCommand('wsml.executeQueryFile', function () {
        var currentlyOpenTabfilePath = vscode.window.activeTextEditor.document.fileName;

        if (currentlyOpenTabfilePath.endsWith('.wsml')) {
            terminal.show();
            terminal.sendText(`python3 /home/daniel/Documentos/midsi/service/midsi-client.py --queryFile ${currentlyOpenTabfilePath}`);
        } else {
            vscode.window.showInformationMessage(`This file is not a valid WSML file.`);
        }
		
	});
	context.subscriptions.push(disposable);
    
	disposable = vscode.commands.registerCommand('wsml.clearOntologys', function () {
        terminal.show();
        terminal.sendText(`python3 /home/daniel/Documentos/midsi/service/midsi-client.py --clear`);
	});
	context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
