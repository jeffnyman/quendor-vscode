import * as vscode from "vscode";
import * as assert from "assert";
import { describe, it, after, before } from "mocha";
import * as sinon from "sinon";

describe("Extension Tests", function () {
  let showInfoMessageStub: sinon.SinonStub;

  before(async function () {
    showInfoMessageStub = sinon.stub(vscode.window, "showInformationMessage");

    await vscode.extensions.getExtension("jeffnyman.quendor")?.activate();
  });

  after(() => {
    vscode.window.showInformationMessage("Extension Tests Completed");
    showInfoMessageStub.restore();
  });

  it("should execute the 'quendor.verify' command and show a message", async () => {
    await vscode.commands.executeCommand("quendor.verify");

    assert.ok(
      showInfoMessageStub.calledWith("Quendor Active."),
      "Expected showInformationMessage to be called with 'Quendor Active.'",
    );
  });
});
