const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    
    disposable = vscode.commands.registerCommand('wsml.startMidsi', function () {
        const wsmlConfig = vscode.workspace.getConfiguration('wsml')
        const midsiPath = wsmlConfig.get('midsi.path')
        if (midsiPath) {
            const terminalMidsiService = vscode.window.createTerminal(`Midsi Server`);
            terminalMidsiService.show();
            terminalMidsiService.sendText(`cd ${midsiPath} && cd service && python3 midsi-service.py`);
        } else vscode.window.showInformationMessage(`Not found wsml.midsi.path in configuration file`);
    });
    context.subscriptions.push(disposable);
        
    disposable = vscode.commands.registerCommand('wsml.closeMidsi', function () {
        const wsmlConfig = vscode.workspace.getConfiguration('wsml')
        const midsiPath = wsmlConfig.get('midsi.path')
        if (midsiPath) {
            const terminalMidsiClient = vscode.window.createTerminal(`Midsi terminal`);
            terminalMidsiClient.show();
            terminalMidsiClient.sendText(`cd ${midsiPath} && cd service && python3 midsi-client.py --exit`);
        } else vscode.window.showInformationMessage(`Not found wsml.midsi.path in configuration file`);
    });
    context.subscriptions.push(disposable);
        
    disposable = vscode.commands.registerCommand('wsml.loadOntology', function () {
        const wsmlConfig = vscode.workspace.getConfiguration('wsml')
        const midsiPath = wsmlConfig.get('midsi.path')
        if (midsiPath) {
            var currentlyOpenTabfilePath = vscode.window.activeTextEditor.document.fileName;

            if (currentlyOpenTabfilePath.endsWith('.wsml')) {
                const terminalMidsiClient = vscode.window.createTerminal(`Midsi terminal`);
                terminalMidsiClient.show();
                terminalMidsiClient.sendText(`cd ${midsiPath} && cd service && python3 midsi-client.py --ontology ${currentlyOpenTabfilePath}`);
            } else vscode.window.showInformationMessage(`This file is not a valid WSML file.`);
        } else vscode.window.showInformationMessage(`Not found wsml.midsi.path in configuration file`);
    });
    context.subscriptions.push(disposable);
        
    disposable = vscode.commands.registerCommand('wsml.executeQuery', async function () {
        const wsmlConfig = vscode.workspace.getConfiguration('wsml')
        const midsiPath = wsmlConfig.get('midsi.path')
        if (midsiPath) {
            let query = await vscode.window.showInputBox({
                "placeHolder": "Digit the query"
            });
            if (query) {
                const terminalMidsiClient = vscode.window.createTerminal(`Midsi terminal`);
                terminalMidsiClient.show();
                terminalMidsiClient.sendText(`cd ${midsiPath} && cd service && python3 midsi-client.py --query "${query}"`);
            }
        } else vscode.window.showInformationMessage(`Not found wsml.midsi.path in configuration file`);
    });
    context.subscriptions.push(disposable);
    
    disposable = vscode.commands.registerCommand('wsml.executeQueryFile', function () {
        const wsmlConfig = vscode.workspace.getConfiguration('wsml')
        const midsiPath = wsmlConfig.get('midsi.path')
        if (midsiPath) {
            var currentlyOpenTabfilePath = vscode.window.activeTextEditor.document.fileName;

            if (currentlyOpenTabfilePath.endsWith('.wsml')) {
                terminalMidsiClient.show();
                terminalMidsiClient.sendText(`cd ${midsiPath} && cd service && python3 midsi-client.py --queryFile ${currentlyOpenTabfilePath}`);
            } else vscode.window.showInformationMessage(`This file is not a valid WSML file.`);
            
        } else vscode.window.showInformationMessage(`Not found wsml.midsi.path in configuration file`);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
