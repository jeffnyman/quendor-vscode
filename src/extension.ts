import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log("Quendor extension enabled.");

  const disposable = vscode.commands.registerCommand("quendor.verify", () => {
    vscode.window.showInformationMessage("Quendor Active.");
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
