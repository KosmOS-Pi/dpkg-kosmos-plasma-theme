loadTemplate("org.kde.plasma.desktop.defaultPanel")

// KosmOS: customise the stock panel
var allPanels = panels();
for (var i = 0; i < allPanels.length; i++) {
    var widgets = allPanels[i].widgets();
    for (var k = 0; k < widgets.length; k++) {
        var w = widgets[k];
        if (w.type == "org.kde.plasma.kickoff") {
            w.currentConfigGroup = ["General"];
            w.writeConfig("icon", "kosmos");
        } else if (w.type == "org.kde.plasma.icontasks") {
            w.currentConfigGroup = ["General"];
            w.writeConfig("launchers", [
                "preferred://filemanager",
                "applications:org.kde.kstars.desktop",
                "applications:phd2.desktop",
                "preferred://browser",
                "applications:org.kde.konsole.desktop"
            ]);
        }
    }
}

var desktopsArray = desktopsForActivity(currentActivity());
for( var j = 0; j < desktopsArray.length; j++) {
    desktopsArray[j].wallpaperPlugin = 'org.kde.image';
}
