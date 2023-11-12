import { Component } from "@angular/core";

@Component( {
    selector: "settings",
    templateUrl: "./settings.component.html",
    styleUrls: ["./settings.component.scss"]
})

export class SettingsComponent {
    isBinaryMode?: boolean = false;

    changeMode() {
        localStorage.setItem("gameMode", this.isBinaryMode ? "binary" : "multiple");
    }
}