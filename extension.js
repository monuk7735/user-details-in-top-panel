const St = imports.gi.St;
const Main = imports.ui.main;
const Clutter = imports.gi.Clutter;
const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const Me = imports.misc.extensionUtils.getCurrentExtension();

class Extension {
  constructor() {
    // this.panelButton = new St.Bin({
    //   style_class: "panel-button",
    //   y_align: Clutter.ActorAlign.CENTER
    // });
    this.panelButton = new St.BoxLayout({
      y_align: Clutter.ActorAlign.CENTER,
      style_class: "panel-button",
    });

    this.panelButtonText = new St.Label({
      text: GLib.get_user_name().toString(),
      style_class: "panel-text",
      y_align: Clutter.ActorAlign.CENTER,
    });

    let gicon = Gio.icon_new_for_string(
      "/var/lib/AccountsService/icons/" + GLib.get_user_name()
    );

    this.userAvatar = new St.Icon({ gicon, style_class: "user-avatar" });

    // this.userAvatarContainer = new St.Bin({
    //   y_align: Clutter.ActorAlign.CENTER,
    //   style_class: "user-avatar-container",
    // });

    // this.userAvatar.set_icon_size(22);
    // this.userAvatar.set

    // this.userAvatarContainer.set_child(this.userAvatar);

    this.panelButton.add_child(this.panelButtonText);
    this.panelButton.add_child(this.userAvatar);
  }

  enable() {
    log("enabled");
    // Main.panel.statusArea[
    //   "aggregateMenu"
    // ]._power.indicators.insert_child_at_index(this.panelButton, -1);
    Main.panel._rightBox.insert_child_at_index(this.panelButton, -1)
  }

  disable() {
    log("disabled");
    // Main.panel.statusArea["aggregateMenu"]._power.indicators.remove_child(
    //   this.panelButton
    // );
    Main.panel._rightBox.remove_child(this.panelButton)
  }
}

function init() {
  return new Extension();
}
