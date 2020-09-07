const St = imports.gi.St;
const Main = imports.ui.main;
const Clutter = imports.gi.Clutter;
const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;

class Extension {

  constructor() {
    this.panelButton = new St.Bin({
      y_align: Clutter.ActorAlign.CENTER,
      style_class: "container",
    });

    this.panelButtonText = new St.Label({
      text: GLib.get_user_name().toString(),
      style_class: "panelText",
      y_align: Clutter.ActorAlign.CENTER,
    });
    this.panelButton.set_child(this.panelButtonText);
  }

  enable() {
    log("enabled");
    Main.panel.statusArea[
      "aggregateMenu"
    ]._power.indicators.insert_child_at_index(this.panelButton, -1);
  }

  disable() {
    log("disabled");
    Main.panel.statusArea["aggregateMenu"]._power.indicators.remove_child(
      this.panelButton
    );
  }
}

function init() {
  return new Extension();
}
